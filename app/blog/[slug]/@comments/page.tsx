'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import CommentForm from '@/components/forms/CommentForm'
import { Comment } from '@/types'

export default function Comments() {
  const params = useParams()
  const slug = params.slug as string
  
  const [comments, setComments] = useState<Partial<Comment>[]>([
    { id: '1', author: 'Sơn Tùng', content: 'Bài viết rất hữu ích, cảm ơn tác giả!', createdAt: '2 giờ trước' },
    { id: '2', author: 'Mỹ Tâm', content: 'Mình đã học được rất nhiều từ tutorial này.', createdAt: '5 giờ trước' },
  ])

  return (
    <div className="space-y-8">
      {/* Comment Form */}
      <CommentForm postId={slug} />

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="group">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-gray-900">{comment.author}</span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-400">{comment.createdAt}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed bg-white p-3 rounded-lg border border-gray-100 group-hover:border-primary-100 transition-colors">
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
