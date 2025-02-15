"use client";

import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/search/searchbar";
import SearchResult from "@/components/search/search_web/webresult";
import { useEffect, useState } from "react";
import { WebResult } from "@/lib/types";
import Pagination from "@/components/pagination";

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const link = `/search/web?query=${query}`;
  const index = Number(searchParams.get("start") ?? 1);

  const [result, setResult] = useState<WebResult>();
  const [pages, setPages] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CX}&q=${query}&start=${index}`;

      if (!query) return;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setResult(data))
        .catch((err) => {
          throw new Error(err);
        });
    }
    fetchData();
  }, [query, index]);
  useEffect(() => {
    setPages(Number(result?.searchInformation.totalResults ?? 0));
  }, [result]);
  return (
    <div className="container mx-auto px-4 pb-4 gap-4">
      <SearchBar SearchData={query} isWeb={true} />
      {result && <SearchResult Result={result} />}
      <Pagination currentPage={index} totalPages={pages} link={link} />
    </div>
  );
}
