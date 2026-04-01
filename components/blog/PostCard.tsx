'use client'

import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale'
import { Post } from '@/types'
import CategoryBadge from './CategoryBadge'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group h-full flex flex-col">
        {/* Cover Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-4 flex-grow flex flex-col">
          {/* Category */}
          <div className="mb-2">
            <CategoryBadge category={post.category} />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 line-clamp-2 text-gray-900 group-hover:text-primary-600 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden">
                <Image 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <span className="text-xs font-medium text-gray-700">{post.author.name}</span>
            </div>

            {/* Date and Time */}
            <div className="flex flex-col items-end">
              <time className="text-[10px] text-gray-400">
                {format(new Date(post.publishedAt), 'dd MMM yyyy', { locale: vi })}
              </time>
              <span className="text-[10px] text-gray-400 font-medium">{post.readingTime} phút đọc</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
