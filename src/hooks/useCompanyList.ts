"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getUser } from "@/lib/auth"; // Import the getUser function

export interface Company {
  ticker: string;
  name: string;
  is_in: boolean;
  is_fav: boolean;
  description: string;
}

interface CompanyMapResponse {
  companies: Record<string, Company>;
}

export const useCompanyList = () => {
  // Retrieve trader_id (viewer_id) from local storage
  const user = getUser();
  const viewerId = user?.trader_id;

  return useQuery<Record<string, Company>>({
    queryKey: ["company-list", viewerId], // Adding viewerId as part of the queryKey to refetch if it changes
    queryFn: async () => {
      if (!viewerId) {
        throw new Error("Viewer ID (trader_id) is required");
      }

      try {
        const res = await axios.get<CompanyMapResponse>(
          `https://implicit-electra-sagnify-8514ada8.koyeb.app/api/companies/?viewer_id=${viewerId}`
        );
        return res.data.companies;
      } catch (err) {
        console.error("API request failed", err);
        throw new Error("Failed to load companies");
      }
    },

    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
  });
};
