import { Locale, getLocalizedText, landingCopy } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

type CTASectionProps = {
  locale: Locale;
};

export function CTASection({ locale }: CTASectionProps) {
  return (
    <section className="section-spacing pt-0">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="eyebrow border-white/10 bg-white/10 text-brand-100">
                {getLocalizedText(landingCopy.cta.eyebrow, locale)}
              </span>
              <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {getLocalizedText(landingCopy.cta.title, locale)}
              </h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                {getLocalizedText(landingCopy.cta.description, locale)}
              </p>
            </div>

            <a
              href={createWhatsAppLink(getLocalizedText(landingCopy.messages.orderNow, locale))}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              {getLocalizedText(landingCopy.actions.orderWhatsApp, locale)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
