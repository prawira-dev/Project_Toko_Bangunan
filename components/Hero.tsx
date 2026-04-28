import Image from "next/image";

import { Locale, getLocalizedText, landingCopy, stats } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  return (
    <section id="beranda" className="relative overflow-hidden pt-10 sm:pt-14">
      <div className="container-shell">
        <div className="section-card grid gap-10 overflow-hidden px-6 py-10 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-14">
          <div className="relative z-10">
            <span className="eyebrow">{getLocalizedText(landingCopy.hero.eyebrow, locale)}</span>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {getLocalizedText(landingCopy.hero.title, locale)}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              {getLocalizedText(landingCopy.hero.description, locale)}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={createWhatsAppLink(getLocalizedText(landingCopy.messages.heroInquiry, locale))}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                {getLocalizedText(landingCopy.actions.contactWhatsApp, locale)}
              </a>
              <a href="#produk" className="btn-secondary">
                {getLocalizedText(landingCopy.actions.viewProducts, locale)}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-3xl border border-slate-200/80 bg-white px-5 py-4"
                >
                  <p className="text-3xl font-bold text-slate-950">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {getLocalizedText(stat.label, locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-slate-950 bg-grid-fade bg-[size:32px_32px]" />
            <div className="relative mx-auto flex h-full min-h-[420px] max-w-lg items-end justify-center rounded-[2rem] p-6 sm:p-8">
              <div className="absolute left-5 top-5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-brand-200">
                  {getLocalizedText(landingCopy.hero.badgeTitle, locale)}
                </p>
                <p className="mt-1 text-sm font-semibold">
                  {getLocalizedText(landingCopy.hero.badgeArea, locale)}
                </p>
              </div>

              <Image
                src="/images/hero-materials.svg"
                alt={getLocalizedText(landingCopy.hero.imageAlt, locale)}
                width={520}
                height={520}
                priority
                className="relative z-10 h-auto w-full max-w-md drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
              />

              <div className="absolute bottom-5 right-5 rounded-3xl bg-white px-5 py-4 shadow-soft">
                <p className="text-sm font-semibold text-slate-900">
                  {getLocalizedText(landingCopy.hero.easyOrderTitle, locale)}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {getLocalizedText(landingCopy.hero.easyOrderDescription, locale)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
