import { Skeleton } from "@/components/ui/skeleton"

export default function ResourcesLoading() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-2 text-center max-w-3xl mx-auto mb-12">
        <Skeleton className="h-10 w-[300px] mx-auto" />
        <Skeleton className="h-6 w-[500px] mx-auto" />
      </div>

      <div className="flex flex-col gap-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-24" />
        </div>

        <Skeleton className="h-10 w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-[400px] w-full" />
          ))}
      </div>
    </div>
  )
}
