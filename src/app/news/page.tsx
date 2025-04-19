"use client";

import { useNews } from "@/hooks/useNews";
import { Skeleton } from "@/components/ui/skeleton";
import { NewsCard } from "@/components/NewsCard";

export default function NewsPage() {
  const { news, loading, error } = useNews();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-center sm:text-left">
        Latest News
      </h1>

      {loading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-3 rounded-lg border p-4 shadow-sm">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <div className="flex justify-end">
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-600 text-center sm:text-left">
          <p className="font-medium">Error loading news</p>
          <p className="mt-1 text-sm">{error}</p>
        </div>
      )}

      {Array.isArray(news) && news.length > 0 && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, idx) => (
            <NewsCard key={idx} item={item} />
          ))}
        </div>
      )}

      {Array.isArray(news) && news.length === 0 && !loading && !error && (
        <div className="rounded-lg border p-6 text-center text-muted-foreground">
          No news articles available at the moment.
        </div>
      )}
    </div>
  );
}
