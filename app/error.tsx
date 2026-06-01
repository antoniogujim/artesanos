"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="w-16 h-16 flex items-center justify-center bg-wood-medium/10 rounded-sm mb-6">
        <AlertTriangle className="text-wood-medium" size={32} />
      </div>

      <h1 className="font-heading text-4xl font-bold text-wood-dark mb-3">
        Algo ha ido mal
      </h1>

      <p className="text-muted-foreground text-lg max-w-md mb-2">
        Ha ocurrido un error inesperado. Puedes intentarlo de nuevo o volver al inicio.
      </p>

      {error?.digest && (
        <p className="text-muted-foreground/60 text-xs mb-8 font-mono">
          Código: {error.digest}
        </p>
      )}

      {!error?.digest && <div className="mb-8" />}

      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          onClick={reset}
          className="bg-wood-medium hover:bg-wood-dark text-cream rounded-none px-8"
        >
          Reintentar
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-wood-medium text-wood-medium hover:bg-wood-medium hover:text-cream rounded-none px-8"
        >
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
