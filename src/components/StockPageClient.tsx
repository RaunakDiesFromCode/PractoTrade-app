"use client";

import { useStockPredictions } from "@/hooks/useStockPredictions";
import { StockChart } from "@/components/StockChart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function StockPageClient({ slug }: { slug: string }) {
  const { data, isLoading, error } = useStockPredictions();

  if (isLoading) {
    return (
      <div className="px-20 pt-5 flex gap-5 w-full">
        <Skeleton className="w-full h-80" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 px-20 pt-5">Failed to load data</div>;
  }

  const company = data?.find(
    (c) => c.ticker.toLowerCase() === slug.toLowerCase()
  );

  return (
    <div className="px-20 pt-5 flex gap-5 w-full">
      <div className="w-full">
        <StockChart name={slug} />
      </div>
      <div className="w-full">
        {company ? (
          <Card className="w-full">
            <div className="flex gap-2 items-center justify-between px-5">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {company.companyName}
                </CardTitle>
              </CardHeader>
              {/* <Separator/> */}
              <CardContent>
                <div className="space-y-2 text-sm flex items-center gap-4">
                  <p className="flex justify-between flex-col items-end m-0">
                    <div>Reference Price:</div>
                    <div className="font-semibold text-lg">
                      {company.currentStockPrice} <span className="text-sm">{company.isIn ? "INR" : "USD"}</span>
                    </div>
                  </p>
                  <p className="flex justify-between flex-col items-end m-0">
                    <div>Predicted Price:</div>
                    <div className="font-semibold text-lg">
                      {company.futureStockPrice} <span className="text-sm">{company.isIn ? "INR" : "USD"}</span>
                    </div>
                  </p>
                  <p className="flex justify-between flex-col items-end m-0">
                    <div>Growth:</div>
                    <div
                      className={`font-semibold text-lg ${
                        company.growth < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {company.growth}<span className="text-sm">%</span>
                    </div>
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        ) : (
          <p className="text-muted-foreground">
            No data found for this ticker.
          </p>
        )}
      </div>
    </div>
  );
}
