const state = reactive({
  categories: [],
})

export function useCategories() {
  const storyblokApi = useStoryblokApi()

  async function fetchCategories() {
    const { data } = await storyblokApi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'categories/', // you pass the name for the folder that you want to fetch
      is_startpage: false,
    })

    state.categories = data.stories
  }

  return {
    ...toRefs(state),
    fetchCategories,
  }
}
