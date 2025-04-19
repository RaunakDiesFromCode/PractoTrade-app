import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaYahoo } from "react-icons/fa";
import {
  TrendingUp,
  TrendingDown,
  TrendingUpIcon as TrendingUpDown,
} from "lucide-react";

export default function StockPriceCard({
  company,
  slug,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  company: any;
  slug: string;
}) {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 sm:px-5">
        <CardHeader className="px-2 py-3 sm:py-6">
          <CardTitle className="text-xl sm:text-2xl flex gap-1 items-center">
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
        <CardContent className="px-2 py-0 sm:py-6">
          <div className="space-y-2 text-sm flex flex-wrap items-center gap-4">
            <div className="flex flex-col items-end">
              <div>Closing Price:</div>
              <div className="font-semibold text-lg">
                {company.currentStockPrice}{" "}
                <span className="text-sm">{company.isIn ? "INR" : "USD"}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div>Predicted Price:</div>
              <div className="font-semibold text-lg">
                {company.futureStockPrice}{" "}
                <span className="text-sm">{company.isIn ? "INR" : "USD"}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
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
      <Separator />
      <Button
        asChild
        className="w-fit mx-auto sm:mx-10 p-2 sm:p-2.5 my-2 sm:my-0"
        variant={"outline"}
      >
        <Link
          href={`https://finance.yahoo.com/quote/${slug}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <FaYahoo className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <div className="text-sm sm:text-base">View on Yahoo Finance</div>
          </div>
        </Link>
      </Button>
    </Card>
  );
}
