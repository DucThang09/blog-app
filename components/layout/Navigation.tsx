'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

const navItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Tài liệu', href: '/blog/category/tutorial' },
  { label: 'Giới thiệu', href: '/about' },
  { label: 'Liên hệ', href: '/contact' },
]

interface NavigationProps {
  vertical?: boolean
}

export default function Navigation({ vertical }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className={clsx(
      'flex',
      vertical ? 'flex-col gap-6' : 'items-center gap-4 xl:gap-8'
    )}>
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              'relative text-sm font-bold transition-all duration-300 py-1 group whitespace-nowrap shrink-0',
              isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-500',
              vertical ? 'text-lg px-4' : 'px-1'
            )}
          >
            {item.label}
            {!vertical && (
              <span 
                className={clsx(
                  'absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-300 rounded-full',
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                )} 
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
