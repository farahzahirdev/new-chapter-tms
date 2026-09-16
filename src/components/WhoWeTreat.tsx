import Image from "next/image";
import { WHO_WE_TREAT } from "@/lib/constants";

export default function WhoWeTreat() {
  return (
    <section id="who-we-treat" className="section-padding bg-brand-50/70">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-center justify-center">Who we treat</p>
          <h2 className="mt-3 text-3xl text-brand-600 sm:text-4xl">
            Teens and adults, under one roof
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lead">
            Independently owned, psychiatrist-led care for the people medication hasn&apos;t fully
            helped, including Spokane&apos;s #1 TMS provider for adolescents.
          </p>
        </div>

        <div className="audience-grid mt-12">
          {WHO_WE_TREAT.map((item) => (
            <article key={item.title} className="audience-panel">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="audience-copy">
                <h3 className="text-2xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90 sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
