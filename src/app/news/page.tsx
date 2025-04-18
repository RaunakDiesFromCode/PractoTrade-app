"use client"
import { useNews } from "@/components/useNews";

export default function NewsPage() {
  const { news, loading, error } = useNews();

  if (loading) return <div className="p-8 text-gray-600">Loading news...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
<<<<<<< HEAD
    <div className='px-20 pt-5 h-screen'>news page</div>
  )
=======
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>
      <ul className="space-y-4">
        {news.map((item, idx) => (
          <li
            key={idx}
            className="border rounded-md p-4 hover:shadow-md transition-shadow"
          >
            <div className="text-sm text-gray-500 mb-1">{item.company}</div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-blue-600 hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
>>>>>>> 680e74c (add news fetching functionality and update NewsPage UI)
}
