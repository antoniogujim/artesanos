import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// display:'swap' muestra texto con la fuente de reserva mientras carga la custom,
// eliminando el desplazamiento de diseño (CLS)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

// metadataBase es necesario para que Next.js construya URLs absolutas
// en OpenGraph y Twitter (imágenes, canonical, etc.)
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"),
  title: {
    default: "Artesanos Gutiérrez | Carpintería artesanal en Jaén",
    template: "%s | Artesanos Gutiérrez",
  },
  description:
    "Taller de carpintería artesanal familiar en Jaén desde 1988. Muebles a medida, restauración y carpintería estructural hechos a mano.",
  keywords: [
    "carpintería artesanal",
    "muebles a medida",
    "restauración de muebles",
    "carpintería Jaén",
    "Artesanos Gutiérrez",
  ],
  authors: [{ name: "Artesanos Gutiérrez" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Artesanos Gutiérrez",
    title: "Artesanos Gutiérrez | Carpintería artesanal en Jaén",
    description:
      "Taller familiar con más de 35 años de tradición. Cada pieza, hecha a mano con madera seleccionada.",
    images: [
      {
        url: "/hero-taller.jpg",
        width: 1200,
        height: 630,
        alt: "Taller de carpintería Artesanos Gutiérrez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artesanos Gutiérrez | Carpintería artesanal en Jaén",
    description:
      "Taller familiar con más de 35 años de tradición. Cada pieza, hecha a mano.",
    images: ["/hero-taller.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("h-full antialiased", playfair.variable, lato.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
