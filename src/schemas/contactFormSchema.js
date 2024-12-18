// src/schemas/contactFormSchema.js
import { z } from "zod";

export const contactFormSchema = z.object({
  nom: z.string().min(5, "Le nom est requis avec 5 caractères au moins ."), // Required and not empty
  prenom: z.string().min(5, "Le prénom est requis."), // Required and not empty
  email: z.string().email("L'email n'est pas valide."), // Must be a valid email
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères."), // Minimum 10 characters
});
