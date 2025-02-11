import { Skeleton } from "@/components/ui/skeleton"

export function ResultSkeleton() {
  return (
    <div className="max-w-2xl mx-auto space-y-1">
      <div className="flex items-center space-x-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-3 w-1/2 bg-emerald-100" />
          <Skeleton className="h-5 w-[90%]" />
        </div>
      </div>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-[95%]" />
      <div className="flex items-center space-x-2 pt-1">
        <Skeleton className="h-3 w-12" />
        <Skeleton className="h-3 w-3 rounded-full" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  )
}