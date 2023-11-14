const state = reactive({
  recipes: [],
})

export function useRecipes() {
  const storyblokApi = useStoryblokApi()

  async function fetchRecipes() {
    const { data } = await storyblokApi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'recipes/', // you pass the name for the folder that you want to fetch
      is_startpage: false,
    })

    state.recipes = data.stories
  }

  const formattedCategories = computed(() => {
    return state.recipes.map(({ uuid, name, content }: any) => ({
      uuid,
      name,
    }))
  })

  return {
    ...toRefs(state),
    fetchRecipes,
  }
}
