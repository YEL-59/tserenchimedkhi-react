import { z } from "zod";

export const signUpSchema = z.object({
  full_name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long"),
});
