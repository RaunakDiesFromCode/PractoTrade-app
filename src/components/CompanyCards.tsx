"use client";

import React from "react";
import CompanyCard from "./CompanyCard";
import SkeletonCard from "./SkeletonCard";
import { useStockPredictions } from "@/hooks/useStockPredictions";

const CompanyCards: React.FC = () => {
  const { data: companies, isLoading, isError, error } = useStockPredictions();

  if (isLoading) {
    // Render skeletons while loading
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-10">
        Error fetching stock data: {(error as Error).message}
      </div>
    );
  }

  if (!companies || companies.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No stock predictions available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-20">
      {companies.map((company) => (
        <CompanyCard
          key={company.ticker} // Use ticker as the key
          companyName={company.companyName}
          ticker={company.ticker} // Pass ticker here
          currentStockPrice={company.currentStockPrice}
          futureStockPrice={company.futureStockPrice}
          growth={company.growth}
          isIn={company.isIn} // Pass isIn as well
        />
      ))}
    </div>
  );
};

export default CompanyCards;
