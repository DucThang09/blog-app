'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

const navItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Blog', href: '/blog' },
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
      vertical ? 'flex-col gap-4' : 'items-center gap-6'
    )}>
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              'text-sm font-medium transition-colors hover:text-primary-600',
              isActive ? 'text-primary-600 font-semibold' : 'text-gray-600'
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
