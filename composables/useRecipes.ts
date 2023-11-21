const state = reactive({
  recipes: [],
})

type FormatedRecipesType = {
  uuid: string
  name: string
  image: any
  slug: string
  category: any
}

const { categories } = useCategories()

export function useRecipes() {
  const storyblokApi = useStoryblokApi()

  async function fetchRecipes() {
    const { data } = await storyblokApi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'recipes/', // you pass the name for the folder that you want to fetch
      resolve_relations: 'recipes_section.category',
      is_startpage: false,
    })

    state.recipes = data.stories
  }

  async function fetchRecipeBySlug(slug: string) {
    const { data } = await storyblokApi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'recipes/', // you pass the name for the folder that you want to fetch
      by_slugs: '*/' + slug,
      resolve_relations: 'recipes_section.category',
      is_startpage: false,
    })
    const story = data.stories[0]
    return story
  }

  const formatedRecipes = computed<FormatedRecipesType[]>(() => {
    return state.recipes.map(({ uuid, name, content, slug }: any) => ({
      uuid,
      name,
      image: content.media,
      slug,
      category: categories.value.find(({ uuid }) => uuid === content.category),
    }))
  })

  return {
    ...toRefs(state),
    fetchRecipes,
    formatedRecipes,
    fetchRecipeBySlug,
  }
}
