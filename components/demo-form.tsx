"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoInquirySchema, type DemoInquiryInput } from "@/lib/schemas/demo-inquiry";
import {
  branchCountOptions,
  branchProcessOptions,
  demoTimeSlots,
} from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { DomConflictBoundary } from "@/components/dom-conflict-boundary";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const countries = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
  "United States",
  "United Kingdom",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-espresso/15 bg-white px-4 py-3 text-sm text-espresso placeholder:text-taupe/60 focus-visible:border-gold-deep";

// Opts text fields out of Grammarly's DOM injection. Belt-and-braces
// alongside keeping the form permanently mounted below (see the render
// return): browser extensions that inject nodes into editable fields
// are the common trigger for React's insertBefore/removeChild
// NotFoundError when a subtree containing them unmounts.
const noGrammarly = {
  "data-gramm": "false",
  "data-gramm_editor": "false",
  "data-enable-grammarly": "false",
} as const;
const labelClass = "text-sm font-medium text-espresso";
const errorClass = "mt-1.5 flex items-center gap-1.5 text-xs text-unsafe";

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [serverError, setServerError] = useState<string | null>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DemoInquiryInput>({
    resolver: zodResolver(demoInquirySchema),
  });

  const onSubmit = async (data: DemoInquiryInput) => {
    if (status === "submitting") return;
    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/demo-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  // Both blocks stay permanently mounted and are toggled with `hidden`
  // rather than one replacing the other via conditional return. Swapping
  // the whole form subtree in one commit is what makes this vulnerable to
  // browser extensions that inject nodes into form fields (Grammarly,
  // translators, password managers): when React then has to remove that
  // subtree in one go, it can throw a NotFoundError on insertBefore
  // because the live DOM no longer matches what React expects. Toggling
  // visibility never removes either subtree, so that failure mode can't
  // happen here.
  return (
    <DomConflictBoundary>
      <div
        hidden={status !== "success"}
        className="rounded-3xl border border-sage/30 bg-sage-pale/70 p-8 text-center sm:p-12"
      >
        <CheckCircle2 className="mx-auto size-10 text-sage" />
        <h3
          ref={successHeadingRef}
          tabIndex={-1}
          className="mt-5 font-serif text-2xl text-espresso outline-none"
        >
          Thank you for your interest in Bridal Rental OS.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-espresso/80">
          Your demo request has been received. Our team will follow up at the
          email address you provided to schedule your walkthrough.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Submit another request
        </Button>
      </div>

      <form
        hidden={status === "success"}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="rounded-3xl border border-espresso/10 bg-white p-6 sm:p-10"
      >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message} required>
          <input
            {...register("fullName")}
            {...noGrammarly}
            type="text"
            autoComplete="name"
            className={inputClass}
            aria-invalid={!!errors.fullName}
          />
        </Field>

        <Field label="Business or boutique name" error={errors.businessName?.message} required>
          <input
            {...register("businessName")}
            {...noGrammarly}
            type="text"
            autoComplete="organization"
            className={inputClass}
            aria-invalid={!!errors.businessName}
          />
        </Field>

        <Field label="Work email" error={errors.workEmail?.message} required>
          <input
            {...register("workEmail")}
            {...noGrammarly}
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={!!errors.workEmail}
          />
        </Field>

        <Field label="Phone number (with country code)" error={errors.phone?.message} required>
          <input
            {...register("phone")}
            {...noGrammarly}
            type="tel"
            placeholder="+971 50 123 4567"
            autoComplete="tel"
            className={inputClass}
            aria-invalid={!!errors.phone}
          />
        </Field>

        <Field label="Country" error={errors.country?.message} required>
          <select
            {...register("country")}
            defaultValue=""
            className={inputClass}
            aria-invalid={!!errors.country}
          >
            <option value="" disabled>
              Select country
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Number of boutique branches" error={errors.branchCount?.message} required>
          <select
            {...register("branchCount")}
            defaultValue=""
            className={inputClass}
            aria-invalid={!!errors.branchCount}
          >
            <option value="" disabled>
              Select branch count
            </option>
            {branchCountOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Current rental management process">
          <select {...register("currentProcess")} defaultValue="" className={inputClass}>
            <option value="">Prefer not to say</option>
            {branchProcessOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Preferred demo date">
          <input {...register("preferredDate")} type="date" className={inputClass} />
        </Field>

        <Field label="Preferred time" className="sm:col-span-2">
          <div className="flex flex-wrap gap-2">
            {demoTimeSlots.map((slot) => (
              <label
                key={slot}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-espresso/15 px-4 py-2 text-sm text-espresso/80 has-[:checked]:border-gold-deep has-[:checked]:bg-gold-pale has-[:checked]:text-espresso"
              >
                <input
                  {...register("preferredTime")}
                  type="radio"
                  value={slot}
                  className="sr-only"
                />
                {slot}
              </label>
            ))}
          </div>
        </Field>

        <Field label="What would you like to improve?" className="sm:col-span-2">
          <textarea
            {...register("improvementNotes")}
            {...noGrammarly}
            rows={3}
            placeholder="Tell us what's slowing your team down today."
            className={inputClass}
          />
        </Field>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-taupe">
        <input
          {...register("consent")}
          type="checkbox"
          className="mt-0.5 size-4 shrink-0 rounded border-espresso/30 text-gold-deep focus-visible:outline-gold-deep"
          aria-invalid={!!errors.consent}
        />
        <span>
          I agree to be contacted by Bridal Rental OS about scheduling this
          demo.
        </span>
      </label>
      {errors.consent && (
        <p className={errorClass}>
          <AlertCircle className="size-3.5" />
          {errors.consent.message}
        </p>
      )}

      {status === "error" && serverError && (
        <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-unsafe/30 bg-unsafe-pale/50 p-4 text-sm text-unsafe">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="mt-7 w-full sm:w-auto"
      >
          <span translate="no" className="notranslate inline-flex items-center gap-2">
            {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
            {status === "submitting" ? "Sending request…" : "Request My Free Demo"}
          </span>
        </Button>
      </form>
    </DomConflictBoundary>
  );
}

function Field({
  label,
  error,
  required,
  className,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label className={labelClass}>
        {label}
        {required && <span className="text-gold-deep"> *</span>}
        <div className="mt-1.5">{children}</div>
      </label>
      {error && (
        <p className={errorClass}>
          <AlertCircle className="size-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
