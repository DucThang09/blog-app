'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, ContactFormData } from '@/lib/validations'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import { toast } from 'react-hot-toast'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log('Form data:', data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })


      if (response.ok) {
        toast.success('Gửi tin nhắn thành công!')
        reset()
      } else {
        throw new Error('Gửi tin nhắn thất bại')
      }
    } catch (error) {
      console.error(error)
      toast.error('Có lỗi xảy ra, vui lòng thử lại sau.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Họ tên"
          {...register('name')}
          placeholder="Nguyễn Văn A"
          error={errors.name?.message}
        />
        <Input
          label="Email"
          type="email"
          {...register('email')}
          placeholder="example@email.com"
          error={errors.email?.message}
        />
      </div>
      
      <Input
        label="Tiêu đề"
        {...register('subject')}
        placeholder="Tôi muốn hỏi về..."
        error={errors.subject?.message}
      />

      <Textarea
        label="Tin nhắn"
        {...register('message')}
        rows={5}
        placeholder="Nội dung tin nhắn..."
        error={errors.message?.message}
      />

      <Button
        type="submit"
        className="w-full py-4 text-lg"
        isLoading={isSubmitting}
      >
        Gửi tin nhắn
      </Button>
    </form>
  )
}
