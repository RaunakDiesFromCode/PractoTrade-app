"use client";

import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Check,
  ChevronsUpDown,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import StockSentimentPoll from "./StockSentimentPoll";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Posts from "./Posts";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { FaYahoo } from "react-icons/fa";
import { useCompanyList } from "@/hooks/useCompanyList";
import { useSingleStockPrediction } from "@/hooks/useSingleStockPrediction";
import { StockChart1D } from "./StockChart1D";
import { StockChart7D } from "./StockChart7D";
import { StockChartRealtime } from "./StockChartRealtime";

const chartOptions = [
  { value: "1d", label: "Yesterday" },
  { value: "7d", label: "7 Days" },
  { value: "realtime", label: "Realtime" },
];

export default function StockPageClient({ slug }: { slug: string }) {
  const [selectedChart, setSelectedChart] = useState("realtime");
  const [open, setOpen] = useState(false);

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

  const renderChart = () => {
    switch (selectedChart) {
      case "1d":
        return <StockChart1D name={slug} />;
      case "7d":
        return <StockChart7D name={slug} />;
      case "realtime":
        return <StockChartRealtime name={slug} />;
      default:
        return null;
    }
  };

  return (
    <div className="px-20 pt-5 flex gap-3 w-full">
      <div className="w-full flex flex-col gap-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex w-full items-center justify-between">
              <div>{slug} Stock Price</div>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="w-[200px] justify-between"
                  >
                    {chartOptions.find(
                      (option) => option.value === selectedChart
                    )?.label || "Select chart"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandList>
                      <CommandEmpty>No chart found.</CommandEmpty>
                      <CommandGroup>
                        {chartOptions.map((option) => (
                          <CommandItem
                            key={option.value}
                            value={option.value}
                            onSelect={(value) => {
                              setSelectedChart(value);
                              setOpen(false);
                            }}
                          >
                            {option.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                selectedChart === option.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </CardTitle>
          </CardHeader>
          {renderChart()}
        </Card>
        <StockSentimentPoll symbol={slug} />
      </div>

      <div className="w-full">
        <div className="w-full flex flex-col gap-3">
          <Card>
            <div className="flex items-center justify-between px-5">
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
            <Separator />
            <Button
              asChild
              className="w-fit mx-10 p-2.5 my-0"
              variant={"outline"}
            >
              <Link
                href={"https://finance.yahoo.com/quote/" + slug + "/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2">
                  <FaYahoo size={64}/>
                  <div>View on Yahoo Finance</div>
                </div>
              </Link>
            </Button>
          </Card>
          <Posts name={slug} />
        </div>
      </div>
    </div>
  );
}
