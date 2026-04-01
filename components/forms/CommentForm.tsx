'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { commentSchema, CommentFormData } from '@/lib/validations'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Card from '@/components/ui/Card'
import { toast } from 'react-hot-toast'

interface CommentFormProps {
  postId: string
}

export default function CommentForm({ postId }: CommentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
  })

  const onSubmit = async (data: CommentFormData) => {
    try {
      console.log('Post ID:', postId, 'Comment data:', data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real app, you would send this to the API
      toast.success('Bình luận của bạn đã được gửi!')
      reset()
    } catch (error) {
      console.error(error)
      toast.error('Có lỗi xảy ra, vui lòng thử lại sau.')
    }
  }

  return (
    <Card padding="sm" className="bg-gray-50 border-none shadow-none">
      <h4 className="font-bold text-gray-900 mb-4">Để lại bình luận</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input 
          placeholder="Tên của bạn" 
          {...register('author')}
          error={errors.author?.message}
        />
        <Input 
          type="email"
          placeholder="Email của bạn" 
          {...register('email')}
          error={errors.email?.message}
        />
        <Textarea 
          placeholder="Bình luận thiết thực..." 
          rows={3} 
          {...register('content')}
          error={errors.content?.message}
        />
        <Button 
          type="submit" 
          className="w-full"
          isLoading={isSubmitting}
        >
          Gửi bình luận
        </Button>
      </form>
    </Card>
  )
}
