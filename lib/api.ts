import { Post, Category } from '@/types'
import postsData from '@/data/posts.json'

export async function getPosts(options?: {
  limit?: number
  page?: number
  search?: string
  category?: string
}): Promise<{ posts: Post[], total: number }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  let posts = postsData as Post[]

  // Filter by search
  if (options?.search) {
    const searchLower = options.search.toLowerCase()
    posts = posts.filter(post =>
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower)
    )
  }

  // Filter by category
  if (options?.category) {
    posts = posts.filter(post =>
      post.category.slug === options.category
    )
  }

  const total = posts.length

  // Pagination logic
  if (options?.page && options?.limit) {
    const start = (options.page - 1) * options.limit
    posts = posts.slice(start, start + options.limit)
  } else if (options?.limit) {
    posts = posts.slice(0, options.limit)
  }

  return { posts, total }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const post = postsData.find(p => p.slug === slug)
  return post || null
}

export async function getAllPosts(): Promise<Post[]> {
  return postsData as Post[]
}

export async function getCategories(): Promise<Category[]> {
  const categoryMap = new Map<string, Category>()
  
  postsData.forEach(post => {
    categoryMap.set(post.category.id, post.category)
  })
  
  return Array.from(categoryMap.values())
}
