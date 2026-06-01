# Artesanos Gutiérrez

Sitio web oficial de **Artesanos Gutiérrez**, taller de carpintería artesanal fundado en 1988 en Jaén. La web presenta los proyectos del taller, los servicios que ofrece y permite a los clientes ponerse en contacto para solicitar presupuestos.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | Framework principal (App Router) |
| TypeScript | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilos y diseño |
| [Shadcn UI](https://ui.shadcn.com) | — | Componentes accesibles (Radix) |
| Lucide React | — | Iconografía |

---

## Estructura del proyecto

```
artesanos/
├── app/
│   ├── page.tsx                      # Inicio (/)
│   ├── layout.tsx                    # Layout raíz (Navbar + Footer + Metadata)
│   ├── globals.css                   # Estilos globales y paleta de colores
│   ├── error.tsx                     # Página de error de runtime ("use client")
│   ├── global-error.tsx              # Error crítico en el layout raíz ("use client")
│   ├── not-found.tsx                 # Página 404 personalizada
│   ├── robots.ts                     # Genera /robots.txt
│   ├── sitemap.ts                    # Genera /sitemap.xml dinámico
│   ├── proyectos/
│   │   ├── page.tsx                  # Galería de proyectos (/proyectos) — ISR 1h
│   │   ├── loading.tsx               # Skeleton de carga de la galería
│   │   └── [slug]/
│   │       └── page.tsx              # Detalle de proyecto — ISR + generateStaticParams
│   ├── nosotros/
│   │   └── page.tsx                  # Sobre nosotros (/nosotros)
│   └── contacto/
│       ├── page.tsx                  # Página de contacto (/contacto)
│       ├── contact-form.tsx          # Formulario ("use client" + useActionState)
│       ├── actions.ts                # Server Action ("use server")
│       └── types.ts                  # Tipos y estado inicial del formulario
│
├── components/
│   ├── home/
│   │   ├── hero.tsx                  # Hero section
│   │   ├── services.tsx              # Servicios destacados
│   │   └── recent-projects.tsx       # Proyectos recientes (async Server Component)
│   ├── skeletons/
│   │   ├── project-card-skeleton.tsx # Skeleton de tarjeta y grid
│   │   └── recent-projects-skeleton.tsx # Skeleton de la sección home
│   ├── ui/                           # Componentes Shadcn (Button, Card, Badge, Input…)
│   ├── navbar.tsx                    # Navegación sticky responsive ("use client")
│   └── footer.tsx                    # Pie de página con iconos accesibles
│
├── lib/
│   ├── projects.ts                   # Datos, interfaz Project y helpers async
│   └── utils.ts                      # Utilidades (cn)
│
├── middleware.ts                     # Cabeceras de seguridad + control de acceso /admin
│
└── public/
    ├── hero-taller.jpg               # Imagen del hero
    └── projects/                     # Imágenes de los proyectos
```

---

## Páginas

### Inicio (`/`)
- **Hero Section** — imagen optimizada con `priority`, overlay madera, dos CTAs
- **Servicios Destacados** — Muebles a medida, Restauración, Carpintería estructural
- **Proyectos Recientes** — async Server Component envuelto en `<Suspense>` con skeleton

### Galería de proyectos (`/proyectos`)
- Grid responsive — async Server Component, consume `getAllProjects()`
- ISR con revalidación cada hora (`revalidate = 3600`)
- `loading.tsx` como Suspense boundary automático con skeleton

### Detalle de proyecto (`/proyectos/[slug]`)
- Ruta dinámica — filtra por slug con `getProjectBySlug(slug)`
- `generateStaticParams` — pre-renderiza todos los slugs en build
- `dynamicParams = true` — slugs nuevos generados en primera visita
- `generateMetadata` dinámico con título, descripción y OpenGraph por proyecto
- ISR con revalidación cada hora
- Muestra imagen, descripción, categoría y materiales utilizados

### Nosotros (`/nosotros`)
- Cabecera oscura con presentación del taller
- Franja dorada con estadísticas (1988, +400 proyectos, 35 años, 3ª generación)
- Historia narrativa + timeline desde 1988
- Sección de 4 valores con iconos
- Equipo: Antonio Gutiérrez, Lucía Gutiérrez, Tomás Vidal

### Contacto (`/contacto`)
- Formulario con Server Action (`"use server"`)
- Validación de campos: nombre, email, teléfono (opcional), mensaje
- Gestión de estados: `idle` → `pending` → `success` / `error`
- Errores por campo + banner general
- Pantalla de éxito con botón para enviar otro mensaje (reset sin recargar)

---

## Arquitectura y patrones

### Server vs Client Components
| Componente | Tipo | Motivo |
|---|---|---|
| Todas las páginas | Server | Sin interactividad, datos en servidor |
| `recent-projects.tsx` | Server async | Consume datos con `await` |
| `navbar.tsx` | Client | `usePathname`, `useState` |
| `contact-form.tsx` | Client | `useActionState`, interactividad |
| `error.tsx` / `global-error.tsx` | Client | Prop `reset` requiere React |

### ISR (Incremental Static Regeneration)
- Galería y detalle de proyectos: `revalidate = 3600` (1 hora)
- Slugs nuevos: `dynamicParams = true` — generación bajo demanda

### Server Actions
- `app/contacto/actions.ts` — solo exporta funciones async (`"use server"`)
- Tipos e `initialState` en `types.ts` separado (los objetos no pueden exportarse desde `"use server"`)

### Suspense y Skeletons
- `app/proyectos/loading.tsx` — boundary automático de Next.js
- `<Suspense fallback={<RecentProjectsSkeleton />}>` — boundary manual en el home

### Middleware (`middleware.ts`)
- Cabeceras de seguridad en todas las rutas: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Strict-Transport-Security`, `Permissions-Policy`
- CSP estricta solo en producción (en dev Next.js necesita eval y WebSockets)
- Protección de ruta `/admin` — redirige si no hay cookie `session`

---

## SEO y accesibilidad

- `metadataBase` + `title.template` en el layout raíz
- `openGraph` y `twitter` card en layout y en cada proyecto (dinámico)
- `robots.ts` → genera `/robots.txt` automáticamente
- `sitemap.ts` → genera `/sitemap.xml` con todas las rutas y proyectos
- Contraste WCAG AA verificado en todos los colores de texto
- Iconos con `aria-hidden="true"` y texto alternativo con `sr-only`
- Imágenes con alt text descriptivo
- `lang="es"` en el elemento `<html>`

---

## Diseño

### Paleta de colores (tonos madera)

| Token | Hex | Uso |
|---|---|---|
| `wood-dark` | `#2D1B0E` | Texto principal, fondos oscuros |
| `wood-medium` | `#7B4A1E` | Botones, elementos destacados |
| `wood-light` | `#C4956A` | Bordes, detalles |
| `cream` | `#F5ECD7` | Fondo general |
| `sand` | `#E8D5B0` | Fondo secciones alternas |
| `gold` | `#B8860B` | Acentos, hover, CTAs |
| `muted-foreground` | `#5C4A38` | Texto secundario — 7.1:1 contraste sobre cream |

### Tipografía
- **Títulos:** Playfair Display — `display: "swap"` para eliminar CLS
- **Cuerpo:** Lato — `display: "swap"` para eliminar CLS

---

## Gestión de proyectos

Los proyectos se definen en `lib/projects.ts`. Para añadir uno nuevo:

1. Añadir la imagen en `public/projects/nombre-imagen.jpg`
2. Añadir la entrada en el array `projects`:

```ts
{
  slug: "nombre-del-proyecto",
  title: "Título visible",
  category: "Muebles a medida",     // o "Restauración" / "Carpintería estructural"
  description: "Descripción corta.",
  image: "/projects/nombre-imagen.jpg",
  featured: true,                    // true = aparece en el home
  materials: ["Material 1", "Material 2"],
}
```

---

## Arrancar en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Build de producción

```bash
npm run build
npm start
```
