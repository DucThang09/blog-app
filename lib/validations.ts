import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string()
    .min(2, 'Tên phải có ít nhất 2 ký tự')
    .max(50, 'Tên không được quá 50 ký tự'),
  email: z.string()
    .email('Email không hợp lệ'),
  subject: z.string()
    .min(5, 'Tiêu đề phải có ít nhất 5 ký tự')
    .max(100, 'Tiêu đề không được quá 100 ký tự'),
  message: z.string()
    .min(10, 'Nội dung phải có ít nhất 10 ký tự')
    .max(1000, 'Nội dung không được quá 1000 ký tự'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const commentSchema = z.object({
  author: z.string()
    .min(2, 'Tên phải có ít nhất 2 ký tự'),
  email: z.string()
    .email('Email không hợp lệ'),
  content: z.string()
    .min(5, 'Bình luận phải có ít nhất 5 ký tự')
    .max(500, 'Bình luận không được quá 500 ký tự'),
})

export type CommentFormData = z.infer<typeof commentSchema>
