import { z } from "zod";
import { branchCountOptions, branchProcessOptions, demoTimeSlots } from "@/lib/site-data";

export const demoInquirySchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  businessName: z.string().trim().min(2, "Enter your business or boutique name."),
  workEmail: z.string().trim().email("Enter a valid work email."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a phone number with country code.")
    .regex(/^[+()0-9\s-]+$/, "Use digits, spaces, +, - and () only."),
  country: z.string().trim().min(2, "Enter your country."),
  branchCount: z.enum(branchCountOptions as [string, ...string[]], {
    message: "Select the number of branches.",
  }),
  currentProcess: z
    .enum(branchProcessOptions as [string, ...string[]])
    .optional()
    .or(z.literal("")),
  improvementNotes: z.string().trim().max(1000).optional().or(z.literal("")),
  preferredDate: z.string().trim().optional().or(z.literal("")),
  preferredTime: z
    .enum(demoTimeSlots as [string, ...string[]])
    .nullish()
    .or(z.literal("")),
  consent: z.literal(true, {
    message: "Please confirm you're happy to be contacted about the demo.",
  }),
});

export type DemoInquiryInput = z.infer<typeof demoInquirySchema>;

export type DemoInquiryRecord = DemoInquiryInput & { submittedAt: string };
