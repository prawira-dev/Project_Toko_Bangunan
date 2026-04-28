"use client";

import { useEffect, useMemo, useState } from "react";

import { About } from "@/components/About";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { MobileCTA } from "@/components/MobileCTA";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { Locale, companyProfile, getLocalizedText } from "@/data/site";

const STORAGE_KEY = "landing-page-locale";

export function LandingPageContent() {
  const [locale, setLocale] = useState<Locale>("id");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY);

    if (savedLocale === "id" || savedLocale === "en") {
      setLocale(savedLocale);
    }
  }, []);

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "HardwareStore",
      name: companyProfile.name,
      description: getLocalizedText(companyProfile.description, locale),
      telephone: companyProfile.phoneDisplay,
      email: companyProfile.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyProfile.address,
        addressLocality: "Karangasem",
        addressRegion: "Bali",
        addressCountry: "ID"
      },
      areaServed: locale === "id" ? "Karangasem dan sekitarnya" : "Karangasem and surrounding areas",
      openingHours: "Mo-Sa 07:00-17:00"
    }),
    [locale]
  );

  function handleLocaleChange(nextLocale: Locale) {
    setLocale(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  }

  return (
    <>
      <Header locale={locale} onLocaleChange={handleLocaleChange} />
      <main className="pb-28 lg:pb-8">
        <Hero locale={locale} />
        <Products locale={locale} />
        <About locale={locale} />
        <WhyUs locale={locale} />
        <Testimonials locale={locale} />
        <CTASection locale={locale} />
        <Location locale={locale} />
        <Footer locale={locale} />
      </main>
      <MobileCTA locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
