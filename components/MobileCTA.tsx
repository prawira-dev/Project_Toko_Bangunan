import { Locale, getLocalizedText, landingCopy } from "@/data/site";
import { createWhatsAppLink, createWhatsAppPhoneLink } from "@/lib/whatsapp";

type MobileCTAProps = {
  locale: Locale;
};

export function MobileCTA({ locale }: MobileCTAProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/70 bg-white/95 px-4 py-3 shadow-[0_-12px_30px_rgba(15,23,32,0.12)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
        <a href={createWhatsAppPhoneLink()} className="btn-secondary">
          {getLocalizedText(landingCopy.actions.call, locale)}
        </a>
        <a
          href={createWhatsAppLink(getLocalizedText(landingCopy.messages.headerInquiry, locale))}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          {getLocalizedText(landingCopy.actions.whatsapp, locale)}
        </a>
      </div>
    </div>
  );
}
