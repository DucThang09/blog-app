'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/types'
import CategoryBadge from './CategoryBadge'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface FeaturedCarouselProps {
  posts: Post[]
}

export default function FeaturedCarousel({ posts }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length)
  }, [posts.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length)
  }, [posts.length])

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, nextSlide])

  if (!posts || posts.length === 0) return null

  return (
    <div 
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-[2rem] shadow-2xl group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${
            index === currentIndex ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-full z-0'
          }`}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" />
          
          {/* Image */}
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 text-white">
            <CategoryBadge category={post.category} className="mb-4 inline-block bg-primary-600/80 backdrop-blur-sm border-none text-white px-4 py-1.5 rounded-full" />
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight max-w-3xl drop-shadow-lg">
              {post.title}
            </h2>
            <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl line-clamp-2 drop-shadow-md hidden md:block">
              {post.excerpt}
            </p>
            <Link href={`/blog/${post.slug}`}>
              <button className="bg-white text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-primary-50 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                Đọc bài viết ngay
              </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100 hidden md:block"
      >
        <ChevronRight size={32} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 p-2 bg-black/10 backdrop-blur-sm rounded-full">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all border border-white/50 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
