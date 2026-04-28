import { Locale, companyProfile, getLocalizedText, landingCopy } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

type HeaderProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function Header({ locale, onLocaleChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[#fffaf5]/90 backdrop-blur">
      <div className="container-shell flex flex-wrap items-center justify-between gap-4 py-4">
        <a href="#beranda" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
            TB
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              {getLocalizedText(companyProfile.tagline, locale)}
            </p>
            <p className="text-base font-bold text-slate-950">{companyProfile.name}</p>
          </div>
        </a>

        <div className="flex items-center gap-3 lg:gap-6">
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            <a href="#produk" className="transition hover:text-brand-600">
              {getLocalizedText(landingCopy.nav.products, locale)}
            </a>
            <a href="#tentang" className="transition hover:text-brand-600">
              {getLocalizedText(landingCopy.nav.about, locale)}
            </a>
            <a href="#testimoni" className="transition hover:text-brand-600">
              {getLocalizedText(landingCopy.nav.testimonials, locale)}
            </a>
            <a href="#lokasi" className="transition hover:text-brand-600">
              {getLocalizedText(landingCopy.nav.location, locale)}
            </a>
          </nav>

          <div
            className="flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm"
            aria-label={getLocalizedText(landingCopy.header.languageLabel, locale)}
          >
            <button
              type="button"
              onClick={() => onLocaleChange("id")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                locale === "id" ? "bg-slate-950 text-white" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => onLocaleChange("en")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                locale === "en" ? "bg-slate-950 text-white" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href={createWhatsAppLink(getLocalizedText(landingCopy.messages.headerInquiry, locale))}
            target="_blank"
            rel="noreferrer"
            className="btn-primary hidden px-4 py-2.5 sm:inline-flex"
          >
            {getLocalizedText(landingCopy.actions.contactWhatsApp, locale)}
          </a>
        </div>
      </div>
    </header>
  );
}
