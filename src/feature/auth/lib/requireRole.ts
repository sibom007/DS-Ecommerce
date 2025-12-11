import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";
import { Role } from "../constant";

type AllowedRoles = Role | Role[];

/**
 * Checks user authentication + role authorization dynamically.
 * Redirects if user does not have the required role.
 */
export async function requireRole(allowed: AllowedRoles) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/"); // Not logged in
  }

  const role = await fetchQuery(api.auth.getUserRole, { clerkId: userId });

  const allowedList = Array.isArray(allowed) ? allowed : [allowed];

  // If role NOT in allowed → redirect to their own dashboard
  if (!allowedList.includes(role!)) {
    redirect(`/dashboard/${role}`);
  }

  return role;
}
