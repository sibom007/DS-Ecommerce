// convex/users.ts
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createUserIfNotExists = mutation({
  args: {
    userId: v.string(), // Clerk user.id
    email: v.string(),
    username: v.string(),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, { userId, email, username, imageUrl }) => {
    // Check if user already exists
    const existing = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkUserId"), userId))
      .first();

    if (existing) return existing;

    // Insert new user
    return await ctx.db.insert("users", {
      clerkUserId: userId,
      email,
      username,
      imageUrl,
      createdAt: Date.now(),
      role: "customer",
    });
  },
});

export const getLoggedInUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    // Clerk user id
    const clerkUserId = identity.subject;

    // Direct indexed lookup (fastest possible in Convex)
    return ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkUserId", clerkUserId))
      .unique();
  },
});
