import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[560px] flex items-center overflow-hidden">

      {/* Imagen de fondo — reemplaza /hero-taller.jpg con la foto real del taller */}
      <Image
        src="/hero-taller.jpg"
        alt="Interior del taller de Artesanos Gutiérrez en Jaén, con herramientas y piezas de madera"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay oscuro con tono madera */}
      <div className="absolute inset-0 bg-wood-dark/70" />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col gap-6">
        <p className="text-gold font-body text-sm tracking-[0.2em] uppercase">
          Artesanos Gutiérrez
        </p>

        <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream leading-tight max-w-2xl">
          La madera,<br />con alma propia
        </h1>

        <p className="text-cream/80 text-lg max-w-lg leading-relaxed">
          Creamos piezas únicas a medida, desde muebles hasta estructuras. Cada trabajo lleva el sello del artesano que lo hace.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button asChild size="lg" className="bg-gold hover:bg-gold-light text-wood-dark font-semibold rounded-none px-8">
            <Link href="/proyectos">Ver proyectos</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent border-cream text-cream hover:bg-cream hover:text-wood-dark rounded-none px-8">
            <Link href="/contacto">Pedir presupuesto</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
