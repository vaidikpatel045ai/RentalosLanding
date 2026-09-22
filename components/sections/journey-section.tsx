import { Container } from "@/components/ui/container";
import { journeySteps } from "@/lib/site-data";

export function JourneySection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl text-espresso sm:text-5xl">
            From reservation to ready-for-rental.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-taupe">
            A garment&apos;s journey through Bridal Rental OS, from the moment
            it&apos;s reserved to the moment it&apos;s ready again. The actual
            sequence and applicable stages depend on the garment&apos;s
            operational status.
          </p>
        </div>

        <ol className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-7 lg:gap-y-0">
          {journeySteps.map((s, i) => (
            <li key={s.step} className="relative pl-0">
              <div className="flex items-center gap-3 lg:block">
                <span className="font-serif text-3xl text-gold/50">{s.step}</span>
                <div
                  className="hidden h-px flex-1 bg-espresso/10 lg:mt-4 lg:block"
                  aria-hidden={i === journeySteps.length - 1}
                  style={{ opacity: i === journeySteps.length - 1 ? 0 : 1 }}
                />
              </div>
              <h3 className="mt-3 font-serif text-xl text-espresso">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-taupe">{s.copy}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
