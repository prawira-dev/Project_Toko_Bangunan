import { Locale, differentiators, getLocalizedText, landingCopy } from "@/data/site";

import { SectionHeading } from "./SectionHeading";

type WhyUsProps = {
  locale: Locale;
};

export function WhyUs({ locale }: WhyUsProps) {
  return (
    <section className="section-spacing pt-0">
      <div className="container-shell">
        <div className="section-card px-6 py-8 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow={getLocalizedText(landingCopy.whyUs.eyebrow, locale)}
            title={getLocalizedText(landingCopy.whyUs.title, locale)}
            description={getLocalizedText(landingCopy.whyUs.description, locale)}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {differentiators.map((item) => (
              <article
                key={item.icon}
                className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-xl">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {getLocalizedText(item.title, locale)}
                </h3>
                <p className="mt-3 text-sm">{getLocalizedText(item.description, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
