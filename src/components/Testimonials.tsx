import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-center justify-center">Patient stories</p>
          <h2 className="mt-3 text-3xl text-brand-600 sm:text-4xl">
            Real relief, in their own words
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lead">
            Patients who came to New Chapter when medication wasn&apos;t enough share what changed.
          </p>
        </div>

        <div className="testimonial-grid mt-12">
          {TESTIMONIALS.map((item) => (
            <blockquote key={`${item.author}-${item.quote.slice(0, 24)}`} className="testimonial-quote">
              <div className="testimonial-mark" aria-hidden>
                “
              </div>
              <p className="text-base leading-relaxed text-ink/85">{item.quote}</p>
              <footer className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">
                {item.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
