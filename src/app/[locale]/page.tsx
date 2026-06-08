import { setRequestLocale } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        {/*
          Later slices mount their sections here, in order:
          #5 Navigation (replaces SiteHeader) · #9 Seasonal Banner · #6 Services
          · #7 About · #8 Testimonials · #10 Booking · #11 Contact · #12 Footer.
          The anchors below let the Hero CTAs smooth-scroll today; the Booking (#10)
          and Contact (#11) slices replace them with real sections.
        */}
        <div id="booking" aria-hidden className="scroll-mt-20" />
        <div id="contact" aria-hidden className="scroll-mt-20" />
      </main>
    </>
  );
}
