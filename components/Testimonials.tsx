import { Locale, getLocalizedText, landingCopy, testimonials } from "@/data/site";

import { SectionHeading } from "./SectionHeading";

type TestimonialsProps = {
  locale: Locale;
};

export function Testimonials({ locale }: TestimonialsProps) {
  return (
    <section id="testimoni" className="section-spacing pt-0">
      <div className="container-shell">
        <SectionHeading
          eyebrow={getLocalizedText(landingCopy.testimonialsSection.eyebrow, locale)}
          title={getLocalizedText(landingCopy.testimonialsSection.title, locale)}
          description={getLocalizedText(landingCopy.testimonialsSection.description, locale)}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="section-card h-full px-6 py-8 sm:px-8"
            >
              <p className="text-lg leading-8 text-slate-700">
                &ldquo;{getLocalizedText(testimonial.quote, locale)}&rdquo;
              </p>
              <div className="mt-8">
                <p className="font-bold text-slate-950">{testimonial.name}</p>
                <p className="text-sm text-slate-500">
                  {getLocalizedText(testimonial.role, locale)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
