import { NextRequest, NextResponse } from "next/server";

// Rutas protegidas — redirigen al inicio si no hay sesión activa
const PROTECTED_ROUTES = ["/admin"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  // ── Control de acceso ──────────────────────────────────────────────────────
  const isProtected = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected) {
    // Cuando implementes autenticación, comprueba aquí la sesión.
    // Por ahora redirige al inicio para demostrar el patrón.
    const token = request.cookies.get("session")?.value;

    if (!token) {
      const loginUrl = new URL("/", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // ── Cabeceras de seguridad ─────────────────────────────────────────────────

  // Evita que la web se incruste en iframes de otros dominios (clickjacking)
  response.headers.set("X-Frame-Options", "DENY");

  // Impide que el navegador adivine el tipo MIME del contenido
  response.headers.set("X-Content-Type-Options", "nosniff");

  // Política de referrer: solo envía el origen en peticiones cross-origin
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Fuerza HTTPS durante 1 año en producción
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );

  // Restringe el acceso a APIs del navegador que no se necesitan
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  // CSP estricta solo en producción — en dev Next.js necesita WebSockets y eval para HMR
  const isDev = process.env.NODE_ENV === "development";

  if (!isDev) {
    response.headers.set(
      "Content-Security-Policy",
      [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: blob:",
        "connect-src 'self'",
        "frame-ancestors 'none'",
      ].join("; ")
    );
  }

  return response;
}

export const config = {
  matcher: [
    // Aplica a todas las rutas excepto archivos estáticos e internos de Next.js
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
