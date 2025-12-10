import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { fetchQuery } from "convex/nextjs";
import { api } from "../convex/_generated/api";
import { roleRequiredRoutes } from "./feature/auth/constant";
import { urlMatch } from "./feature/auth/lib/urlMatch";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/orders",
  "/checkout",
]);

const isPublicRoute = createRouteMatcher(["/sign-in", "/sign-up"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  // PUBLIC ROUTES — logged-in users should not see sign-in/sign-up
  if (isPublicRoute(req)) {
    if (userId) return NextResponse.redirect(new URL("/", req.url));
    return NextResponse.next();
  }

  // AUTH-PROTECTED ROUTES
  if (isProtectedRoute(req) && !userId) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  // ROLE PROTECTION
  if (userId) {
    // get role from Convex
    const UserRole = await fetchQuery(api.auth.getUserRole, {
      clerkId: userId,
    });

    // check if this route requires a specific role
    for (const role of roleRequiredRoutes) {
      if (urlMatch(req, role.matcher)) {
        if (UserRole !== role.requiredRole) {
          return NextResponse.redirect(
            new URL(`/dashboard/${UserRole}`, req.url)
          );
        }
      }
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|auth|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
