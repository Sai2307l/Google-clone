import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageSearchResultProps } from "@/lib/types";
function SearchResult({ Result }: ImageSearchResultProps) {
  const items = Result?.items;
  return Result ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {items?.map((item) => (
        <div key={item.link} className="group">
          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="relative overflow-hidden">
              <Image
                unoptimized={true}
                src={item.link}
                quality={100}
                width={200}
                height={300}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
            </div>
          </Link>
          <div className="mt-2">
            <h2
              className="text-sm font-medium text-gray-800 truncate"
              dangerouslySetInnerHTML={{ __html: item.htmlTitle }}
            />
            <p className="text-xs text-gray-600">{item.displayLink}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>No Results Available</div>
  );
}

export default SearchResult;
