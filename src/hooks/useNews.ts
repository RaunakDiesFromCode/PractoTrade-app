"use client";

import { useEffect, useState } from "react";

interface NewsItem {
  company: string;
  title: string;
  url: string;
}

export const useNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          "https://implicit-electra-sagnify-8514ada8.koyeb.app/api/news/all/"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setNews(data.news); // ✅ Grab the actual array
      } catch (err: string | unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};
