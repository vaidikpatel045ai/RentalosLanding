import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/site-data";
import { featureDirectory } from "@/lib/site-data";

const featureLinks = featureDirectory.slice(0, 6);

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-espresso text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo dark />
            <p className="mt-4 text-sm leading-relaxed text-taupe-light">
              The operating system for modern bridal rental businesses
              &mdash; inventory, bookings, tailoring, cleaning and delivery,
              connected in one platform.
            </p>
            <p className="mt-4 font-serif text-lg italic text-gold-pale">
              Every garment. Every bride. Every workflow. One system.
            </p>
            <Button href="/book-demo" variant="secondary" className="mt-6 border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory/10">
              Book a Free Demo
            </Button>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe-light">
              Platform
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/80 hover:text-gold-pale">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/book-demo" className="text-ivory/80 hover:text-gold-pale">
                  Book a Free Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe-light">
              Features
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {featureLinks.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/features#fd-${cat.id}`}
                    className="text-ivory/80 hover:text-gold-pale"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe-light">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ivory/80">
              <li>hello@[your-domain-here]</li>
              <li>+971 [boutique line placeholder]</li>
              <li className="pt-2">
                <Link href="/privacy" className="hover:text-gold-pale">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold-pale">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ivory/10 pt-6 text-xs text-taupe-light sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Bridal Rental OS. All rights reserved.</p>
          <p>Dubai &middot; Abu Dhabi &middot; Sharjah &mdash; seeded demonstration branches.</p>
        </div>
      </div>
    </footer>
  );
}
