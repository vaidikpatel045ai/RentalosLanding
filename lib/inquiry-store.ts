import { mkdir, appendFile, readFile } from "node:fs/promises";
import path from "node:path";
import type { DemoInquiryInput, DemoInquiryRecord } from "@/lib/schemas/demo-inquiry";

// Placeholder storage for demo-request submissions: JSON lines in a
// git-ignored local file. Swap `persistInquiry` for a CRM/email/webhook
// integration (e.g. HubSpot, a Slack webhook, Resend) when one is
// available — readInquiries()'s callers (the /admin/inquiries page) only
// need an array of records back, so the storage can change without
// touching the UI.
const DIR = path.join(process.cwd(), ".data");
const FILE = path.join(DIR, "demo-inquiries.jsonl");

export async function persistInquiry(data: DemoInquiryInput): Promise<void> {
  const entry: DemoInquiryRecord = { ...data, submittedAt: new Date().toISOString() };
  await mkdir(DIR, { recursive: true });
  await appendFile(FILE, JSON.stringify(entry) + "\n", "utf8");
}

export async function readInquiries(): Promise<DemoInquiryRecord[]> {
  let raw: string;
  try {
    raw = await readFile(FILE, "utf8");
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }

  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line) as DemoInquiryRecord)
    .reverse(); // newest first
}
