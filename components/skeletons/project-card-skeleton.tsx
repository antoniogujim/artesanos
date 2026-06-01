export function ProjectCardSkeleton() {
  return (
    <div className="overflow-hidden border border-wood-light/20 animate-pulse">
      {/* Imagen */}
      <div className="aspect-[4/3] bg-sand" />
      {/* Info */}
      <div className="p-5 bg-cream flex flex-col gap-3">
        <div className="h-4 w-24 bg-sand rounded-sm" />
        <div className="h-5 w-3/4 bg-sand rounded-sm" />
        <div className="h-4 w-full bg-sand rounded-sm" />
        <div className="h-4 w-2/3 bg-sand rounded-sm" />
      </div>
    </div>
  );
}

export function ProjectsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
