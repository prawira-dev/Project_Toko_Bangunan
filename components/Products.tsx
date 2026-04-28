import Image from "next/image";

import { Locale, getLocalizedText, landingCopy, products } from "@/data/site";
import { createProductInquiryLink } from "@/lib/whatsapp";

import { SectionHeading } from "./SectionHeading";

type ProductsProps = {
  locale: Locale;
};

export function Products({ locale }: ProductsProps) {
  return (
    <section id="produk" className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow={getLocalizedText(landingCopy.productsSection.eyebrow, locale)}
          title={getLocalizedText(landingCopy.productsSection.title, locale)}
          description={getLocalizedText(landingCopy.productsSection.description, locale)}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => {
            const productName = getLocalizedText(product.name, locale);

            return (
              <article
                key={product.image}
                className="section-card overflow-hidden border-slate-200/80"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={getLocalizedText(product.alt, locale)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                      {getLocalizedText(product.category, locale)}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      {getLocalizedText(product.price, locale)}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-950">{productName}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {getLocalizedText(product.description, locale)}
                  </p>
                  <a
                    href={createProductInquiryLink(
                      getLocalizedText(landingCopy.messages.productInquiryPrefix, locale),
                      productName
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary mt-6 w-full"
                  >
                    {getLocalizedText(landingCopy.actions.askNow, locale)}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
