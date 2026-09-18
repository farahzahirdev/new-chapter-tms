"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { FAQ_ITEMS, IMAGES } from "@/lib/constants";

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className={`faq-item${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="faq-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="faq-question">{question}</span>
        <span className="faq-icon" aria-hidden="true">
          +
        </span>
      </button>
      <div id={panelId} className="faq-panel" role="region" aria-hidden={!open}>
        <div className="faq-panel-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-main">
        <div className="faq-layout">
          <div className="faq-split-content">
            <p className="section-label justify-center lg:justify-start">FAQ</p>
            <h2 className="mt-3 text-center text-3xl text-brand-600 sm:text-4xl lg:text-left">
              Frequently asked questions
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-relaxed text-ink/80 lg:mx-0 lg:text-left">
              Common questions about NeuroStar TMS, insurance, and getting started at New Chapter.
            </p>

            <div className="faq-list mt-8 lg:mt-10">
              {FAQ_ITEMS.map((item, index) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  open={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                />
              ))}
            </div>
          </div>

          <div className="faq-split-media">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-brand-100 shadow-sm lg:aspect-[4/5]">
              <Image
                src={IMAGES.treatmentRoom}
                alt="NeuroStar TMS treatment room at New Chapter TMS"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 420px"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
