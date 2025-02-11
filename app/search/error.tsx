"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import SearchBar from "@/components/search/searchbar";
interface ErrorProps {
  error: Error;
  reset: () => void;
}
export default function Error({ error, reset }: ErrorProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <SearchBar SearchData={query} isWeb={true} />
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1>Something went wrong</h1>
        <button onClick={() => reset}>Try again</button>
      </div>
    </div>
  );
}
