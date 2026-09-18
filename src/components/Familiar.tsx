import { QualifyButton } from "@/components/CTAButtons";
import { FAMILIAR_ITEMS } from "@/lib/constants";

export default function Familiar() {
  return (
    <section id="familiar" className="familiar-section section-padding">
      <div className="familiar-glow" aria-hidden />
      <div className="container-main relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-center justify-center">Recognition</p>
          <h2 className="mt-3 text-3xl text-brand-600 sm:text-4xl lg:text-[2.75rem]">
            Maybe this feels familiar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lead">
            If medication hasn&apos;t brought you back to yourself, you are not alone, and you are
            not out of options.
          </p>
        </div>

        <ol className="familiar-list mt-12">
          {FAMILIAR_ITEMS.map((item, index) => (
            <li key={item} className="familiar-item">
              <span className="familiar-index" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="familiar-copy">{item}</p>
            </li>
          ))}
        </ol>

        <div className="familiar-close mt-12 text-center sm:mt-14">
          <p className="familiar-close-line">You don&apos;t have to stay stuck here.</p>
          <div className="mt-6 flex justify-center">
            <QualifyButton variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
