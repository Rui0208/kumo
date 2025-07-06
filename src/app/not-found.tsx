import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-light text-gray-800 mb-4 font-serif">
          404
        </h1>
        <h2 className="text-2xl font-light text-gray-600 mb-8">
          頁面不存在
        </h2>
        <p className="text-gray-500 mb-8">
          抱歉，您要查找的頁面無法找到。
        </p>
        <Link 
          href="/"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          回到首頁
        </Link>
      </div>
    </div>
  )
} 