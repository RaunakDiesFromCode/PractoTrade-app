"use client";

import { useCompanyList } from "@/hooks/useCompanyList";
import { useSingleStockPrediction } from "@/hooks/useSingleStockPrediction";
import { StockChart } from "@/components/StockChart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Posts from "./Posts";
import { TrendingDown, TrendingUp, TrendingUpDown } from "lucide-react";
import StockSentimentPoll from "./StockSentimentPoll";

export default function StockPageClient({ slug }: { slug: string }) {
  const {
    data: companies,
    isLoading: isCompaniesLoading,
    error: companyError,
  } = useCompanyList();

  const tickerKey = slug.toUpperCase();

  const companyMeta = companies?.[tickerKey];

  const {
    data: company,
    isLoading: isPredictionLoading,
    error: predictionError,
  } = useSingleStockPrediction(
    companyMeta?.ticker || slug,
    companyMeta?.name || slug,
    companyMeta?.is_in || false
  );

  if (isCompaniesLoading || isPredictionLoading) {
    return (
      <div className="px-20 pt-5 flex gap-5 w-full">
        <Skeleton className="w-full h-80" />
      </div>
    );
  }

  if (companyError || predictionError || !company) {
    return (
      <div className="text-red-500 px-20 pt-5">
        Failed to load stock data for <strong>{slug}</strong>.
      </div>
    );
  }

  return (
    <div className="px-20 pt-5 flex gap-3 w-full">
      <div className="w-full flex flex-col gap-3">
        <StockChart name={slug} />
        <StockSentimentPoll symbol={slug} />
      </div>
      <div className="w-full">
        <div className="w-full flex flex-col gap-3">
          <Card>
            <div className="flex gap-2 items-center justify-between px-5">
              <CardHeader>
                <CardTitle className="text-2xl flex gap-1 items-center">
                  {company.companyName}
                  {typeof company.growth === "number" ? (
                    company.growth >= 0 ? (
                      <TrendingUp className="text-green-500" />
                    ) : (
                      <TrendingDown className="text-red-500" />
                    )
                  ) : (
                    <TrendingUpDown className="text-muted-foreground" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm flex items-center gap-4">
                  <div className="flex justify-between flex-col items-end m-0">
                    <div>Closing Price:</div>
                    <div className="font-semibold text-lg">
                      {company.currentStockPrice}{" "}
                      <span className="text-sm">
                        {company.isIn ? "INR" : "USD"}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between flex-col items-end m-0">
                    <div>Predicted Price:</div>
                    <div className="font-semibold text-lg">
                      {company.futureStockPrice}{" "}
                      <span className="text-sm">
                        {company.isIn ? "INR" : "USD"}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between flex-col items-end m-0">
                    <div>Growth:</div>
                    <div
                      className={`font-semibold text-lg ${
                        company.growth < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {company.growth}
                      <span className="text-sm">%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
          <Posts name={slug} />
        </div>
      </div>
    </div>
  );
}
