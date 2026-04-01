'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navigation from './Navigation'
import { Search, Menu, X, Bell } from 'lucide-react'
import { clsx } from 'clsx'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-3'
          : 'bg-white py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-4 xl:gap-12">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/30 group-hover:scale-105 transition-transform flex-shrink-0">
                B
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-lg md:text-xl font-extrabold text-gray-900 tracking-tight leading-none whitespace-nowrap">Blog Giáo Dục</span>
                <span className="text-[9px] md:text-[10px] font-bold text-primary-600 uppercase tracking-widest leading-none">Tri Thức Cho Mọi Người</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:block flex-shrink-0">
              <Navigation />
            </div>
          </div>

          {/* Right Section: Search & Actions */}
          <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end ml-4">
            {/* Search - Desktop */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-primary-500/30 focus-within:bg-white transition-all w-full max-w-[200px] xl:max-w-xs">
              <Search size={18} className="text-gray-400 shrink-0" />
              <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Notifications / User Actions */}
            <button className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors hidden sm:block shrink-0">
              <Bell size={20} />
            </button>

            <Link href="/contact" className="hidden md:block shrink-0">
              <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors shadow-md hover:shadow-primary-600/20">
                Tham gia
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={clsx(
          'xl:hidden fixed inset-x-0 bg-white shadow-xl transition-all duration-300 ease-in-out border-t border-gray-100 overflow-hidden',
          isMenuOpen ? 'max-h-[100vh] opacity-100 visible py-6' : 'max-h-0 opacity-0 invisible py-0'
        )}
      >
        <div className="container mx-auto px-4 flex flex-col gap-8">
          {/* Mobile Search */}
          <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 border border-transparent focus-within:border-primary-500/30">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm kiến thức..."
              className="bg-transparent border-none focus:ring-0 text-base ml-2 w-full text-gray-700"
            />
          </div>

          <Navigation vertical />

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
            <Link href="/contact" className="w-full">
              <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl text-base font-bold shadow-lg shadow-primary-600/20">
                Đăng ký bản tin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
