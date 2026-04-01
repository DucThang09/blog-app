import { Post } from '@/types'
import PostCard from './PostCard'

interface PostListProps {
  posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500 bg-gray-50 rounded-lg border-2 border-dashed">
        Không tìm thấy bài viết nào phù hợp.
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post.id} className="h-full">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}
