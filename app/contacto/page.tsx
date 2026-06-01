import ContactForm from "./contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contacto | Artesanos Gutiérrez",
  description: "Ponte en contacto con nosotros para presupuestos y consultas.",
};

const info = [
  { icon: MapPin, label: "Dirección",  value: "Polígono Artesanal, Jaén" },
  { icon: Phone,  label: "Teléfono",   value: "+34 600 000 000" },
  { icon: Mail,   label: "Email",      value: "info@artesanosgutierrez.es" },
  { icon: Clock,  label: "Horario",    value: "Lun–Vie: 8:00 – 18:00" },
];

export default function ContactoPage() {
  return (
    <>
      {/* Cabecera */}
      <section className="bg-wood-dark py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">Hablemos</p>
          <h1 className="font-heading text-5xl font-bold text-cream mb-4">Contacto</h1>
          <p className="text-cream/75 text-lg max-w-xl">
            ¿Tienes un proyecto en mente? Cuéntanoslo y te preparamos un presupuesto sin compromiso.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Info de contacto */}
        <aside className="flex flex-col gap-8">
          <h2 className="font-heading text-xl font-semibold text-wood-dark">
            Información de contacto
          </h2>
          <ul className="flex flex-col gap-6">
            {info.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-wood-medium/10 rounded-sm shrink-0 mt-0.5">
                  <Icon className="text-wood-medium" size={16} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
                  <p className="text-wood-dark text-sm font-medium">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Formulario */}
        <div className="md:col-span-2">
          <h2 className="font-heading text-xl font-semibold text-wood-dark mb-6">
            Envíanos un mensaje
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
