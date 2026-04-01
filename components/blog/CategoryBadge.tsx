import Link from 'next/link'
import { clsx } from 'clsx'
import { Category } from '@/types'

interface CategoryBadgeProps {
  category: Category
  className?: string
  size?: 'sm' | 'md'
}

export default function CategoryBadge({ category, className, size = 'sm' }: CategoryBadgeProps) {
  return (
    <Link
      href={`/blog/category/${category.slug}`}
      className={clsx(
        'font-semibold rounded uppercase tracking-wider transition-all',
        size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs',
        'bg-primary-100 text-primary-700 hover:bg-primary-50',
        className
      )}
    >
      {category.name}
    </Link>
  )
}
