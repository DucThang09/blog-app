import React from 'react'

export default function PostLayout({
  children,
  comments,
}: {
  children: React.ReactNode
  comments: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {children}
        </div>
        <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-gray-100 pt-12 lg:pt-24 lg:pl-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Thảo luận</h3>
          {comments}
        </div>
      </div>
    </div>
  )
}
