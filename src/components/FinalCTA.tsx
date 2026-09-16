import Image from "next/image";
import { QualifyButton, CallButton } from "@/components/CTAButtons";
import { IMAGES } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-brand-50">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl border border-brand-100 shadow-sm lg:order-1 lg:aspect-[5/4]">
            <Image
              src={IMAGES.treatmentRoom}
              alt="NeuroStar TMS treatment room at New Chapter TMS"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <p className="section-label justify-center lg:justify-start">Start your new chapter</p>
            <h2 className="mt-3 text-3xl text-brand-600 sm:text-4xl lg:text-5xl">
              Real relief is possible
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">
              Find out if you qualify for NeuroStar TMS, or call our Spokane team today. No
              waitlist. No referral needed.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <QualifyButton variant="primary" />
              <CallButton variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
