"use client";

import CompanyCard from "@/components/CompanyCard";
import { useSearchResults } from "@/hooks/useSearchResults";
import { Skeleton } from "@/components/ui/skeleton";

const SearchPage = () => {
  const { results, loading, search } = useSearchResults();

  const renderSkeletons = () => {
    return Array.from({ length: 3 }).map((_, idx) => (
      <div
        key={idx}
        className="p-4 rounded-lg shadow-md space-y-4 bg-card border border-border"
      >
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-4 w-40" />
          </div>
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-8 mt-2">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-20" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
          <Skeleton className="h-6 w-6" />
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">
        Search Results for &quot;{search}&quot;
      </h1>

      {loading ? (
        <div className="space-y-4">{renderSkeletons()}</div>
      ) : results.length > 0 ? (
        <div className="space-y-4">
          {results.map((item) => (
            <CompanyCard
              key={item.company}
              companyName={item.company}
              ticker={item.company}
              currentStockPrice={
                item.avg_predicted_price -
                (item.avg_predicted_price * item.predicted_percentage_change) /
                  100
              }
              futureStockPrice={item.avg_predicted_price}
              growth={item.predicted_percentage_change}
              isIn={item.isIn}
              isFav={item.isFav || false}
            />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
