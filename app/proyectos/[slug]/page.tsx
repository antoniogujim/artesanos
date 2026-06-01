import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";

export const revalidate = 3600;
export const dynamicParams = true;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image, alt: project.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProyectoDetallePage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/proyectos"
        className="text-sm text-muted-foreground hover:text-gold transition-colors mb-8 inline-block"
      >
        ← Volver a Proyectos
      </Link>

      {/* Imagen principal */}
      <div className="relative aspect-video w-full overflow-hidden bg-sand mb-10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>

      <Badge className="bg-wood-light/20 text-wood-medium border-none rounded-none mb-4">
        {project.category}
      </Badge>

      <h1 className="font-heading text-4xl font-bold text-wood-dark mb-6">
        {project.title}
      </h1>

      <p className="text-muted-foreground text-lg leading-relaxed mb-10">
        {project.description}
      </p>

      {/* Materiales */}
      <div className="border-t border-wood-light/30 pt-8">
        <h2 className="font-heading text-lg font-semibold text-wood-dark mb-4">
          Materiales utilizados
        </h2>
        <ul className="flex flex-wrap gap-2">
          {project.materials.map((material) => (
            <li key={material}>
              <Badge className="bg-sand text-wood-medium border border-wood-light/40 rounded-none">
                {material}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
