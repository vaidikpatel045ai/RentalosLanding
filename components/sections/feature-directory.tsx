"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { featureDirectory } from "@/lib/site-data";
import { Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureDirectory() {
  const [query, setQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    () => new Set(featureDirectory.map((c) => c.id))
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return featureDirectory;
    return featureDirectory
      .map((cat) => ({
        ...cat,
        features: cat.features.filter((f) => f.toLowerCase().includes(q)),
      }))
      .filter(
        (cat) => cat.features.length > 0 || cat.title.toLowerCase().includes(q)
      );
  }, [query]);

  const toggle = (id: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="bg-cream/60 py-24" id="feature-directory">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Full Feature Directory</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl text-espresso sm:text-5xl">
            Everything your rental operation needs, clearly connected.
          </h2>
        </div>

        <div className="relative mt-10 max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-taupe" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search features, e.g. “QR code” or “deposit”"
            aria-label="Search features"
            className="w-full rounded-full border border-espresso/15 bg-ivory py-3 pl-11 pr-4 text-sm text-espresso placeholder:text-taupe/70 focus-visible:border-gold-deep"
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {filtered.map((cat) => {
            const isOpen = query.trim() ? true : openCategories.has(cat.id);
            return (
              <div
                key={cat.id}
                id={`fd-${cat.id}`}
                className="h-fit rounded-2xl border border-espresso/10 bg-ivory"
              >
                <button
                  onClick={() => toggle(cat.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-serif text-lg text-espresso">
                    {cat.title}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 text-taupe transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <ul className="space-y-2.5 px-6 pb-6">
                    {cat.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-taupe"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-gold-deep" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-sm text-taupe">
            No features match &ldquo;{query}&rdquo;. Try a different search
            term, or book a free demo and ask us directly.
          </p>
        )}

        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="/book-demo">See the Platform in Action</Button>
          <Button href="#product-tour" variant="secondary">
            Explore All Features
          </Button>
        </div>
      </Container>
    </section>
  );
}
