import { NextResponse } from "next/server";
import { demoInquirySchema } from "@/lib/schemas/demo-inquiry";
import { persistInquiry } from "@/lib/inquiry-store";
import { z } from "zod";

// Validated submissions are persisted so the success state on the
// marketing site is never shown without a real record behind it. See
// lib/inquiry-store.ts for where they're stored and how to view them
// (currently: the password-protected /admin/inquiries page).
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const result = demoInquirySchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed.", issues: z.treeifyError(result.error) },
      { status: 400 }
    );
  }

  try {
    await persistInquiry(result.data);
  } catch (err) {
    console.error("[demo-inquiry] failed to persist submission", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't save your request. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
