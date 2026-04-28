import { Locale, companyProfile, getLocalizedText, landingCopy } from "@/data/site";
import { createWhatsAppLink, createWhatsAppPhoneLink } from "@/lib/whatsapp";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="pt-4">
      <div className="container-shell">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white px-6 py-8 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
                {getLocalizedText(companyProfile.tagline, locale)}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">{companyProfile.name}</h2>
              <p className="mt-4 max-w-xl text-sm">
                {`✓ ${getLocalizedText(landingCopy.footer.coverage, locale)}`}
                <br />
                {`✓ ${getLocalizedText(landingCopy.footer.fastDelivery, locale)}`}
                <br />
                {`✓ ${getLocalizedText(landingCopy.footer.competitivePrice, locale)}`}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
                {getLocalizedText(landingCopy.footer.contactTitle, locale)}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>
                  <a href={createWhatsAppPhoneLink()} className="transition hover:text-brand-600">
                    {companyProfile.phoneDisplay}
                  </a>
                </li>
                <li>{companyProfile.email}</li>
                <li>{getLocalizedText(companyProfile.hours, locale)}</li>
                <li>{getLocalizedText(companyProfile.socialMedia, locale)}</li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
                {getLocalizedText(landingCopy.footer.reachUsTitle, locale)}
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={createWhatsAppLink(getLocalizedText(landingCopy.messages.footerOrder, locale))}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  {getLocalizedText(landingCopy.actions.whatsapp, locale)}
                </a>
                <a href="#produk" className="btn-secondary">
                  {getLocalizedText(landingCopy.actions.viewProducts, locale)}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
            (c) 2026 {companyProfile.name}. {getLocalizedText(landingCopy.footer.rights, locale)}
          </div>
        </div>
      </div>
    </footer>
  );
}
