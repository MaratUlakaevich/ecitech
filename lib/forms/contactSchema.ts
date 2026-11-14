/**
 * Shared contact-form Zod schema. Used by both the client component
 * (`components/ContactForm.tsx`) and the server handler
 * (`app/api/sendEmails/route.ts`). Keep the schema authoritative here — do not
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
  fullName: z
    .string()
    .min(2, 'Enter your name.')
    .max(120, 'Keep the name under 120 characters.'),
  email: z
    .string()
    .email('Enter an email address like name@company.com.')
    .max(200, 'Keep the email under 200 characters.'),
  company: z.string().max(120, 'Keep the company name under 120 characters.').optional().or(z.literal('')),
  phone: z.string().max(40, 'Keep the phone number under 40 characters.').optional().or(z.literal('')),
  message: z
    .string()
    .min(10, 'Add a sentence or two about the project (10 characters minimum).')
    .max(5000, 'Keep the message under 5,000 characters.'),
  industry: z.enum(INDUSTRY_OPTIONS).optional(),
  nda: z.boolean().optional(),
  turnstileToken: z.string().min(10, 'Complete the security check above the button.').max(2048),
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
