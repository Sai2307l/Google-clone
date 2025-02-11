import Link from "next/link";
import Parser from "html-react-parser";
import { WebSearchResultProps } from "@/lib/types";
function SearchResult({ Result }: WebSearchResultProps) {
  const { formattedSearchTime, formattedTotalResults } =
    Result?.searchInformation || {};
  const results = Result?.items;
  return Result ? (
    <div className="w-full mx-auto px-3 pb-4 sm:pl-[5%] md:pl-[10%] ">
      <p className="text-gray-600 text-sm mb-3 mt-2">
        About {formattedTotalResults} found in {formattedSearchTime}sec
      </p>
      {results?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <div className="text-sm text-gray-600">
              <Link href={result.link} className="truncate"></Link>
              {result.formattedUrl}
            </div>
            <div className="group-hover:underline decoration-blue-800 text-blue-800 text-lg font-medium">
              <Link href={result.link}>{result.title}</Link>
            </div>
            <div className="text-gray-600">{Parser(result.snippet)}</div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>No Results Available</div>
  );
}

export default SearchResult;
