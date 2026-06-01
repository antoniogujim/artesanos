import { ProjectCardSkeleton } from "./project-card-skeleton";

export function RecentProjectsSkeleton() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Cabecera skeleton */}
        <div className="flex justify-between items-end mb-14 animate-pulse">
          <div className="flex flex-col gap-2">
            <div className="h-3 w-28 bg-sand rounded-sm" />
            <div className="h-9 w-64 bg-sand rounded-sm" />
          </div>
          <div className="h-9 w-28 bg-sand rounded-sm" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
