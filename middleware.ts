import { NextResponse, type NextRequest } from "next/server";

/**
 * Forward the request path to server components so the root layout can
 * set <html lang> (en / ru) and LanguageAlternates can emit hreflang.
 */
export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|img|favicon.ico|rss|sitemap.xml|robots.txt).*)"],
};
