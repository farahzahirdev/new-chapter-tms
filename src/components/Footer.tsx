import Image from "next/image";
import Link from "next/link";
import {
  ADDRESS,
  EMAIL,
  HOURS,
  LOGO_WHITE_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  WEBSITE_URL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-600 text-white">
      <div className="container-main grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src={LOGO_WHITE_URL}
            alt="New Chapter TMS"
            width={240}
            height={33}
            className="h-9 w-auto sm:h-10"
            unoptimized
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-100">
            Independently owned, psychiatrist-led NeuroStar TMS in Spokane for teens and adults
            when medication isn&apos;t enough.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Contact</p>
          <address className="mt-3 space-y-2 text-sm not-italic text-brand-100">
            <p>{ADDRESS}</p>
            <p>
              <a href={PHONE_HREF} className="transition-colors hover:text-white">
                {PHONE_NUMBER}
              </a>
            </p>
            <p>
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                {EMAIL}
              </a>
            </p>
            <p>{HOURS}</p>
          </address>
        </div>

        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-brand-100">
            <a href="#familiar" className="transition-colors hover:text-white">
              Is This You?
            </a>
            <a href="#about-tms" className="transition-colors hover:text-white">
              About TMS
            </a>
            <a href="#insurance" className="transition-colors hover:text-white">
              Insurance
            </a>
            <a href="#faq" className="transition-colors hover:text-white">
              FAQ
            </a>
            <a href="#qualify-form" className="transition-colors hover:text-white">
              Find Out If You Qualify
            </a>
            <Link href={WEBSITE_URL} className="transition-colors hover:text-white">
              Main Website
            </Link>
          </nav>
        </div>
      </div>

      <div className="container-main border-t border-white/15 pb-8 pt-8">
        <div className="compliance-block max-w-5xl">
          <p className="font-semibold text-white">Important Safety Information</p>
          <p>
            The NeuroStar Advanced Therapy System is indicated for the treatment of depressive
            episodes and for decreasing anxiety symptoms for those who may exhibit comorbid anxiety
            symptoms in adult patients suffering from Major Depressive Disorder (MDD) and who
            failed to achieve satisfactory improvement from previous antidepressant medication
            treatment in the current episode. The NeuroStar Advanced Therapy System is intended to
            be used as an adjunct for the treatment of adult patients suffering from Obsessive
            Compulsive Disorder (OCD).
          </p>
          <p>
            NeuroStar Advanced Therapy is indicated as an adjunct for the treatment of Major
            Depressive Disorder (MDD) in adolescent patients (15-21).
          </p>
          <p>
            NeuroStar Advanced Therapy is only available by prescription. A doctor can help decide
            if NeuroStar Advanced Therapy is right for you. Patients&apos; results may vary. The
            most common side effect is pain or discomfort at or near the treatment site. These
            events are transient; they occur during the TMS treatment course and do not occur for
            most patients after the first week of treatment. There is a rare risk of seizure
            associated with the use of TMS therapy (&lt;0.1% per patient).
          </p>
          <p className="font-medium text-accent-400">
            If in danger or having suicidal thoughts, contact 911 or call/text 988.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-white/15 pt-5 text-xs text-brand-100 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} New Chapter TMS. All rights reserved.</p>
          <p>FDA-cleared NeuroStar TMS · Spokane, WA</p>
        </div>
      </div>
    </footer>
  );
}
