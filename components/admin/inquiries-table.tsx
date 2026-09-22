"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Download, LogOut } from "lucide-react";
import type { DemoInquiryRecord } from "@/lib/schemas/demo-inquiry";
import { Button } from "@/components/ui/button";

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function toCsv(records: DemoInquiryRecord[]) {
  const headers = [
    "Submitted",
    "Full name",
    "Business",
    "Work email",
    "Phone",
    "Country",
    "Branches",
    "Current process",
    "Preferred date",
    "Preferred time",
    "Notes",
  ];
  const escape = (value: string) => `"${value.replace(/"/g, '""')}"`;
  const rows = records.map((r) =>
    [
      r.submittedAt,
      r.fullName,
      r.businessName,
      r.workEmail,
      r.phone,
      r.country,
      r.branchCount,
      r.currentProcess || "",
      r.preferredDate || "",
      r.preferredTime || "",
      (r.improvementNotes || "").replace(/\n/g, " "),
    ]
      .map((v) => escape(String(v)))
      .join(",")
  );
  return "﻿" + [headers.map(escape).join(","), ...rows].join("\r\n");
}

function downloadCsv(records: DemoInquiryRecord[]) {
  const blob = new Blob([toCsv(records)], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `demo-inquiries-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function InquiriesTable({ records }: { records: DemoInquiryRecord[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [loggingOut, setLoggingOut] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return records;
    return records.filter((r) =>
      [r.fullName, r.businessName, r.workEmail, r.country, r.phone]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [records, query]);

  const logout = async () => {
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-espresso">Demo Inquiries</h1>
          <p className="mt-1 text-sm text-taupe">
            {records.length} total {records.length === 1 ? "request" : "requests"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="md"
            onClick={() => downloadCsv(filtered)}
            disabled={filtered.length === 0}
          >
            <Download className="size-4" />
            Export CSV
          </Button>
          <Button variant="secondary" size="md" onClick={logout} disabled={loggingOut}>
            <LogOut className="size-4" />
            Log out
          </Button>
        </div>
      </div>

      <div className="relative mt-8 max-w-sm">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-taupe" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, business, email, country…"
          aria-label="Search inquiries"
          className="w-full rounded-full border border-espresso/15 bg-white py-2.5 pl-11 pr-4 text-sm text-espresso placeholder:text-taupe/70 focus-visible:border-gold-deep"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-taupe">
          {records.length === 0
            ? "No demo requests yet. They'll appear here as soon as someone submits the form."
            : `No inquiries match “${query}”.`}
        </p>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-espresso/10">
          <table className="w-full min-w-[960px] text-left text-sm">
            <thead>
              <tr className="border-b border-espresso/10 bg-cream/60 text-xs uppercase tracking-wide text-taupe">
                <th className="px-4 py-3 font-medium">Submitted</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Business</th>
                <th className="px-4 py-3 font-medium">Contact</th>
                <th className="px-4 py-3 font-medium">Country</th>
                <th className="px-4 py-3 font-medium">Branches</th>
                <th className="px-4 py-3 font-medium">Current process</th>
                <th className="px-4 py-3 font-medium">Preferred</th>
                <th className="px-4 py-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr
                  key={`${r.workEmail}-${r.submittedAt}-${i}`}
                  className="border-b border-espresso/10 last:border-0 even:bg-cream/20"
                >
                  <td className="whitespace-nowrap px-4 py-3 text-taupe">
                    {formatDate(r.submittedAt)}
                  </td>
                  <td className="px-4 py-3 font-medium text-espresso">{r.fullName}</td>
                  <td className="px-4 py-3 text-espresso/90">{r.businessName}</td>
                  <td className="px-4 py-3 text-espresso/90">
                    <div>{r.workEmail}</div>
                    <div className="text-xs text-taupe">{r.phone}</div>
                  </td>
                  <td className="px-4 py-3 text-espresso/90">{r.country}</td>
                  <td className="px-4 py-3 text-espresso/90">{r.branchCount}</td>
                  <td className="px-4 py-3 text-espresso/90">{r.currentProcess || "—"}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-espresso/90">
                    {r.preferredDate || "—"}
                    {r.preferredTime ? ` · ${r.preferredTime}` : ""}
                  </td>
                  <td className="max-w-[220px] px-4 py-3 text-espresso/80">
                    {r.improvementNotes || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
