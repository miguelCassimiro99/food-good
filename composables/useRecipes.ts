const state = reactive({
  recipes: [] as any,
})

type FormatedRecipesType = {
  uuid: string
  name: string
  image: any
  slug: string
  category: any
}

const { categories } = useCategories()

export function useRecipes(filter?: Ref<string>, category?: Ref<string>) {
  const storyblokApi = useStoryblokApi()

  async function fetchRecipes() {
    const { data } = await storyblokApi.get('cdn/stories/', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      starts_with: 'recipes/', // you pass the name for the folder that you want to fetch
      resolve_relations: 'recipes_section.category',
      is_startpage: false,
    })

    let recipesList = [] as any
    data.stories.forEach((story: any) => {
      let recipe = {
        ...story,
        category: categories.value.find(
          ({ uuid }: any) => uuid === story.content.category
        ),
      } as any

      recipesList.push(recipe)
    })

    state.recipes = recipesList
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
    return state.recipes.map(
      ({ uuid, name, content, slug, category }: any) => ({
        uuid,
        name,
        image: content.media,
        slug,
        category: category,
      })
    )
  })

  // const filteredRecipes = computed(() => {
  //   state.recipes.filter((recipe: any) =>
  //     recipe.name.toLowerCase().includes(filter.value.toLowerCase())
  //   )
  // })

  return {
    ...toRefs(state),
    fetchRecipes,
    formatedRecipes,
    fetchRecipeBySlug,
  }
}
