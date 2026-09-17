import Image from "next/image";
import { PROVIDERS } from "@/lib/constants";

export default function Providers() {
  return (
    <section
      id="providers"
      className="section-padding"
      style={{ background: "oklab(97.7625% .00594094 -.00508362 / .7)" }}
    >
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-center justify-center">Our providers</p>
          <h2 className="mt-3 text-3xl text-brand-600 sm:text-4xl">
            Meet the New Chapter TMS team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lead">
            Psychiatric leadership and experienced TMS specialists who combine clinical expertise
            with the human connection patients need to feel safe and supported.
          </p>
        </div>

        <div className="providers-grid mt-12">
          {PROVIDERS.map((person) => (
            <article key={person.name} className="provider-panel text-center">
              <div className="provider-photo">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: person.objectPosition }}
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 220px"
                />
              </div>
              <h3 className="mt-5 text-xl text-brand-600 sm:text-[1.35rem]">{person.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-accent-600">
                {person.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-[0.95rem]">
                {person.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
