export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="animate-pulse space-y-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <div className="space-y-4 max-w-xl w-full">
            <div className="h-10 bg-gray-200 rounded-lg w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded-full w-full"></div>
            <div className="h-4 bg-gray-200 rounded-full w-2/3"></div>
          </div>
          <div className="h-12 bg-gray-200 rounded-xl w-full max-w-md"></div>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="w-full lg:w-64 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="space-y-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-10 bg-gray-100 rounded-lg"></div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 h-96 flex flex-col">
                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                <div className="p-4 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-6 bg-gray-200 rounded w-full"></div>
                  <div className="h-12 bg-gray-200 rounded w-full"></div>
                  <div className="pt-4 border-t h-12 bg-gray-50 mt-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
