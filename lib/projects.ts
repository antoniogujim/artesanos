export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  featured: boolean;
  materials: string[];
}

export const projects: Project[] = [
  {
    slug: "mesa-comedor-roble",
    title: "Mesa de comedor en roble",
    category: "Muebles a medida",
    description: "Mesa maciza de roble natural para 4 comensales, con patas torneadas y acabado en aceite de tung.",
    image: "/projects/mesa-roble.jpg",
    featured: true,
    materials: ["Roble macizo", "Aceite de tung", "Clavijas de madera"],
  },
  {
    slug: "restauracion-armario-antiguo",
    title: "Restauración armario antiguo",
    category: "Restauración",
    description: "Armario ropero del siglo XIX recuperado con técnicas tradicionales respetando la madera original.",
    image: "/projects/armario-restaurado.jpg",
    featured: true,
    materials: ["Madera de nogal original", "Cera natural", "Herrajes de época"],
  },
  {
    slug: "techo-vigas-salon",
    title: "Techo de vigas en salón",
    category: "Carpintería estructural",
    description: "Estructura de vigas para salón de 40m², trabajadas a mano y tratadas con acabado cepillado.",
    image: "/projects/techo-vigas.jpg",
    featured: true,
    materials: ["Madera estructural", "Tornillería galvanizada", "Aceite protector"],
  },
  {
    slug: "silla-artesanal-nogal",
    title: "Silla artesanal en nogal",
    category: "Muebles a medida",
    description: "Silla de comedor tallada a mano en madera de nogal macizo, con asiento tapizado en cuero natural y acabado al aceite.",
    image: "/projects/silla-artesanal.jpg",
    featured: false,
    materials: ["Nogal macizo", "Cuero natural", "Aceite de linaza"],
  },
  {
    slug: "escritorio-roble-natural",
    title: "Escritorio en roble natural",
    category: "Muebles a medida",
    description: "Escritorio de trabajo con tablero macizo de roble, cajones laterales con guías silenciosas y patas cónicas torneadas a mano.",
    image: "/projects/escritorio.jpg",
    featured: false,
    materials: ["Roble macizo", "Guías de acero silencioso", "Barniz al agua"],
  },
  {
    slug: "taburete-madera-maciza",
    title: "Taburete de madera maciza",
    category: "Muebles a medida",
    description: "Taburete alto de pino silvestre con patas cruzadas y reposapiés, acabado en cera natural que resalta la veta de la madera.",
    image: "/projects/taburete.jpg",
    featured: false,
    materials: ["Pino silvestre", "Cera natural de abeja", "Espigas de madera"],
  },
  {
    slug: "comoda-cerezo-clasica",
    title: "Cómoda en cerezo",
    category: "Muebles a medida",
    description: "Cómoda de cuatro cajones en madera de cerezo con herrajes de latón envejecido y acabado a poro abierto.",
    image: "/projects/comoda.jpg",
    featured: false,
    materials: ["Cerezo macizo", "Herrajes de latón envejecido", "Aceite de tung"],
  },
  {
    slug: "puerta-exterior-pino",
    title: "Puerta exterior en pino",
    category: "Carpintería estructural",
    description: "Puerta de entrada exterior con tableros rehundidos, elaborada en pino macizo tratado contra la intemperie y acabado en barniz protector.",
    image: "/projects/puerta.jpg",
    featured: false,
    materials: ["Pino macizo tratado", "Barniz marino", "Herrajes de acero inoxidable"],
  },
];

export async function getAllProjects(): Promise<Project[]> {
  return projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug);
}
