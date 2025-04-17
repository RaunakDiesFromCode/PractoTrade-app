// hooks/useStockPredictions.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCompanyList } from "./useCompanyList";

interface StockApiResponse {
  company: string;
  predicted_Close: number;
  prediction_time: string;
  predicted_percentage_change: number;
  direction: string;
}

interface CompanyCardData {
  companyName: string;
  ticker: string; // Ticker will be directly used
  currentStockPrice: number;
  futureStockPrice: number;
  growth: number;
  isIn: boolean; // Whether the company is based in India (INR) or not (USD)
}

export const useStockPredictions = () => {
  const { data: companies } = useCompanyList();

  return useQuery<CompanyCardData[]>({
    queryKey: ["stock-predictions"],
    enabled: !!companies, // only run if companies are loaded
    queryFn: async () => {
      const tickers = Object.keys(companies!);

      const results = await Promise.all(
        tickers.map(async (ticker) => {
          const company = companies![ticker];

          // Use the ticker as provided, without modification
          const tickerWithSuffix = company.ticker; // Use the actual ticker, such as TCS.NS, ITCLTD.NS, etc.

          const res = await axios.get<StockApiResponse>(
            `https://implicit-electra-sagnify-8514ada8.koyeb.app/get_predicted_stock_price/${tickerWithSuffix}/`
          );

          const data = res.data;

          // Calculate current stock price based on the predicted percentage change
          const currentPrice = Number(
            (
              data.predicted_Close /
              (1 + data.predicted_percentage_change / 100)
            ).toFixed(2)
          );

          return {
            companyName: company.name,
            ticker: tickerWithSuffix, // Return the correct ticker for each company
            currentStockPrice: currentPrice,
            futureStockPrice: data.predicted_Close,
            growth: data.predicted_percentage_change,
            isIn: company.is_in, // Whether the company is based in India
          };
        })
      );

      return results;
    },
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
