import { Suspense } from "react";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import RecentProjects from "@/components/home/recent-projects";
import { RecentProjectsSkeleton } from "@/components/skeletons/recent-projects-skeleton";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Suspense fallback={<RecentProjectsSkeleton />}>
        <RecentProjects />
      </Suspense>
    </>
  );
}
