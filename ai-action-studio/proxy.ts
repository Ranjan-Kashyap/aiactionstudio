import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const NEW_HOST = "aiactionstudio.com";
const LEGACY_HOSTS = new Set(["aiwealthbase.com", "www.aiwealthbase.com"]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";

  if (LEGACY_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.host = host.startsWith("www.") ? `www.${NEW_HOST}` : NEW_HOST;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
