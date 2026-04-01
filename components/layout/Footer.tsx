export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Blog Giáo dục & Kiến thức. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
