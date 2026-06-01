import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="font-heading text-8xl font-bold text-wood-light mb-4">404</p>

      <h1 className="font-heading text-3xl font-bold text-wood-dark mb-3">
        Página no encontrada
      </h1>

      <p className="text-muted-foreground text-lg max-w-md mb-8">
        La página que buscas no existe o ha sido movida. Puede que el enlace esté desactualizado.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          asChild
          className="bg-wood-medium hover:bg-wood-dark text-cream rounded-none px-8"
        >
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-wood-medium text-wood-medium hover:bg-wood-medium hover:text-cream rounded-none px-8"
        >
          <Link href="/proyectos">Ver proyectos</Link>
        </Button>
      </div>
    </div>
  );
}
