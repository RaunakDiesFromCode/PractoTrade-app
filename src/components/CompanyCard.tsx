import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import {
  ChevronRight,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface CompanyCardProps {
  companyName: string;
  ticker: string; // Use ticker
  currentStockPrice?: number;
  futureStockPrice?: number;
  growth?: number;
  isIn: boolean; // Whether the company is based in India (INR) or not (USD)
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  companyName,
  ticker,
  currentStockPrice,
  futureStockPrice,
  growth,
  isIn, // Receiving the isIn prop
}) => {
  const isGrowthPositive = (growth ?? 0) >= 0;

  // Function to format stock prices based on currency type
  const formatPrice = (price: number | undefined, isIn: boolean): string => {
    if (price === undefined) return "N/A";
    return isIn
      ? `₹${price.toFixed(2)}` // Display in Rupees for Indian companies
      : `$${price.toFixed(2)}`; // Display in Dollars for non-Indian companies
  };

  return (
    <Link href={`/company/${ticker}`}>
      <Card className="gap-2 h-fit pt-3 pb-1 hover:scale-101 transition-all duration-200 ease-in-out">
        <div className="flex items-center justify-between px-5">
          <CardHeader className="p-0 m-0 w-full">
            <CardTitle className="font-bold text-xl">{ticker}</CardTitle>
            <CardDescription className="pb-0 mb-0">
              {companyName}
            </CardDescription>
          </CardHeader>
          <div className="flex flex-col items-center justify-center">
            <div
              className={`font-semibold ${
                isGrowthPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {typeof growth === "number" ? (
                isGrowthPositive ? (
                  <TrendingUp />
                ) : (
                  <TrendingDown />
                )
              ) : (
                <TrendingUpDown />
              )}
            </div>
            <p
              className={`font-semibold ${
                isGrowthPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              {/* Growth:{" "} */}
              {typeof growth === "number"
                ? `${isGrowthPositive ? "+" : ""}${growth.toFixed(2)}%`
                : "N/A"}
            </p>
          </div>
        </div>
        <Separator className="" />

        <CardContent className="flex justify-between items-center">
          <div className="mt-2">
            <div className="flex h-10 items-center space-x-4 my-4 text-sm">
              <div className="flex flex-col text-sm">
                <span>Reference Price </span>
                <span className="font-semibold text-xl">
                  {formatPrice(currentStockPrice, isIn)}
                </span>
              </div>

              <Separator orientation="vertical" />

              <div className="flex flex-col text-sm">
                <span>Predicted Price </span>
                <span className="font-semibold text-xl">
                  {formatPrice(futureStockPrice, isIn)}
                </span>
              </div>
            </div>
          </div>

          <Button
            variant={"ghost"}
            className="dark:hover:bg-card hover:bg-card"
          >
            <ChevronRight />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CompanyCard;
