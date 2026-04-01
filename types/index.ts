export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  author: Author
  category: Category
  publishedAt: string
  tags: string[]
  readingTime: number
}

export interface Author {
  id: string
  name: string
  avatar: string
  bio: string
  email?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
}

export interface Comment {
  id: string
  postId: string
  author: string
  email: string
  content: string
  createdAt: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
