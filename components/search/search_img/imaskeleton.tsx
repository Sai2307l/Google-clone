import { Skeleton } from "@/components/ui/skeleton";

export function ImageResultSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="w-full aspect-square rounded-lg" />
      <div className="space-y-1">
        <Skeleton className="h-3 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  );
}
