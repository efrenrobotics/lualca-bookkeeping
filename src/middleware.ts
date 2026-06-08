import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Detects the browser's preferred locale and redirects to /en or /es on first
// visit, then keeps the active locale in the URL prefix.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except API routes, Next internals, and static files.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
