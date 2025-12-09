"use client";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useEffect } from "react";

export default function SyncUser() {
  const { user } = useUser();
  const createUser = useMutation(api.auth.createUserIfNotExists);

  useEffect(() => {
    if (!user) return;

    createUser({
      userId: user.id,
      email: user.primaryEmailAddress?.emailAddress ?? "",
      username: user.username ?? user.fullName ?? "",
      imageUrl: user.imageUrl,
    });
  }, [createUser, user]);

  return null;
}
