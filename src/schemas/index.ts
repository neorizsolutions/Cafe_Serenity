import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit Indian phone number.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  company: z.string().optional(),
});

export const SubscriptionSchema = z.object({
  planId: z.string().min(1, { message: 'Please select a subscription plan.' }),
  category: z.enum(['veg', 'non-veg'], { message: 'Please select your diet preference.' }),
  duration: z.enum(['weekly', 'monthly'], { message: 'Please select your subscription length.' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit phone number.' }),
  address: z.string().min(10, { message: 'Please enter a complete delivery address.' }),
  timeSlot: z.enum(['lunch', 'dinner', 'both'], { message: 'Please pick a preferred delivery slot.' }),
});

export const CalculatorInputSchema = z.object({
  age: z.number().min(18).max(80),
  gender: z.enum(['male', 'female']),
  weight: z.number().min(40).max(150),
  height: z.number().min(120).max(220),
  activityLevel: z.enum(['sedentary', 'lightly-active', 'moderately-active', 'very-active']),
  goal: z.enum(['weight-loss', 'maintenance', 'muscle-gain', 'diabetic-control']),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
export type SubscriptionFormData = z.infer<typeof SubscriptionSchema>;
export type CalculatorFormData = z.infer<typeof CalculatorInputSchema>;
