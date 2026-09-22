import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://bridalrentalos.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bridal Rental OS | Bridal Rental Management Software",
    template: "%s | Bridal Rental OS",
  },
  description:
    "Manage bridal rental inventory, bookings, fittings, tailoring, cleaning, and delivery workflows with Bridal Rental OS. Book a free demo.",
  openGraph: {
    title: "Bridal Rental OS | Bridal Rental Management Software",
    description:
      "Manage bridal rental inventory, bookings, fittings, tailoring, cleaning, and delivery workflows with Bridal Rental OS.",
    url: siteUrl,
    siteName: "Bridal Rental OS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridal Rental OS | Bridal Rental Management Software",
    description:
      "Manage bridal rental inventory, bookings, fittings, tailoring, cleaning, and delivery workflows with Bridal Rental OS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-ivory text-espresso"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-espresso focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
