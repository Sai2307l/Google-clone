interface WebResult {
  context: {
    title: string;
  };
  items: WebItems[];
  kind: string;
  queries: {
    nextPage: object[];
    request: object[];
  };
  searchInformation: {
    formattedSearchTime: string;
    formattedTotalResults: string;
    totalResults: string;
    searchTime: number;
  };
  url: {
    template: string;
    type: string;
  };
}
interface WebItems {
  displayLink: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  htmlSnippet: string;
  htmlTitle: string;
  kind: string;
  link: string;
  title: string;
  pageMap: {
    cse_image: object[];
    cse_thumbnail: object[];
  };
  snippet: string;
}
interface ImageResult {
  context: {
    title: string;
  };
  items: ImageItems[];
  kind: string;
  queries: {
    nextPage: object[];
    request: object[];
  };
  searchInformation: {
    formattedSearchTime: string;
    formattedTotalResults: string;
    totalResults: string;
    searchTime: number;
  };
  url: {
    template: string;
    type: string;
  };
}
interface ImageItems {
  title: string;
  displayLink: string;
  link: string;
  htmlTitle: string;
  image: {
    thumbnailLink: string;
    contextLink: string;
  };
}

interface WebSearchResultProps {
  Result: WebResult;
}
interface ImageSearchResultProps {
  Result: ImageResult;
}

export type {
  ImageSearchResultProps,
  WebSearchResultProps,
  ImageResult,
  ImageItems,
  WebResult,
  WebItems,
};
