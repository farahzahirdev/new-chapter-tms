"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LOGO_URL, PHONE_HREF, PHONE_NUMBER, FORM_SECTION_ID } from "@/lib/constants";

const NAV_ITEMS = [
  { href: "#familiar", label: "Is This You?" },
  { href: "#who-we-treat", label: "Who We Treat" },
  { href: "#about-tms", label: "About TMS" },
  { href: "#insurance", label: "Insurance" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-brand-100 bg-white/95 shadow-sm backdrop-blur-md ${
          open ? "z-[70]" : ""
        }`}
      >
        <div className="container-main relative flex items-center justify-between gap-4 py-3">
          <Link href="/" className="relative z-[80] shrink-0" onClick={close}>
            <Image
              src={LOGO_URL}
              alt="New Chapter TMS"
              width={200}
              height={28}
              className="h-7 w-auto max-w-[9.5rem] object-contain object-left sm:h-8 sm:max-w-[11rem]"
              priority
              unoptimized
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-brand-800 xl:flex" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-brand-600">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:gap-3 xl:flex">
            <a
              href={PHONE_HREF}
              className="text-sm font-semibold text-brand-800 transition-colors hover:text-brand-600"
            >
              {PHONE_NUMBER}
            </a>
            <a
              href={`#${FORM_SECTION_ID}`}
              className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-colors hover:bg-brand-700"
            >
              Find Out If You Qualify
            </a>
          </div>

          <button
            type="button"
            className="mobile-nav-toggle relative z-[80] xl:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>

          {open && (
            <div id="mobile-nav" className="mobile-nav-panel" aria-label="Mobile navigation">
              <p className="mobile-nav-label">Menu</p>
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="mobile-nav-link" onClick={close}>
                  {item.label}
                </a>
              ))}
              <a href={`#${FORM_SECTION_ID}`} className="mobile-nav-cta" onClick={close}>
                Find Out If You Qualify
              </a>
              <a href={PHONE_HREF} className="mobile-nav-secondary" onClick={close}>
                <PhoneIcon />
                Call {PHONE_NUMBER}
              </a>
            </div>
          )}
        </div>
      </header>

      {open && (
        <button
          type="button"
          className="mobile-nav-backdrop xl:hidden"
          aria-label="Close menu"
          onClick={close}
        />
      )}
    </>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  );
}
