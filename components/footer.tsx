import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Inicio",     href: "/" },
  { label: "Proyectos",  href: "/proyectos" },
  { label: "Nosotros",   href: "/nosotros" },
  { label: "Contacto",   href: "/contacto" },
];

const contactInfo = [
  { icon: MapPin, label: "Ubicación",  value: "Jaén, España" },
  { icon: Phone,  label: "Teléfono",   value: "+34 600 000 000" },
  { icon: Mail,   label: "Email",      value: "info@artesanosgutierrez.es" },
];

export default function Footer() {
  return (
    <footer className="bg-wood-dark text-cream/70 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Marca */}
        <div>
          <h3 className="font-heading text-cream text-lg font-semibold mb-3">
            Artesanos Gutiérrez
          </h3>
          <p className="text-sm leading-relaxed">
            Carpintería artesanal familiar en Jaén desde 1988. Cada pieza, una obra hecha a mano con madera seleccionada.
          </p>
        </div>

        {/* Navegación */}
        <nav aria-label="Enlaces del pie de página">
          <h4 className="font-heading text-cream font-medium mb-3">Páginas</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacto */}
        <div>
          <h4 className="font-heading text-cream font-medium mb-3">Contacto</h4>
          <ul className="flex flex-col gap-3 text-sm">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon size={14} aria-hidden="true" className="shrink-0 text-cream/50" />
                <span>
                  <span className="sr-only">{label}: </span>
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-wood-medium/30 text-center text-xs py-4 text-cream/60">
        © {new Date().getFullYear()} Artesanos Gutiérrez. Todos los derechos reservados.
      </div>
    </footer>
  );
}
