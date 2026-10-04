import { cn } from '@/lib/cn';

/** Placeholder bars shown while a route chunk or content file loads. */
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn('h-6 animate-pulse rounded-md bg-surface-card', className)} />;
}

export function PageSkeleton() {
  return (
    <div aria-busy="true" className="flex flex-col gap-4">
      <Skeleton className="h-10 w-2/3" />
      <Skeleton className="h-24" />
      <Skeleton className="h-24" />
    </div>
  );
}
