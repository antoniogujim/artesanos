"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

// global-error reemplaza el layout raíz entero, por eso incluye <html> y <body>
export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="es">
      <body className="min-h-screen flex items-center justify-center bg-[#F5ECD7] font-sans">
        <div className="flex flex-col items-center text-center px-6 gap-6">
          <div className="w-16 h-16 flex items-center justify-center bg-[#7B4A1E]/10 rounded-sm">
            <AlertTriangle style={{ color: "#7B4A1E" }} size={32} />
          </div>

          <h1 style={{ fontFamily: "Georgia, serif", color: "#2D1B0E", fontSize: "2rem", fontWeight: 700 }}>
            Error crítico
          </h1>

          <p style={{ color: "#7B6B5A", maxWidth: "28rem" }}>
            Se ha producido un error grave en la aplicación. Por favor, recarga la página.
          </p>

          {error?.digest && (
            <p style={{ color: "#7B6B5A", fontSize: "0.75rem", fontFamily: "monospace" }}>
              Código: {error.digest}
            </p>
          )}

          <Button
            onClick={reset}
            className="bg-[#7B4A1E] hover:bg-[#2D1B0E] text-[#F5ECD7] rounded-none px-8"
          >
            Reintentar
          </Button>
        </div>
      </body>
    </html>
  );
}
