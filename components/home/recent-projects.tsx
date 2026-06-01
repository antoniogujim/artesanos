import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/lib/projects";

export default async function RecentProjects() {
  const projects = await getFeaturedProjects();

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2">Nuestro trabajo</p>
            <h2 className="font-heading text-4xl font-bold text-wood-dark">Proyectos Recientes</h2>
          </div>
          <Button asChild variant="outline" className="border-wood-medium text-wood-medium hover:bg-wood-medium hover:text-cream rounded-none self-start sm:self-auto">
            <Link href="/proyectos">Ver todos</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/proyectos/${project.slug}`}
              className="group block overflow-hidden border border-wood-light/30 hover:border-wood-medium transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 bg-cream">
                <Badge className="bg-wood-light/20 text-wood-medium border-none text-xs mb-3 rounded-none">
                  {project.category}
                </Badge>
                <h3 className="font-heading text-lg font-semibold text-wood-dark group-hover:text-wood-medium transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
