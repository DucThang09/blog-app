import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'
import { z } from 'zod'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate
    const validatedData = contactSchema.parse(body)
    
    // In a real app, you would send an email or save to DB here
    console.log('Contact form submission:', validatedData)
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return NextResponse.json({
      success: true,
      message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.',
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, message: 'Đã có lỗi xảy ra' },
      { status: 500 }
    )
  }
}
