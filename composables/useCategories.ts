const state = reactive({
  categories: [] as any,
})

type FormatedCategoriesType = {
  uuid: string
  name: string
  path: string
  icon: string
}

export function useCategories() {
  const storyblokApi = useStoryblokApi()

  async function fetchCategories() {
    try {
      const { data } = await storyblokApi.get('cdn/stories/', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'categories/', // you pass the name for the folder that you want to fetch
        is_startpage: false,
      })

      if (!data || !data.stories) throw new Error('No Categories Found')

      state.categories = data.stories
    } catch (error) {
      console.log('ERROR')
      return (state.categories = [])
    }
  }

  const formattedCategories = computed<FormatedCategoriesType[]>(() => {
    return state.categories.map(({ uuid, name, content }: any) => ({
      uuid,
      name,
      icon: content.media.filename,
      path: content.path,
    }))
  })

  return {
    ...toRefs(state),
    fetchCategories,
    formattedCategories,
  }
}
