'use client'

import { useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
          ⚠️
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Đã có lỗi xảy ra!</h2>
        <p className="text-gray-600 mb-8">
          Chúng tôi xin lỗi vì sự bất tiện này. Vui lòng thử lại hoặc quay về trang chủ.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => reset()}> Thử lại </Button>
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            Về trang chủ
          </Button>
        </div>
      </div>
    </div>
  )
}
