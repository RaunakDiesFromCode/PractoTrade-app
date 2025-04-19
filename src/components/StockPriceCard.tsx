"use client";

import React from "react";
import { useToggleFavourite } from "@/hooks/useToggleFavourite"; // ✅ use it now
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function StockPriceCard({
  company,
  slug,
  isFav,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  company: any;
  slug: string;
  isFav: boolean;
}) {
  const [localFav, setLocalFav] = useState(isFav); // Local UI update
  const toggleFav = useToggleFavourite();

  const handleToggleFavourite = () => {
    setLocalFav((prev) => !prev); // Optimistically toggle
    toggleFav.mutate({ companyName: company.companyName });
  };

  return (
    <Card className="overflow-hidden py-5">
      <div className="px-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg md:text-2xl">
              {company.companyName}
            </h3>
            {typeof company.growth === "number" ? (
              company.growth >= 0 ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )
            ) : null}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleToggleFavourite}
            disabled={toggleFav.isPending}
          >
            <Star
              className={`h-5 w-5 transition ${
                localFav ? "fill-yellow-400 text-yellow-500" : "text-foreground"
              }`}
            />
          </Button>
        </div>

        <div className="flex w-full justify-between text-lg">
          <div>
            <div className="text-muted-foreground text-xs">Closing</div>
            <div className="font-medium">
              {company.currentStockPrice}
              <span className="text-xs ml-0.5">
                {company.isIn ? "INR" : "USD"}
              </span>
            </div>
          </div>

          <div>
            <div className="text-muted-foreground text-xs">Predicted</div>
            <div className="font-medium">
              {company.futureStockPrice}
              <span className="text-xs ml-0.5">
                {company.isIn ? "INR" : "USD"}
              </span>
            </div>
          </div>

          <div>
            <div className="text-muted-foreground text-xs">Growth</div>
            <div
              className={`font-medium ${
                company.growth < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {company.growth}
              <span className="text-xs">%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 p-2">
        <Button
          asChild
          variant="ghost"
          className="w-full h-8 text-xs sm:text-sm"
        >
          <Link
            href={`https://finance.yahoo.com/quote/${slug}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            {/* Yahoo Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3386.34 3010.5"
              fill="#5f01d1"
              className="w-4 h-4"
            >
              <path d="M0 732.88h645.84l376.07 962.1 380.96-962.1h628.76l-946.8 2277.62H451.98l259.19-603.53L.02 732.88zm2763.84 768.75h-704.26L2684.65 0l701.69.03-622.5 1501.6zm-519.78 143.72c216.09 0 391.25 175.17 391.25 391.22 0 216.06-175.16 391.23-391.25 391.23-216.06 0-391.19-175.17-391.19-391.23 0-216.05 175.16-391.22 391.19-391.22z" />
            </svg>
            <span>View on Yahoo Finance</span>
          </Link>
        </Button>
      </div>
    </Card>
  );
}
