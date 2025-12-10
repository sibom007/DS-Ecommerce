// convex/schema.ts

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ============================
  // USERS
  // ============================
  users: defineTable({
    clerkUserId: v.string(),
    username: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    role: v.union(
      v.literal("customer"),
      v.literal("admin"),
      v.literal("manager")
    ),
    createdAt: v.number(),
    imageUrl: v.optional(v.string()),
  })
    .index("by_clerk_id", ["clerkUserId"])
    .index("by_email", ["email"])
    .index("by_clerk_id_email", ["clerkUserId", "email"]),

  // ============================
  // CATEGORIES
  // ============================
  categories: defineTable({
    name: v.string(),
    slug: v.string(),
    icon: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_slug", ["slug"]),

  // ============================
  // PRODUCTS
  // ============================
  products: defineTable({
    name: v.string(),
    slug: v.string(),
    categoryId: v.id("categories"),
    description: v.optional(v.string()),
    price: v.number(),
    unit: v.string(), // "kg", "packet", "piece"
    imageUrl: v.optional(v.string()),
    isActive: v.boolean(),
    stock: v.number(), // if you want simple inventory
    createdAt: v.number(),
  })
    .index("by_category", ["categoryId"])
    .index("by_slug", ["slug"]),

  // ============================
  // CARTS
  // ============================
  carts: defineTable({
    userId: v.id("users"),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_user", ["userId"]),

  // ============================
  // CART ITEMS
  // ============================
  cartItems: defineTable({
    cartId: v.id("carts"),
    productId: v.id("products"),
    quantity: v.number(),
    price: v.number(), // snapshot of price
  })
    .index("by_cart", ["cartId"])
    .index("by_product", ["productId"]),

  // ============================
  // ADDRESSES
  // ============================
  addresses: defineTable({
    userId: v.id("users"),
    fullName: v.string(),
    phone: v.string(),
    zoneId: v.id("deliveryZones"),
    street: v.string(),
    details: v.string(),
    isDefault: v.boolean(),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),

  // ============================
  // DELIVERY ZONES
  // ============================
  deliveryZones: defineTable({
    name: v.string(), // e.g., "Patuakhali Sadar"
    deliveryFee: v.number(), // BDT
    isActive: v.boolean(),
  }),

  // ============================
  // ORDERS
  // ============================
  orders: defineTable({
    userId: v.id("users"),
    addressId: v.id("addresses"),
    zoneId: v.id("deliveryZones"),

    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("out_for_delivery"),
      v.literal("delivered"),
      v.literal("cancelled")
    ),

    subtotal: v.number(),
    deliveryFee: v.number(),
    total: v.number(),

    paymentMethod: v.union(
      v.literal("cash_on_delivery"),
      v.literal("bkash"),
      v.literal("nagad")
    ),

    paymentStatus: v.union(v.literal("unpaid"), v.literal("paid")),

    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_status", ["status"]),

  // ============================
  // ORDER ITEMS
  // ============================
  orderItems: defineTable({
    orderId: v.id("orders"),
    productId: v.id("products"),

    name: v.string(), // snapshot
    price: v.number(), // snapshot
    unit: v.string(), // snapshot
    quantity: v.number(),
  }).index("by_order", ["orderId"]),

  // ============================
  // PAYMENTS (optional)
  // ============================
  payments: defineTable({
    orderId: v.id("orders"),
    method: v.string(), // "bkash" | "nagad"
    amount: v.number(),

    status: v.union(
      v.literal("pending"),
      v.literal("success"),
      v.literal("failed")
    ),

    transactionId: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_order", ["orderId"]),
});
