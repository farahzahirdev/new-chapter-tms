import Image from "next/image";
import { CLINIC_COMPANIONS } from "@/lib/constants";

export default function ClinicCompanions() {
  return (
    <section id="companions" className="companions-section section-padding">
      <div className="companions-glow" aria-hidden />
      <div className="container-main relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-center justify-center">Clinic companions</p>
          <h2 className="mt-3 text-3xl text-brand-600 sm:text-4xl">
            When the Dogtors are in
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lead">
            Healing isn&apos;t only about science. It&apos;s also connection, comfort, and a touch of
            joy. Our four-legged team members bring all three, reminding us to slow down, smile, and
            appreciate the simple moments.
          </p>
        </div>

        <div className="companions-grid mt-12 lg:mt-16">
          {CLINIC_COMPANIONS.map((dog, index) => (
            <article
              key={dog.name}
              className={`companion-panel companion-panel-${index + 1}`}
            >
              <div className="companion-art">
                <Image
                  src={dog.image}
                  alt={`${dog.name}, ${dog.role}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 900px) 280px, 304px"
                />
              </div>
              <div className="companion-copy">
                <p className="companion-role">{dog.role}</p>
                <h3 className="companion-name">{dog.name}</h3>
                <p className="companion-blurb">{dog.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
