import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Facebook, Twitter, Instagram, Github } from '@/components/icons/BrandIcons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/20">
                B
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Blog Giáo dục & Kiến thức</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Nền tảng chia sẻ tài liệu học tập, kiến thức công nghệ và phương pháp giáo dục hiện đại. Sứ mệnh của chúng tôi là lan tỏa tri thức đến mọi nhà.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Liên kết nhanh</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/blog" className="hover:text-primary-500 transition-colors flex items-center gap-2 group">
                   <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   Tất cả bài viết
                </Link>
              </li>
              <li>
                <Link href="/blog/category/tutorial" className="hover:text-primary-500 transition-colors flex items-center gap-2 group">
                   <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   Hướng dẫn kỹ thuật
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-500 transition-colors flex items-center gap-2 group">
                   <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-500 transition-colors flex items-center gap-2 group">
                   <span className="w-1 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Chuyên mục nổi bật</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/blog/category/giao-duc" className="hover:text-primary-500 transition-colors">Giáo dục số</Link>
              </li>
              <li>
                <Link href="/blog/category/ky-nang-song" className="hover:text-primary-500 transition-colors">Kỹ năng sống</Link>
              </li>
              <li>
                <Link href="/blog/category/productivity" className="hover:text-primary-500 transition-colors">Hiệu suất (Productivity)</Link>
              </li>
              <li>
                <Link href="/blog/category/nghien-cuu" className="hover:text-primary-500 transition-colors">Nghiên cứu khoa học</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact Information */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Thông tin liên hệ</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 shrink-0" />
                <span>Hoàn Kiếm, Hà Nội, Việt Nam</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <span>+84 (0) 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <span>contact@educational-blog.com</span>
              </div>
            </div>
            
            {/* Newsletter Input */}
            <div className="pt-4">
              <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest font-semibold">Đăng ký nhận tin</p>
              <div className="flex bg-gray-800 p-1 rounded-lg border border-gray-700">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-none focus:ring-0 text-sm px-3 flex-grow"
                />
                <button className="bg-primary-600 hover:bg-primary-500 text-white p-2 rounded-md transition-colors shadow-lg shadow-primary-600/10">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Blog Giáo dục & Kiến thức. Thiết kế với ❤️ dành cho tri thức.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Quyền riêng tư</Link>
            <Link href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
