import { getPosts } from '@/lib/api'
import PostList from '@/components/blog/PostList'
import FeaturedCarousel from '@/components/blog/FeaturedCarousel'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default async function HomePage() {
  const { posts: allPosts } = await getPosts()
  const featuredPosts = allPosts.slice(0, 4)
  const latestPosts = allPosts.slice(0, 3)

  return (
    <div className="flex flex-col gap-16 py-12 lg:py-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Nơi chia sẻ <span className="text-primary-600 bg-clip-text">Kiến thức</span> & <span className="text-primary-600">Trải nghiệm</span> của tôi.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Chào mừng bạn đến với Blog Giáo dục & Kiến thức. Tại đây, chúng tôi chia sẻ những bài giảng, tài liệu học tập và kinh nghiệm thực tế trong lĩnh vực công nghệ và giáo dục.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog">
                <Button size="lg" className="rounded-full shadow-lg shadow-primary-200">
                  Khám phá ngay
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="rounded-full">
                  Tìm hiểu thêm
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <FeaturedCarousel posts={featuredPosts} />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Bài viết mới nhất</h2>
            <p className="text-gray-500 mt-2">Cập nhật những nội dung giáo dục mới nhất từ hệ thống.</p>
          </div>
          <Link href="/blog" className="text-primary-600 font-semibold hover:underline group flex items-center gap-1">
            Xem tất cả bài viết
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </Link>
        </div>
        <PostList posts={latestPosts} />
      </section>

      {/* Subscribe or Call-to-action */}
      <section className="container mx-auto px-4">
        <div className="bg-primary-600 py-12 px-8 lg:px-16 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Bạn thích những nội dung này?</h3>
            <p className="text-primary-100 max-w-md">
              Đăng ký nhận thông báo mỗi khi có bài viết mới. Tôi cam kết không spam.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-2 bg-white/10 p-1.5 rounded-full border border-white/20 relative z-10 ring-1 ring-white/5 shadow-2xl backdrop-blur-sm">
            <input 
              type="email" 
              placeholder="Email của bạn" 
              className="bg-transparent border-none focus:ring-0 text-white placeholder:text-primary-100 flex-grow px-4"
            />
            <Button className="bg-white text-primary-600 hover:bg-primary-50 rounded-full shrink-0">
              Đăng ký
            </Button>
          </div>
          
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-700/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>
    </div>
  )
}
