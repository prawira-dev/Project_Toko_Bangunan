import { Locale, companyProfile, getLocalizedText, landingCopy } from "@/data/site";

import { SectionHeading } from "./SectionHeading";

type AboutProps = {
  locale: Locale;
};

export function About({ locale }: AboutProps) {
  return (
    <section id="tentang" className="section-spacing pt-0">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-card px-6 py-8 sm:px-8">
            <SectionHeading
              eyebrow={getLocalizedText(landingCopy.about.eyebrow, locale)}
              title={getLocalizedText(landingCopy.about.title, locale)}
              description={getLocalizedText(companyProfile.description, locale)}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950 px-6 py-5 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-200">
                  {getLocalizedText(landingCopy.about.founded, locale)}
                </p>
                <p className="mt-2 text-4xl font-bold">{companyProfile.foundedYear}</p>
              </div>
              <div className="rounded-3xl bg-brand-50 px-6 py-5">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-700">
                  {getLocalizedText(landingCopy.about.serviceFocus, locale)}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {getLocalizedText(landingCopy.about.serviceFocusValue, locale)}
                </p>
              </div>
            </div>
          </div>

          <div className="section-card px-6 py-8 sm:px-8">
            <h3 className="text-2xl font-bold text-slate-950">
              {getLocalizedText(landingCopy.about.reasonsTitle, locale)}
            </h3>
            <ul className="mt-6 space-y-4">
              {companyProfile.highlights.map((highlight) => (
                <li
                  key={highlight.id}
                  className="flex gap-4 rounded-3xl border border-slate-200/80 bg-slate-50 px-5 py-4"
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                    OK
                  </span>
                  <p className="text-slate-700">{getLocalizedText(highlight, locale)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
