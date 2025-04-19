// app/search/page.tsx

"use client";

import { useSearchParams } from "next/navigation"; // Using the new hook for search params
import { useEffect, useState } from "react";

// Simulate an API call to fetch search results
const fetchSearchResults = async (query: string) => {
  return new Promise<{ results: string[] }>((resolve) =>
    setTimeout(() => {
      resolve({
        results: [
          `Result for "${query}" 1`,
          `Result for "${query}" 2`,
          `Result for "${query}" 3`,
        ],
      });
    }, 1000)
  );
};

const SearchPage = () => {
  const searchParams = useSearchParams(); // Capture the search query parameter
  const search = searchParams.get("search"); // Retrieve the 'search' query parameter

  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (search) {
      setLoading(true);
      fetchSearchResults(search).then((data) => {
        setResults(data.results);
        setLoading(false);
      });
    }
  }, [search]); // Trigger effect when 'search' query changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold ">
          Loading search results...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold  mb-6">
        Search Results for &quot;{search}&quot;
      </h1>

      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((result, index) => (
            <li
              key={index}
              className="p-4  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              {result}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
