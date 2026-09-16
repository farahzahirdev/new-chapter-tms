import Image from "next/image";
import { QualifyButton } from "@/components/CTAButtons";
import { FAMILIAR_ITEMS, IMAGES } from "@/lib/constants";

export default function Familiar() {
  return (
    <section id="familiar" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-brand-100 shadow-sm sm:aspect-[5/6] lg:aspect-auto lg:min-h-[34rem]">
            <Image
              src={IMAGES.familiar}
              alt="A hopeful new chapter begins"
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="section-label justify-center lg:justify-start">Recognition</p>
            <h2 className="mt-3 text-3xl text-brand-600 sm:text-4xl">Maybe this feels familiar</h2>
            <p className="mt-4 text-lead">
              If medication hasn&apos;t brought you back to yourself, you are not alone, and you are
              not out of options.
            </p>

            <ul className="familiar-list mt-8 text-left">
              {FAMILIAR_ITEMS.map((item) => (
                <li key={item} className="familiar-item">
                  <span className="familiar-check" aria-hidden>
                    <CheckIcon />
                  </span>
                  <p className="text-base font-medium leading-relaxed text-ink/90 sm:text-[1.05rem]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="font-display text-2xl text-brand-600 sm:text-3xl">
                You don&apos;t have to stay stuck here.
              </p>
              <div className="mt-5 flex justify-center lg:justify-start">
                <QualifyButton variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z"
        clipRule="evenodd"
      />
    </svg>
  );
}
