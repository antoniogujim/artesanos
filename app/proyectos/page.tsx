import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getAllProjects } from "@/lib/projects";

// ISR: regenera el listado en segundo plano cada hora
export const revalidate = 3600;

export const metadata = {
  title: "Proyectos | Artesanos Carpintería",
  description: "Explora nuestros trabajos en madera: muebles, puertas, ventanas y más.",
};

export default async function ProyectosPage() {
  const projects = await getAllProjects();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-wood-dark mb-4">Nuestros Proyectos</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">
        Una selección de trabajos realizados a medida. Cada proyecto es único, diseñado y ejecutado con dedicación artesanal.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5 bg-cream">
              <Badge className="bg-wood-light/20 text-wood-medium border-none text-xs mb-3 rounded-none">
                {project.category}
              </Badge>
              <h2 className="font-heading text-lg font-semibold text-wood-dark group-hover:text-wood-medium transition-colors">
                {project.title}
              </h2>
              <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
