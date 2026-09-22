"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ModulePreview } from "@/components/mocks/module-preview";
import { tourTabs } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Smartphone } from "lucide-react";

const ids = ["inventory", "bookings", "tailoring", "cleaning", "delivery", "reports"];
const tabs = ids
  .map((id) => tourTabs.find((t) => t.id === id))
  .filter((t): t is NonNullable<typeof t> => Boolean(t));

export function ProductIntro() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="bg-espresso py-24 text-ivory" id="platform">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow tone="light">One Connected Platform</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
            Your entire rental operation. One place.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-taupe-light">
            Bridal Rental OS connects the people, garments, bookings, and
            workflows that keep your boutique running.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-b border-ivory/15 pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === tab.id
                  ? "bg-gold text-espresso"
                  : "text-taupe-light hover:text-ivory"
              )}
              aria-pressed={active === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ModulePreview
            headline={current.headline}
            capabilities={current.capabilities}
            dark
          />

          <div className="flex justify-center lg:justify-end">
            <div className="flex w-full max-w-[220px] flex-col gap-3 rounded-[2rem] border border-ivory/15 bg-ivory/[0.03] p-4">
              <div className="flex items-center gap-2 text-xs text-taupe-light">
                <Smartphone className="size-3.5" />
                Mobile task view
              </div>
              <p className="font-serif text-base text-ivory">{current.label}</p>
              <div className="space-y-2">
                {current.capabilities.slice(0, 3).map((c) => (
                  <div
                    key={c}
                    className="rounded-lg border border-ivory/10 bg-ivory/[0.04] px-3 py-2 text-[11px] leading-snug text-taupe-light"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
