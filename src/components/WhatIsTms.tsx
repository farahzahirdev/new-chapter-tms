import Image from "next/image";
import { QualifyButton } from "@/components/CTAButtons";
import { IMAGES } from "@/lib/constants";

export default function WhatIsTms() {
  return (
    <section id="about-tms" className="section-padding bg-brand-50/70">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-100 shadow-sm lg:aspect-[5/4]">
            <Image
              src={IMAGES.treatmentRoom}
              alt="NeuroStar TMS treatment at New Chapter TMS"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="section-label justify-center lg:justify-start">About TMS</p>
            <h2 className="mt-3 text-3xl text-brand-600 sm:text-4xl">
              What is TMS and how does it work?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              Transcranial Magnetic Stimulation (TMS) is an FDA-cleared treatment that uses
              targeted magnetic pulses to stimulate areas of the brain involved in mood. It is
              non-invasive, drug-free, and done in an outpatient setting with no downtime.
            </p>

            <ul className="mt-8 space-y-4 text-left lg:text-left">
              <li className="border-t border-brand-100 pt-4 text-center lg:text-left">
                <h3 className="text-xl text-brand-600">Targeted, not systemic</h3>
                <p className="mt-1 text-ink/80">
                  Magnetic pulses focus on mood-related brain circuits rather than circulating
                  medication through your whole body.
                </p>
              </li>
              <li className="border-t border-brand-100 pt-4 text-center lg:text-left">
                <h3 className="text-xl text-brand-600">Outpatient and practical</h3>
                <p className="mt-1 text-ink/80">
                  Sessions are typically short. Most people drive themselves and return to daily
                  life afterward.
                </p>
              </li>
              <li className="border-t border-brand-100 pt-4 text-center lg:text-left">
                <h3 className="text-xl text-brand-600">Built for when medication isn&apos;t enough</h3>
                <p className="mt-1 text-ink/80">
                  NeuroStar TMS is designed for people who need a different path to relief,
                  including teens 15-21 and adults.
                </p>
              </li>
            </ul>

            <div className="mt-8 flex justify-center lg:justify-start">
              <QualifyButton variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
