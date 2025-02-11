"use client";

import { ResultSkeleton } from "@/components/search/search_web/webskeleton";
import SearchBar from "@/components/search/searchbar";
export default function SearchResultsDemo() {
  return (
    <div className="space-y-6">
      <SearchBar isWeb={true} SearchData={""} />
      <ResultSkeleton />
      <ResultSkeleton />
      <ResultSkeleton />
      <ResultSkeleton />
      <ResultSkeleton />
    </div>
  );
}
