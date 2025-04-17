import React from "react";

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
    <div className="company-card border rounded-lg shadow-md p-4 text-black flex items-center space-x-4 bg-white">
      <div className="flex-1">
        <h2 className="text-lg font-bold">{companyName}</h2>
        <p className="text-sm text-gray-500">{ticker}</p> {/* Display ticker */}
        <div className="mt-2">
          <p>
            Current Price:{" "}
            <span className="font-semibold">
              {formatPrice(currentStockPrice, isIn)}
            </span>
          </p>
          <p>
            Future Price:{" "}
            <span className="font-semibold">
              {formatPrice(futureStockPrice, isIn)}
            </span>
          </p>
          <p
            className={`font-semibold ${
              isGrowthPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            Growth:{" "}
            {typeof growth === "number"
              ? `${isGrowthPositive ? "+" : ""}${growth.toFixed(2)}%`
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
