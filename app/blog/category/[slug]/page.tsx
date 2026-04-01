import { getPosts, getCategories } from '@/lib/api'
import PostList from '@/components/blog/PostList'
import SearchBar from '@/components/blog/SearchBar'
import Link from 'next/link'
import { clsx } from 'clsx'
import Pagination from '@/components/ui/Pagination'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
  searchParams: Promise<{
    q?: string
    page?: string
  }>
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params
  const { q, page: pageStr } = await searchParams
  const currentPage = parseInt(pageStr || '1', 10)
  const limit = 6

  const categories = await getCategories()
  const currentCategory = categories.find(c => c.slug === slug)

  if (!currentCategory) {
    notFound()
  }

  const { posts, total } = await getPosts({
    search: q,
    category: slug,
    page: currentPage,
    limit: limit,
  })

  const totalPages = Math.ceil(total / limit)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div className="max-w-xl text-center md:text-left">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block text-sm font-medium">
            &larr; Quay lại tất cả bài viết
          </Link>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Chuyên mục: <span className="text-primary-600">{currentCategory.name}</span>
          </h1>
          {currentCategory.description && (
            <p className="text-gray-600">{currentCategory.description}</p>
          )}
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
              className="px-4 py-2 rounded-lg text-sm transition-all bg-white text-gray-600 border border-gray-100 hover:bg-gray-50"
            >
              Tất cả bài viết
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog/category/${cat.slug}${q ? `?q=${q}` : ''}`}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm transition-all whitespace-nowrap',
                  slug === cat.slug
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

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            baseUrl={`/blog/category/${slug}`}
            queryParams={{ q }}
          />
        </div>
      </div>
    </div>
  )
}
