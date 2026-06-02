/**
 * Shared contact-form Zod schema. Used by both the client component
 * (`components/ContactForm.tsx`) and the server handler
 * (`api/sendEmails.ts`). Keep the schema authoritative here — do not
 * duplicate field constraints elsewhere.
 */

import { z } from 'zod';

export const INDUSTRY_OPTIONS = [
  'fintech',
  'medtech',
  'edtech',
  'hospitality',
  'enterprise',
  'other',
] as const;

export type Industry = (typeof INDUSTRY_OPTIONS)[number];

export const contactSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(200),
  company: z.string().max(120).optional().or(z.literal('')),
  phone: z.string().max(40).optional().or(z.literal('')),
  message: z.string().min(10).max(5000),
  industry: z.enum(INDUSTRY_OPTIONS).optional(),
  nda: z.boolean().optional(),
  turnstileToken: z.string().min(10).max(2048),
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * Dev-mode variant where turnstileToken is optional. Server handler and
 * client form both select this schema when the Turnstile site/secret key
 * env var is missing, so local development does not require a Turnstile
 * account.
 */
export const contactSchemaDev = contactSchema.extend({
  turnstileToken: z.string().max(2048).optional().or(z.literal('')),
});

export type ContactInputDev = z.infer<typeof contactSchemaDev>;
