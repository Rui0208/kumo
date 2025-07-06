import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

// 預設的骨架屏組件
export const ImageSkeleton = ({ 
  className, 
  aspectRatio = "aspect-square" 
}: { 
  className?: string, 
  aspectRatio?: string 
}) => (
  <Skeleton className={cn("w-full", aspectRatio, className)} />
)

export const TextSkeleton = ({ 
  className, 
  lines = 1 
}: { 
  className?: string, 
  lines?: number 
}) => (
  <div className={cn("space-y-2", className)}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        className={cn(
          "h-4", 
          i === lines - 1 && lines > 1 ? "w-3/4" : "w-full"
        )} 
      />
    ))}
  </div>
)

export const CardSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col space-y-3", className)}>
    <ImageSkeleton aspectRatio="aspect-[4/3]" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </div>
)

export const ProductSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col space-y-4 p-6", className)}>
    <ImageSkeleton aspectRatio="aspect-square" />
    <div className="space-y-2">
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  </div>
)

export { Skeleton } 