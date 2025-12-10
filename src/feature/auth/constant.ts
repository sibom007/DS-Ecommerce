export const ROLES = {
  ADMIN: "admin",
  MANAGER: "manager",
  CUSTOMER: "customer",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

// lib/role-routes.ts
export const roleRequiredRoutes = [
  {
    matcher: "/dashboard/admin",
    requiredRole: "admin",
  },
  {
    matcher: "/dashboard/manager",
    requiredRole: "manager",
  },
  {
    matcher: "/dashboard/customer",
    requiredRole: "customer",
  },
];
