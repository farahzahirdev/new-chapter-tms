import Image from "next/image";
import { QualifyButton } from "@/components/CTAButtons";
import { IMAGES } from "@/lib/constants";

const CREDENTIALS = [
  "The #1 physician-recommended TMS treatment",
  "FDA-cleared for depression in adults and teens 15-21",
  "Non-drug, non-invasive, and covered by most major insurance",
  "Proven more effective than medication for many patients",
] as const;

export default function NeuroStar() {
  return (
    <section id="neurostar" className="section-padding bg-brand-50">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-8 shadow-sm sm:p-10">
            <div className="relative mx-auto aspect-[5/4] max-w-sm">
              <Image
                src={IMAGES.neurostar}
                alt="NeuroStar TMS device"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 80vw, 360px"
              />
            </div>
            <div className="relative mx-auto mt-4 h-14 w-48">
              <Image
                src={IMAGES.neurostarLogo}
                alt="NeuroStar"
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="section-label justify-center lg:justify-start">NeuroStar Advanced Therapy</p>
            <h2 className="mt-3 text-3xl text-brand-600 sm:text-4xl">
              Credibility you can feel confident in
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              A non-drug, non-invasive treatment proven to be more effective than medication for
              many patients with depression, delivered with psychiatric oversight at New Chapter
              TMS.
            </p>

            <ul className="mt-8 space-y-3 text-left">
              {CREDENTIALS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/85">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-brand-700/70">
              Supported by emerging research for bipolar disorder, PTSD, autism spectrum symptoms,
              and more. Treatment is by prescription only. Results may vary.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <QualifyButton variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
