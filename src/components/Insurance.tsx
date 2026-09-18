import Image from "next/image";
import { CallButton, QualifyButton } from "@/components/CTAButtons";
import { INSURANCE_ALSO, INSURANCE_LOGOS } from "@/lib/constants";

export default function Insurance() {
  return (
    <section id="insurance" className="section-padding bg-white">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-center justify-center">Insurance and payment</p>
          <h2 className="mt-3 text-3xl text-brand-600 sm:text-4xl">
            Covered by most major insurance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
            Cost should not stand between you and care. NeuroStar TMS is covered by most major
            insurance plans, and our team can help verify your benefits before you begin.
          </p>
        </div>

        <div className="insurance-logo-grid mt-10" aria-label="Insurance plans we commonly work with">
          {INSURANCE_LOGOS.map((plan) => (
            <div key={plan.name} className="insurance-logo-cell">
              <Image
                src={plan.src}
                alt={plan.name}
                width={plan.width}
                height={plan.height}
                className="insurance-logo"
                style={{ width: "100%", height: "auto", maxHeight: "2.75rem" }}
                unoptimized
              />
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-brand-700/80">
          Also accepted: {INSURANCE_ALSO.join(" · ")}. Coverage depends on your plan. We complete a
          full benefits check so you know what to expect before starting.
        </p>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-brand-100 bg-brand-50 p-6 text-center">
          <p className="font-semibold text-brand-700">CareCredit financing</p>
          <p className="mt-2 text-sm leading-relaxed text-ink/80">
            Flexible payment options may be available through CareCredit for out-of-pocket costs.
            Ask our team what fits your situation.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <QualifyButton variant="primary" />
          <CallButton variant="outline" />
        </div>
      </div>
    </section>
  );
}
