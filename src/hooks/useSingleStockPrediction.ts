// hooks/useSingleStockPrediction.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface StockApiResponse {
  company: string;
  avg_predicted_price: number;
  predicted_with_sentiment: number;
  predicted_without_sentiment: number;
  arima_pred: number;
  predicted_percentage_change: number;
  direction: string;
  prediction_time: string;
}

export const useSingleStockPrediction = (
  ticker: string,
  companyName: string,
  isIn: boolean
) => {
  return useQuery({
    queryKey: ["stock-prediction", ticker],
    queryFn: async () => {
      const res = await axios.get<StockApiResponse>(
        `https://implicit-electra-sagnify-8514ada8.koyeb.app/get_predicted_stock_price/${ticker}/`
      );

      const data = res.data;

      const currentPrice = Number(
        (
          data.avg_predicted_price /
          (1 + data.predicted_percentage_change / 100)
        ).toFixed(2)
      );

      return {
        companyName,
        ticker,
        currentStockPrice: currentPrice,
        avgPrice: data.avg_predicted_price,
        withSentiment: data.predicted_with_sentiment,
        withoutSentiment: data.predicted_without_sentiment,
        arima: data.arima_pred,
        growth: data.predicted_percentage_change,
        isIn,
      };
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
