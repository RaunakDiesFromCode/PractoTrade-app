// hooks/useCompanyList.ts
"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Company {
  ticker: string;
  name: string;
  is_in: boolean;
  description: string;
}

interface CompanyMapResponse {
  companies: Record<string, Company>;
}

export const useCompanyList = () =>
  useQuery<Record<string, Company>>({
    queryKey: ["company-list"],
    queryFn: async () => {
      const res = await axios.get<CompanyMapResponse>(
        "https://implicit-electra-sagnify-8514ada8.koyeb.app/api/companies/"
      );
      return res.data.companies;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
  });
