import { getPosts, getCategories } from '@/lib/api'
import PostList from '@/components/blog/PostList'
import SearchBar from '@/components/blog/SearchBar'
import Link from 'next/link'
import { clsx } from 'clsx'

interface BlogPageProps {
  searchParams: Promise<{
    q?: string
    category?: string
  }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { q, category } = await searchParams
  
  const posts = await getPosts({
    search: q,
    category: category,
  })
  
  const categories = await getCategories()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-600">
            Tất cả tài liệu giáo dục và kiến thức về công nghệ dành cho người học mới và nâng cao.
          </p>
        </div>
        <div className="w-full max-w-md">
          <SearchBar />
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Categories Sidebar/Filter */}
        <aside className="w-full lg:w-64 shrink-0">
          <h3 className="text-lg font-bold text-gray-900 mb-4 px-2">Chuyên mục</h3>
          <div className="flex flex-wrap lg:flex-col gap-2">
            <Link
              href="/blog"
              className={clsx(
                'px-4 py-2 rounded-lg text-sm transition-all',
                !category 
                  ? 'bg-primary-600 text-white shadow-sm shadow-primary-200' 
                  : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
              )}
            >
              Tất cả bài viết
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`?category=${cat.slug}${q ? `&q=${q}` : ''}`}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm transition-all whitespace-nowrap',
                  category === cat.slug
                    ? 'bg-primary-600 text-white shadow-sm shadow-primary-200'
                    : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'
                )}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-grow">
          {q && (
            <p className="mb-6 text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100">
              Kết quả tìm kiếm cho: <span className="font-bold text-primary-600">"{q}"</span>
            </p>
          )}
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  )
}
