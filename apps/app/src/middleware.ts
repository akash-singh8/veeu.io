import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher("/auth");
const isPublicApiRoute = createRouteMatcher(["/api/check"]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicApiRoute(req)) {
    const origin = req.headers.get("origin") || "";
    const allowedOrigins = ["http://localhost:3000", "https://veeu.io"];
    const isAllowedOrigin = allowedOrigins.includes(origin);
    const response = NextResponse.next();

    if (isAllowedOrigin) {
      response.headers.set("Access-Control-Allow-Origin", origin);
    }
    return response;
  }

  const { userId } = await auth();

  // if user is logged and trying to access auth, redirect them to dashboard
  if (userId && isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/auth?mode=sign-in", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
