import { CallButton, QualifyButton } from "@/components/CTAButtons";
import { INSURANCE_PLANS } from "@/lib/constants";

export default function Insurance() {
  return (
    <section id="insurance" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="section-label justify-center lg:justify-start">Insurance and payment</p>
            <h2 className="mt-3 text-3xl text-brand-600 sm:text-4xl">
              Covered by most major insurance
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              Cost should not stand between you and care. NeuroStar TMS is covered by most major
              insurance plans, and our team can help verify your benefits before you begin.
            </p>

            <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6 text-center lg:text-left">
              <p className="font-semibold text-brand-700">CareCredit financing</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                Flexible payment options may be available through CareCredit for out-of-pocket
                costs. Ask our team what fits your situation.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <QualifyButton variant="primary" />
              <CallButton variant="outline" />
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50/80 p-8 text-center lg:text-left">
            <p className="section-label mb-6 justify-center lg:justify-start">
              Plans we commonly work with
            </p>
            <div className="grid grid-cols-2 gap-3">
              {INSURANCE_PLANS.map((plan) => (
                <div
                  key={plan}
                  className="flex items-center justify-center rounded-xl bg-white px-4 py-5 text-center text-sm font-semibold text-brand-700 ring-1 ring-brand-100"
                >
                  {plan}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-brand-700/80">
              Not sure if you are covered? Call us and we will check your benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
