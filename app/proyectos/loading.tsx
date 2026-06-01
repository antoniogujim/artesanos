import { ProjectsGridSkeleton } from "@/components/skeletons/project-card-skeleton";

export default function ProyectosLoading() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Cabecera skeleton */}
      <div className="animate-pulse flex flex-col gap-3 mb-12">
        <div className="h-10 w-64 bg-sand rounded-sm" />
        <div className="h-5 w-96 bg-sand rounded-sm" />
      </div>

      <ProjectsGridSkeleton count={6} />
    </section>
  );
}
