import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const VerifySchema = z.object({
  code: z.string().min(4, "Code is too short"),
  backup: z.boolean(),
});

export interface ApiError {
  errors?: {
    message?: string;
  }[];
}
