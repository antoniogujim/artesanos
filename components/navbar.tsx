"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Inicio",       href: "/" },
  { label: "Proyectos",    href: "/proyectos" },
  { label: "Nosotros",     href: "/nosotros" },
  { label: "Contacto",     href: "/contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-wood-dark/95 backdrop-blur-sm shadow-md">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="font-heading text-xl font-semibold text-cream tracking-wide hover:text-gold transition-colors">
          Artesanos Gutiérrez
        </Link>

        {/* Links escritorio */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:text-gold",
                  pathname === href || (href !== "/" && pathname.startsWith(href))
                    ? "text-gold font-medium"
                    : "text-cream/80"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-cream hover:text-gold transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="md:hidden bg-wood-dark border-t border-wood-medium/30">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block text-sm tracking-wide transition-colors hover:text-gold",
                    pathname === href || (href !== "/" && pathname.startsWith(href))
                      ? "text-gold font-medium"
                      : "text-cream/80"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
