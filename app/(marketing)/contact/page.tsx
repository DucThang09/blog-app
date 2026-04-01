import ContactForm from '@/components/forms/ContactForm'
import Card from '@/components/ui/Card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Liên hệ | Blog Giáo dục & Kiến thức',
  description: 'Gửi tin nhắn cho chúng tôi nếu bạn có bất kỳ thắc mắc nào.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-24 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">Liên hệ</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Bạn có câu hỏi, góp ý hay chỉ muốn nói lời chào? Đừng ngần ngại gửi tin nhắn cho tôi.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Thông tin liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">hello@nextjsblog.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Địa chỉ</p>
                  <p className="text-gray-600">123 Đường NextJS, Thành phố Code</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Mạng xã hội</h3>
            <div className="flex gap-4">
              {['github', 'twitter', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <Card padding="lg" className="border-none shadow-xl shadow-gray-200/50">
            <ContactForm />
          </Card>
        </div>
      </div>
    </div>
  )
}
