import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-espresso text-ivory">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2.5 text-center text-xs font-medium tracking-wide">
        <span className="text-taupe-light">
          Introducing a smarter way to manage bridal rentals.
        </span>
        <Link
          href="/features"
          className="whitespace-nowrap text-gold-pale underline underline-offset-4 decoration-gold/40 hover:decoration-gold-pale"
        >
          Discover Bridal Rental OS
        </Link>
      </div>
    </div>
  );
}
