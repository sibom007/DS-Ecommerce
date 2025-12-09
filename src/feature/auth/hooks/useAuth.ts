"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export function useAuth() {
  const user = useQuery(api.auth.getLoggedInUser);

  const isLoading = user === undefined;
  const isAuthenticated = !!user;
  const isError = false; // useQuery never errors

  return {
    user,
    isLoading,
    isAuthenticated,
    isError,
  };
}
