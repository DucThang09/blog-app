import { getPostBySlug, getAllPosts } from '@/lib/api'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import PostContent from '@/components/blog/PostContent'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import CategoryBadge from '@/components/blog/CategoryBadge'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) return { title: 'Post Not Found' }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12 lg:py-24 max-w-4xl">
      {/* Back button */}
      <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 font-medium mb-8 hover:translate-x-[-4px] transition-transform">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
          <path d="M19 12H5m7-7l-7 7 7 7" />
        </svg>
        Quay lại blog
      </Link>

      <header className="mb-12">
        {/* Category */}
        <div className="mb-6">
          <CategoryBadge category={post.category} size="md" className="rounded-full !px-4 !py-1.5" />
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-[1.15]">
          {post.title}
        </h1>

        {/* Author and metadata */}
        <div className="flex flex-wrap items-center gap-6 border-y border-gray-100 py-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-100 p-0.5">
              <Image 
                src={post.author.avatar} 
                alt={post.author.name} 
                fill 
                className="object-cover rounded-full" 
              />
            </div>
            <div>
              <p className="font-bold text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{post.author.bio}</p>
            </div>
          </div>

          <div className="h-8 w-px bg-gray-200 hidden md:block"></div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), 'dd MMMM yyyy', { locale: vi })}
            </time>
            <span>•</span>
            <span>{post.readingTime} phút đọc</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative aspect-video w-full mb-12 rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>

      {/* Content */}
      <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-sm border border-gray-50">
        <PostContent content={post.content} />
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export const revalidate = 3600 // every 1 hour
