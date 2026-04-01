'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://picsum.photos/40/40?random=logo"
            alt="Logo"
            width={40}
            height={40}
            className="rounded"
            priority
          />
          <span className="text-xl font-bold text-gray-800">Blog Giáo dục & Kiến thức</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            {isMenuOpen ? (
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            ) : (
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 animate-in slide-in-from-top duration-300">
          <Navigation vertical />
        </div>
      )}
    </header>
  )
}
