import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureSplit({
  id,
  eyebrow,
  headline,
  copy,
  features,
  mock,
  reverse = false,
  tint = false,
  note,
}: {
  id?: string;
  eyebrow: string;
  headline: string;
  copy: string;
  features: string[];
  mock: React.ReactNode;
  reverse?: boolean;
  tint?: boolean;
  note?: string;
}) {
  return (
    <section id={id} className={cn("py-20", tint && "bg-cream/60")}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-14 lg:grid-cols-2",
            reverse && "lg:[&>*:first-child]:order-2"
          )}
        >
          <div className="max-w-xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl text-espresso sm:text-[2.75rem]">
              {headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-taupe">{copy}</p>
            <ul className="mt-8 space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-pale text-gold-deep">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-espresso/85">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            {note && (
              <p className="mt-6 text-sm leading-relaxed text-taupe">{note}</p>
            )}
          </div>
          <div>{mock}</div>
        </div>
      </Container>
    </section>
  );
}
