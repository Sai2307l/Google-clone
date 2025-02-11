"use client";

import { Skeleton } from "@/components/ui/skeleton";
import SearchBar from "@/components/search/searchbar";

function ImageSearchResults() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {[...Array(20)].map((_, i) => (
        <div key={`result-${i + Math.random()}`} className="space-y-2">
          <Skeleton className="w-full aspect-square rounded-lg bg-gray-200" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-3/4 bg-gray-300" />
            <Skeleton className="h-3 w-1/2 bg-gray-300" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ImageSearchResultsDemo() {
  return (
    <div className="container mx-auto px-4 py-8 gap-4">
      <SearchBar isWeb={true} SearchData={""} />
      <div className="mb-8">
        <Skeleton className="h-8 w-64 mb-4" />
        <div className="flex space-x-2">
          {["All", "Images", "Videos", "News", "Maps"].map((item) => (
            <Skeleton key={item} className="h-6 w-16" />
          ))}
        </div>
      </div>
      <SearchBar isWeb={true} SearchData={""} />
      <ImageSearchResults />
    </div>
  );
}
