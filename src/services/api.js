const BASE_URL = 'https://blog.apiki.com/wp-json/wp/v2'
const POSTS_URL = `${BASE_URL}/posts`

export async function fetchPostsByCategory(categoryId = 518, page = 1) {
  const response = await fetch(`${POSTS_URL}?_embed&categories=${categoryId}&page=${page}`)

  if (!response.ok) {
    throw new Error(`Erro ${response.status} ao buscar posts`)
  }

  const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0', 10)
  const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0', 10)
  const data = await response.json()

  return {
    posts: data,
    totalPages,
    totalPosts,
  }
}

export async function fetchPostBySlug(slug) {
  const response = await fetch(`${POSTS_URL}?slug=${slug}&_embed`)

  if (!response.ok) {
    throw new Error(`Erro ${response.status} ao buscar post`)
  }

  const data = await response.json()

  if (!data.length) {
    throw new Error('Post não encontrado')
  }

  return data[0]
}
