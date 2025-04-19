"use client";
import StockChartSwitcher from "./StockChartSwitcher";
import StockSentiment from "./StockSentiment";
import StockNews from "./StockNews";
import StockPriceCard from "./StockPriceCard";
import { useCompanyList } from "@/hooks/useCompanyList";
import { useSingleStockPrediction } from "@/hooks/useSingleStockPrediction";
import { Skeleton } from "./ui/skeleton";

export default function StockPageClient({ slug }: { slug: string }) {
  const { data: companies, isLoading: isCompaniesLoading } = useCompanyList();
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
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 pt-5 flex flex-col lg:flex-row gap-3 w-full">
        <Skeleton />
      </div>
    );
  }

  if (predictionError || !company) {
    return (
      <div className="text-red-500 px-20 pt-5">
        Failed to load stock data for <strong>{slug}</strong>.
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 pt-5 flex flex-col lg:flex-row gap-3 w-full">
      <div className="w-full flex flex-col gap-3 lg:mb-0">
        <StockChartSwitcher slug={slug} />
        <div className="lg:block hidden">
          <StockSentiment slug={slug} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <StockPriceCard
          company={company}
          slug={slug}
          isFav={companyMeta?.is_fav ?? false}
        />
        <div className="lg:block hidden">
          <StockNews slug={slug} />
        </div>
        <div className="lg:hidden block">
          <StockSentiment slug={slug} />
        </div>
        <div className="lg:hidden block">
          <StockNews slug={slug} />
        </div>
      </div>
    </div>
  );
}
