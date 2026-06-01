"use server";

import type { ContactState } from "./types";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return /^[+]?[\d\s\-()]{9,15}$/.test(phone);
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nombre   = (formData.get("nombre")   as string)?.trim();
  const email    = (formData.get("email")    as string)?.trim();
  const telefono = (formData.get("telefono") as string)?.trim();
  const mensaje  = (formData.get("mensaje")  as string)?.trim();

  const errors: ContactState["errors"] = {};

  if (!nombre || nombre.length < 2) {
    errors.nombre = "El nombre debe tener al menos 2 caracteres.";
  }

  if (!email) {
    errors.email = "El email es obligatorio.";
  } else if (!validateEmail(email)) {
    errors.email = "Introduce un email válido.";
  }

  if (telefono && !validatePhone(telefono)) {
    errors.telefono = "Introduce un teléfono válido.";
  }

  if (!mensaje || mensaje.length < 10) {
    errors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  return {
    status: "success",
    errors: {},
    message: `Gracias, ${nombre}. Hemos recibido tu mensaje y te contactaremos en breve.`,
  };
}
