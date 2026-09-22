"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { DomConflictBoundary } from "@/components/dom-conflict-boundary";
import { AlertCircle, Loader2, Lock } from "lucide-react";

function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin/inquiries";

  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Incorrect password.");
      }
      // Full navigation so the proxy re-checks the freshly set cookie.
      window.location.href = callbackUrl;
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <DomConflictBoundary>
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-10 max-w-sm rounded-3xl border border-espresso/10 bg-white p-8"
    >
      <div className="flex items-center gap-2 text-taupe">
        <Lock className="size-4" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
          Admin
        </span>
      </div>
      <label className="mt-5 block text-sm font-medium text-espresso">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          autoComplete="current-password"
          className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-white px-4 py-3 text-sm text-espresso focus-visible:border-gold-deep"
        />
      </label>

      {status === "error" && error && (
        <div className="mt-4 flex items-start gap-2 rounded-xl border border-unsafe/30 bg-unsafe-pale/50 p-3 text-sm text-unsafe">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "submitting" || !password}
        className="mt-6 w-full"
      >
        <span translate="no" className="notranslate inline-flex items-center gap-2">
          {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
          {status === "submitting" ? "Signing in…" : "Sign in"}
        </span>
      </Button>
    </form>
    </DomConflictBoundary>
  );
}

export default function AdminLoginPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </Container>
    </section>
  );
}
