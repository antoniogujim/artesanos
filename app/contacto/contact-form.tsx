"use client";

import { useState, useActionState } from "react";
import { submitContact } from "./actions";
import { initialState } from "./types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle } from "lucide-react";

function FormContent({ onReset }: { onReset: () => void }) {
  const [state, action, pending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle className="text-gold" size={48} />
        <h2 className="font-heading text-2xl font-semibold text-wood-dark">
          Mensaje enviado
        </h2>
        <p className="text-muted-foreground max-w-md mb-4">{state.message}</p>
        <Button
          onClick={onReset}
          variant="outline"
          className="border-wood-medium text-wood-medium hover:bg-wood-medium hover:text-cream rounded-none"
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-6">

      {state.status === "error" && Object.keys(state.errors ?? {}).length > 0 && (
        <div className="flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-3 rounded-sm text-sm">
          <AlertCircle size={16} />
          Revisa los campos marcados en rojo.
        </div>
      )}

      <div className="flex flex-col gap-2">
        <Label htmlFor="nombre" className="text-wood-dark font-medium">
          Nombre <span className="text-destructive">*</span>
        </Label>
        <Input
          id="nombre"
          name="nombre"
          placeholder="Tu nombre completo"
          className={`rounded-none border-wood-light/50 focus-visible:ring-gold ${
            state.errors?.nombre ? "border-destructive" : ""
          }`}
        />
        {state.errors?.nombre && (
          <p className="text-destructive text-xs">{state.errors?.nombre}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-wood-dark font-medium">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          className={`rounded-none border-wood-light/50 focus-visible:ring-gold ${
            state.errors?.email ? "border-destructive" : ""
          }`}
        />
        {state.errors?.email && (
          <p className="text-destructive text-xs">{state.errors?.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="telefono" className="text-wood-dark font-medium">
          Teléfono <span className="text-muted-foreground text-xs font-normal">(opcional)</span>
        </Label>
        <Input
          id="telefono"
          name="telefono"
          type="tel"
          placeholder="+34 600 000 000"
          className={`rounded-none border-wood-light/50 focus-visible:ring-gold ${
            state.errors?.telefono ? "border-destructive" : ""
          }`}
        />
        {state.errors?.telefono && (
          <p className="text-destructive text-xs">{state.errors?.telefono}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="mensaje" className="text-wood-dark font-medium">
          Mensaje <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          placeholder="Cuéntanos tu proyecto o consulta..."
          rows={5}
          className={`rounded-none border-wood-light/50 focus-visible:ring-gold resize-none ${
            state.errors?.mensaje ? "border-destructive" : ""
          }`}
        />
        {state.errors?.mensaje && (
          <p className="text-destructive text-xs">{state.errors?.mensaje}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={pending}
        className="self-start bg-wood-medium hover:bg-wood-dark text-cream rounded-none px-8 disabled:opacity-60"
      >
        {pending ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}

export default function ContactForm() {
  const [formKey, setFormKey] = useState(0);

  return <FormContent key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
}
