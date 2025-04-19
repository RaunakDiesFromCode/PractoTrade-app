// "use client";

import SearchPageContent from "@/components/SearchPageContent";
import React, { Suspense } from "react";

const SearchPage = () => {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;
