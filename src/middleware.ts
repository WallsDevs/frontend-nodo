import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function decodeBase64Url(str: string) {
  // Base64url to JSON
  try {
    const b64 = str.replace(/-/g, "+").replace(/_/g, "/");
    try {
      // atob available in Edge runtime
      const json = decodeURIComponent(
        Array.prototype.map
          .call(
            atob(b64),
            (c: string) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
          )
          .join("")
      );
      return json;
    } catch (e) {
      // Fallback to Buffer (Node)
      // @ts-ignore
      return Buffer.from(b64, "base64").toString("utf8");
    }
  } catch (err) {
    return null;
  }
}

function parseJwt(token: string) {
  try {
    const parts = token.split(".");
    if (parts.length < 2) return null;
    const payload = parts[1];
    const decoded = decodeBase64Url(payload);
    if (!decoded) return null;
    return JSON.parse(decoded);
  } catch (e) {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip public assets and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // If user is already authenticated, prevent access to auth pages
  if (pathname === "/login" || pathname === "/registro") {
    const cookieToken = req.cookies.get("token")?.value;
    if (cookieToken) {
      // already logged in -> redirect to dashboard
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  // Only protect dashboard routes
  if (pathname.startsWith("/dashboard")) {
    const cookieToken = req.cookies.get("token")?.value;
    if (!cookieToken) {
      // No token: redirect to login
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // If admin route, check role in token payload
    if (pathname.startsWith("/dashboard/admin")) {
      const payload = parseJwt(cookieToken);
      const role = payload?.role || payload?.user?.role || payload?.role?.name;
      if (!role) {
        // If we can't determine role, deny access (redirect to dashboard home)
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      const roleName = typeof role === "string" ? role : role?.name;
      if (roleName !== "admin") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/registro"],
};
