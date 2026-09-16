"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { QualifyButton, CallButton } from "@/components/CTAButtons";
import TrustBar from "@/components/TrustBar";
import { IMAGES } from "@/lib/constants";

const HEROES = [...IMAGES.heroes];
const ROTATE_MS = 4000;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (HEROES.length < 2) return;

    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % HEROES.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[min(86vh,900px)] flex-col overflow-hidden">
      <div className="hero-bg" aria-hidden>
        {HEROES.map((src, index) => (
          <div
            key={src}
            className={`hero-slide${index === active ? " is-active" : ""}`}
            aria-hidden={index !== active}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              className="hero-bg-img"
            />
          </div>
        ))}
      </div>
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[min(86vh,900px)] w-full max-w-6xl flex-1 flex-col px-4 sm:px-6">
        <div className="flex flex-1 items-center py-16 lg:py-20">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-3xl lg:text-left">
            <p className="hero-brand font-display text-3xl tracking-[0.03em] text-brand-600 sm:text-4xl lg:text-5xl">
              New Chapter TMS
            </p>

            <h1 className="hero-copy mt-4 text-5xl text-brand-600 sm:text-6xl lg:text-7xl">
              When Medication Isn&apos;t Enough
            </h1>

            <p className="hero-copy mt-6 text-xl leading-relaxed text-ink/80 sm:text-2xl">
              A different, clinically rigorous approach to depression, guided by psychiatric
              expertise. Real relief, not just another treatment attempt.
            </p>

            <div className="hero-actions mt-9 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <QualifyButton variant="primary" />
              <CallButton variant="outline" />
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="hero-dots" role="tablist" aria-label="Hero images">
            {HEROES.map((src, index) => (
              <button
                key={src}
                type="button"
                role="tab"
                className={`hero-dot${index === active ? " is-active" : ""}`}
                aria-label={`Show hero image ${index + 1}`}
                aria-selected={index === active}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
          <TrustBar />
        </div>
      </div>
    </section>
  );
}
