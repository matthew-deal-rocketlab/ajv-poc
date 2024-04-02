import { z } from "zod";

// Reusable schemas for different fields
export const usernameSchema = z.string().min(1, "Username is required.");
export const emailSchema = z
  .string()
  .email("Please enter a valid email address.");
export const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters long.");

// Composite form schema
export const formSchema = z.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
});
