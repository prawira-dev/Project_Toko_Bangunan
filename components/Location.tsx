import { Locale, companyProfile, getLocalizedText, landingCopy } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

import { SectionHeading } from "./SectionHeading";

type LocationProps = {
  locale: Locale;
};

export function Location({ locale }: LocationProps) {
  return (
    <section id="lokasi" className="section-spacing pt-0">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-card px-6 py-8 sm:px-8">
            <SectionHeading
              eyebrow={getLocalizedText(landingCopy.location.eyebrow, locale)}
              title={getLocalizedText(landingCopy.location.title, locale)}
              description={getLocalizedText(landingCopy.location.description, locale)}
            />

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
                  {getLocalizedText(landingCopy.location.addressLabel, locale)}
                </p>
                <p className="mt-2 text-slate-700">{companyProfile.address}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
                  {getLocalizedText(landingCopy.location.hoursLabel, locale)}
                </p>
                <p className="mt-2 text-slate-700">{getLocalizedText(companyProfile.hours, locale)}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
                  {getLocalizedText(landingCopy.location.contactLabel, locale)}
                </p>
                <a
                  href={createWhatsAppLink(getLocalizedText(landingCopy.messages.locationInquiry, locale))}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex text-slate-700 underline decoration-brand-400 underline-offset-4"
                >
                  {companyProfile.phoneDisplay}
                </a>
                <p className="mt-2 text-sm text-slate-500">{companyProfile.email}</p>
              </div>
            </div>
          </div>

          <div className="section-card overflow-hidden p-2">
            <iframe
              title={getLocalizedText(landingCopy.location.mapTitle, locale)}
              src={companyProfile.googleMapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[360px] w-full rounded-[1.5rem] border-0 md:min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
