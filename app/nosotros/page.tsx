import { Award, Leaf, Heart, Users } from "lucide-react";

export const metadata = {
  title: "Sobre Nosotros | Artesanos Carpintería",
  description: "Conoce nuestra historia, valores y el equipo detrás de cada pieza.",
};

const values = [
  {
    icon: Award,
    title: "Excelencia artesanal",
    description:
      "Cada pieza pasa por un control de calidad exhaustivo antes de salir del taller. No entregamos nada que no firmaríamos con orgullo.",
  },
  {
    icon: Leaf,
    title: "Madera responsable",
    description:
      "Trabajamos exclusivamente con maderas certificadas de bosques gestionados de forma sostenible. El respeto al medio ambiente es parte de nuestro oficio.",
  },
  {
    icon: Heart,
    title: "Hecho con pasión",
    description:
      "La carpintería no es solo un trabajo, es una vocación. Cada ensamble, cada lijado y cada acabado se realiza con la misma dedicación de siempre.",
  },
  {
    icon: Users,
    title: "Trato personal",
    description:
      "Escuchamos a cada cliente, entendemos su espacio y sus necesidades. El resultado es siempre una pieza única, pensada para ellos.",
  },
];

const team = [
  {
    name: "Antonio Gutiérrez",
    role: "Maestro carpintero y fundador",
    bio: "Con más de 35 años de oficio, Antonio aprendió el arte de la madera de su padre en un taller de Castilla. Es el alma del obrador y el garante de que cada pieza salga perfecta.",
    initials: "AG",
  },
  {
    name: "Lucía Gutiérrez",
    role: "Diseño y atención al cliente",
    bio: "Hija de Antonio, estudió diseño de interiores en Madrid y volvió al taller para modernizar el proceso creativo sin perder la esencia artesanal. Es quien da forma a los proyectos a medida.",
    initials: "LG",
  },
  {
    name: "Tomás Vidal",
    role: "Oficial carpintero",
    bio: "Tomás lleva 12 años en el taller. Especializado en restauración, tiene un ojo especial para detectar la estructura original de las piezas antiguas y devolverles la vida.",
    initials: "TV",
  },
];

const stats = [
  { value: "1988", label: "Año de fundación" },
  { value: "+400", label: "Proyectos completados" },
  { value: "35+", label: "Años de experiencia" },
  { value: "3ª", label: "Generación de artesanos" },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Cabecera */}
      <section className="bg-wood-dark py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Quiénes somos</p>
          <h1 className="font-heading text-5xl font-bold text-cream mb-6 leading-tight">
            Tres generaciones trabajando la madera
          </h1>
          <p className="text-cream/75 text-lg leading-relaxed max-w-2xl">
            Somos un taller familiar fundado en 1988 en Jaén. Lo que empezó como el sueño de un carpintero es hoy un obrador con más de treinta y cinco años de historia, donde cada pieza sigue haciéndose a mano, con los mismos valores de siempre.
          </p>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-gold py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-heading text-4xl font-bold text-wood-dark">{value}</p>
              <p className="text-wood-dark/70 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Historia */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Nuestra historia</p>
            <h2 className="font-heading text-3xl font-bold text-wood-dark mb-6">
              Del pequeño taller al obrador de referencia
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Antonio Gutiérrez abrió las puertas de este taller en 1988 con poco más que un banco de trabajo, un juego de formones heredados de su padre y la certeza de que la madera bien trabajada no pasa de moda.
              </p>
              <p>
                Durante los años noventa, el taller creció gracias al boca a boca. La honestidad en los presupuestos y la calidad de los acabados eran —y siguen siendo— nuestra mejor publicidad.
              </p>
              <p>
                Hoy, con Lucía incorporada al equipo, hemos sumado diseño contemporáneo a la tradición artesanal. Hacemos muebles que duran generaciones y lo hacemos con el orgullo de quien sabe que está dejando algo bueno en el mundo.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-6 border-l-2 border-wood-light/40 pl-8">
            {[
              { year: "1988", text: "Antonio abre el taller en el casco antiguo de Jaén." },
              { year: "1995", text: "Primer encargo institucional: restauración del mobiliario de la Biblioteca Municipal." },
              { year: "2008", text: "El taller se traslada a unas instalaciones más grandes en el polígono artesanal." },
              { year: "2017", text: "Lucía se incorpora al negocio familiar aportando diseño y nuevos materiales." },
              { year: "2023", text: "Superamos los 400 proyectos completados manteniendo el equipo artesanal." },
            ].map(({ year, text }) => (
              <div key={year} className="relative">
                <span className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full bg-gold border-2 border-cream" />
                <p className="font-heading text-wood-medium font-semibold">{year}</p>
                <p className="text-muted-foreground text-sm mt-0.5">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-sand py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Lo que nos mueve</p>
            <h2 className="font-heading text-3xl font-bold text-wood-dark">Nuestros valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-wood-medium/10 rounded-sm">
                  <Icon className="text-wood-medium" size={20} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-wood-dark">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Las personas</p>
            <h2 className="font-heading text-3xl font-bold text-wood-dark">El equipo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map(({ name, role, bio, initials }) => (
              <div key={name} className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 rounded-full bg-wood-medium flex items-center justify-center">
                  <span className="font-heading text-2xl font-bold text-cream">{initials}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-wood-dark">{name}</h3>
                  <p className="text-gold text-sm">{role}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
