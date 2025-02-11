import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <SearchResultSkeleton />
      <SearchResultSkeleton />
      <SearchResultSkeleton />
    </div>
  );
}

function SearchResultSkeleton() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <Skeleton className="h-3 w-1/2 bg-emerald-100" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-full" />
    </div>
  );
}
