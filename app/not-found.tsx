import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-9xl font-extrabold text-primary-100 mb-4 select-none">404</h1>
        <div className="relative -mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Không tìm thấy trang</h2>
          <p className="text-gray-600 mb-8">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </p>
          <Link href="/">
            <Button size="lg" className="rounded-full">
              Quay về trang chủ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
