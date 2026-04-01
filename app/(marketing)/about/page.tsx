import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Giới thiệu | Blog Giáo dục & Kiến thức',
  description: 'Tìm hiểu thêm về nền tảng Blog Giáo dục & Kiến thức và mục tiêu của chúng tôi.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-24 max-w-4xl">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Xây dựng để <span className="text-primary-600">Học tập</span> và <span className="text-primary-600">Chia sẻ</span>.
          </h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Dự án này được tạo ra nhằm cung cấp một nền tảng blog mẫu chuẩn chỉnh, áp dụng những tính năng mới nhất của Next.js 15+ và App Router.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Chúng tôi tin rằng cách tốt nhất để học một công nghệ mới là xây dựng một sản phẩm thực tế. Dự án này bao gồm đầy đủ từ Routing, Data Fetching cho đến Form Handling và SEO optimization.
          </p>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3">
          <Image
            src="https://picsum.photos/600/600?random=about"
            alt="Về chúng tôi"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-[3rem] p-12 lg:p-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Giá trị cốt lõi</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: 'Hiện đại',
              desc: 'Luôn cập nhật những công nghệ và pattern mới nhất trong hệ sinh thái React/Next.js.',
              icon: '🚀'
            },
            {
              title: 'Chất lượng',
              desc: 'Codebase chuẩn chỉnh, dễ đọc và dễ bảo trì cho mục đích tham khảo.',
              icon: '💎'
            },
            {
              title: 'Cộng đồng',
              desc: 'Chia sẻ kiến thức hoàn toàn miễn phí cho tất cả mọi người yêu thích lập trình.',
              icon: '🤝'
            }
          ].map(item => (
            <div key={item.title} className="text-center">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
