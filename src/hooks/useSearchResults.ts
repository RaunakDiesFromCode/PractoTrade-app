// hooks/useSearchResults.ts
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUser } from "@/lib/auth";

interface SearchResultItem {
  company_name: string;
  api_url: string;
}

interface PredictionData {
  company: string;
  isIn: boolean;
  predicted_with_sentiment: number;
  avg_predicted_price: number;
  predicted_percentage_change: number;
  isFav?: boolean;
}

export const useSearchResults = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const [results, setResults] = useState<PredictionData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchData = async () => {
      const user = getUser();
      const viewerId = user?.trader_id;

      if (!viewerId || !search) {
        setLoading(false);
        return;
      }

      try {
        const searchRes = await axios.get<SearchResultItem[]>(
          `https://implicit-electra-sagnify-8514ada8.koyeb.app/api/search/?search=${search}&viewer_id=${viewerId}`
        );

        const predictionPromises = searchRes.data.map(async (item) => {
          const predictionRes = await axios.get(item.api_url);
          const prediction = predictionRes.data;

          return {
            company: prediction.company,
            isIn: prediction.isIn,
            predicted_with_sentiment: prediction.predicted_with_sentiment,
            avg_predicted_price: prediction.avg_predicted_price,
            predicted_percentage_change: prediction.predicted_percentage_change,
            isFav: false, // placeholder for future isFav logic
          };
        });

        const predictionResults = await Promise.all(predictionPromises);
        setResults(predictionResults);
      } catch (error) {
        console.error("Search or prediction fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchData();
  }, [search]);

  return { results, loading, search };
};
