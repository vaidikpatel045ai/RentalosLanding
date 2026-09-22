import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Next.js 16 renamed the `middleware` file convention to `proxy`
// (node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md).
//
// Single shared-password gate for the internal /admin area (the demo
// inquiry list). This is intentionally minimal, not a full auth system:
// the session cookie's value is the admin password itself, set httpOnly +
// secure + sameSite by the login route, and checked here with a plain
// comparison (fine for an internal lead list behind one password; don't
// reuse this pattern for anything more sensitive). Rotating
// ADMIN_PASSWORD invalidates every existing session automatically.
export const ADMIN_SESSION_COOKIE = "admin_session";

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const expected = process.env.ADMIN_PASSWORD;
  const session = req.cookies.get(ADMIN_SESSION_COOKIE)?.value;

  if (!expected || !session || session !== expected) {
    const loginUrl = new URL("/admin/login", req.nextUrl);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
