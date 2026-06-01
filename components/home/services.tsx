import { Hammer, RefreshCw, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    icon: Hammer,
    title: "Muebles a medida",
    description:
      "Diseñamos y fabricamos muebles únicos adaptados al espacio y estilo de cada cliente. Armarios, mesas, estanterías y mucho más.",
  },
  {
    icon: RefreshCw,
    title: "Restauración",
    description:
      "Devolvemos la vida a piezas antiguas con técnicas tradicionales. Respetamos la esencia original mientras recuperamos su esplendor.",
  },
  {
    icon: Building2,
    title: "Carpintería estructural",
    description:
      "Vigas, entramados, techos de madera y soluciones constructivas para proyectos de obra nueva o rehabilitación.",
  },
];

export default function Services() {
  return (
    <section className="bg-sand py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2">Lo que hacemos</p>
          <h2 className="font-heading text-4xl font-bold text-wood-dark">Servicios Destacados</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="bg-cream border-wood-light/30 rounded-none shadow-sm hover:shadow-md transition-shadow group"
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-wood-medium/10 rounded-sm mb-4 group-hover:bg-gold/10 transition-colors">
                  <Icon className="text-wood-medium group-hover:text-gold transition-colors" size={24} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-wood-dark">{title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
