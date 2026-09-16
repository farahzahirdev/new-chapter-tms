import { QualifyButton, CallButton } from "@/components/CTAButtons";
import { WHY_DIFFERENT } from "@/lib/constants";

export default function WhyDifferent() {
  return (
    <section id="why-us" className="section-padding">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="text-center lg:sticky lg:top-28 lg:self-start lg:text-left">
            <p className="section-label justify-center lg:justify-start">Why New Chapter</p>
            <h2 className="mt-3 text-3xl text-brand-600 sm:text-4xl lg:text-[2.65rem]">
              Why New Chapter TMS is different
            </h2>
            <p className="mt-5 text-lead">
              At New Chapter TMS, you deserve real relief, not just another treatment attempt. TMS
              is a medical intervention, and we treat it with the care, precision, and clinical
              expertise it deserves.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <QualifyButton variant="primary" />
              <CallButton variant="outline" />
            </div>
          </div>

          <div className="why-list">
            {WHY_DIFFERENT.map((item, index) => (
              <article key={item.title} className="why-item text-center lg:text-left">
                <p className="why-index">0{index + 1}</p>
                <h3 className="mt-2 text-xl text-brand-600 sm:text-2xl">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/80">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
