"use client";

import React from "react";
import CompanyCard from "./CompanyCard";
import SkeletonCard from "./SkeletonCard";
import { useCompanyList } from "@/hooks/useCompanyList";
import { useSingleStockPrediction } from "@/hooks/useSingleStockPrediction";

const CompanyCards: React.FC = () => {
  const { data: companies, isLoading, isError, error } = useCompanyList();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (isError || !companies) {
    return (
      <div className="text-center text-red-500 py-10">
        Error loading companies:{" "}
        {error instanceof Error ? error.message : "Unknown error occurred"}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {Object.entries(companies).map(([ticker, company]) => (
        <CompanyPredictionWrapper
          key={ticker}
          ticker={company.ticker}
          name={company.name}
          isIn={company.is_in}
          isFav={company.is_fav}
        />
      ))}
    </div>
  );
};

const CompanyPredictionWrapper: React.FC<{
  ticker: string;
  name: string;
  isIn: boolean;
  isFav: boolean; // Expecting isFav prop here
}> = ({ ticker, name, isIn, isFav }) => {
  // Accept isFav prop here
  const {
    data: prediction,
    isLoading,
    isError,
  } = useSingleStockPrediction(ticker, name, isIn);

  if (isLoading) return <SkeletonCard />;
  if (isError || !prediction) return null;

  return <CompanyCard isFav={isFav} {...prediction} />; // Pass isFav correctly
};


export default CompanyCards;
