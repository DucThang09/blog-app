'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'

interface PaginationProps {
  totalPages: number
  currentPage: number
  baseUrl: string
  queryParams?: Record<string, string | undefined>
}

export default function Pagination({ totalPages, currentPage, baseUrl, queryParams }: PaginationProps) {
  if (totalPages <= 1) return null

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams()
    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        if (value) params.set(key, value)
      })
    }
    params.set('page', page.toString())
    return `${baseUrl}?${params.toString()}`
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="flex items-center justify-center space-x-2 py-8">
      {/* Previous Page */}
      <Link
        href={currentPage > 1 ? getPageUrl(currentPage - 1) : '#'}
        className={clsx(
          'p-2 rounded-lg border transition-all',
          currentPage > 1 
            ? 'bg-white text-gray-700 hover:bg-gray-50 hover:border-primary-300' 
            : 'bg-gray-50 text-gray-300 cursor-not-allowed pointer-events-none'
        )}
      >
        <ChevronLeft size={20} />
      </Link>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {pages.map((page) => (
          <Link
            key={page}
            href={getPageUrl(page)}
            className={clsx(
              'w-10 h-10 flex items-center justify-center rounded-lg border font-medium transition-all',
              page === currentPage
                ? 'bg-primary-600 text-white border-primary-600 shadow-md transform scale-110'
                : 'bg-white text-gray-700 hover:bg-gray-50 hover:border-primary-300'
            )}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Next Page */}
      <Link
        href={currentPage < totalPages ? getPageUrl(currentPage + 1) : '#'}
        className={clsx(
          'p-2 rounded-lg border transition-all',
          currentPage < totalPages 
            ? 'bg-white text-gray-700 hover:bg-gray-50 hover:border-primary-300' 
            : 'bg-gray-50 text-gray-300 cursor-not-allowed pointer-events-none'
        )}
      >
        <ChevronRight size={20} />
      </Link>
    </nav>
  )
}
