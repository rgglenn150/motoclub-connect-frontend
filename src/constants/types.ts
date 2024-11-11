// types.ts
import { z } from "zod";

// Define Zod schema
export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

// Define TypeScript type based on the Zod schema
export type LoginFormData = z.infer<typeof loginSchema>;
