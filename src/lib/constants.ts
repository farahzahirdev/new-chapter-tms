export const LOGO_URL = "/images/logo.png";
export const LOGO_WHITE_URL = "/images/logo-white.png";

export const IMAGES = {
  heroBg: "/images/hero.jpg",
  heroes: ["/images/hero.jpg", "/images/hero2.jpg", "/images/hero3.jpg"] as const,
  consultation: "/images/consultation.jpg",
  teens: "/images/teens.jpg",
  adults: "/images/adults.jpg",
  specialized: "/images/specialized.jpg",
  neurostar: "/images/device.jpg",
  neurostarLogo: "/images/neurostar-logo.png",
  neurostarBg: "/images/neurostar-bg.jpg",
  flowers: "/images/flowers.jpg",
  whyBg: "/images/why-bg.jpg",
  treatmentRoom: "/images/treatment-room.jpg",
  familiar: "/images/familiar.jpg",
  faq: "/images/faq.jpg",
} as const;

/** Twilio tracking number from landing page brief */
export const PHONE_NUMBER = "(509) 844-9239";
export const PHONE_HREF = "tel:+15098449239";

export const ADDRESS = "140 S Arthur St, Suite 506, Spokane, WA 99202";
export const HOURS = "Monday-Friday, by appointment";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=New+Chapter+TMS,+140+S+Arthur+St+Suite+506,+Spokane,+WA+99202";
export const WEBSITE_URL = "https://www.newchaptertms.org";
export const EMAIL = "admin@newchaptertms.org";

export const FORM_ID = "U6f1w2ZOHlDe0rc8HaB2";
export const FORM_IFRAME_ID = "inline-U6f1w2ZOHlDe0rc8HaB2";
export const FORM_SECTION_ID = "qualify-form";

export const HERO_TRUST_ITEMS = [
  { title: "FDA-Cleared", icon: "shield" as const },
  { title: "Non-Invasive & Drug-Free", icon: "spark" as const },
  { title: "No Waitlist, No Referral", icon: "clock" as const },
  { title: "Covered by Most Insurance", icon: "coverage" as const },
] as const;

export const FAMILIAR_ITEMS = [
  "I've tried medication for depression, but I still don't feel like myself.",
  "Everything feels harder than it should.",
  "My energy, motivation, or enjoyment still hasn't come back.",
  "I keep wondering if life is supposed to feel better than this.",
] as const;

export const WHO_WE_TREAT = [
  {
    title: "Adults",
    description:
      "Care for adults with depression, including medication-resistant and treatment-resistant depression.",
    image: IMAGES.adults,
  },
  {
    title: "Teens 15-21",
    description:
      "Specialized adolescent TMS from the #1 TMS provider for teens in Spokane.",
    image: IMAGES.teens,
  },
  {
    title: "Specialized Support",
    description:
      "Support for OCD, anxiety, perinatal mental health, EMS, and active duty service members.",
    image: IMAGES.specialized,
  },
] as const;

export const WHY_DIFFERENT = [
  {
    title: "We Put Your Recovery First",
    description:
      "Led by psychiatric specialists with advanced TMS training and an active role in ongoing research. Care that is compassionate and clinically rigorous.",
  },
  {
    title: "One Practice. Whole-Person Care.",
    description:
      "Teens and adults in the same practice, including complex or medication-resistant depression. A consistent, highly skilled team, not a handoff between clinics.",
  },
  {
    title: "Outcomes Matter, Not Protocols",
    description:
      "We measure your progress and adjust treatment in real time so your care evolves with you, not around a one-size-fits-all program.",
  },
  {
    title: "Independent. Local. Focused on You.",
    description:
      "Independently owned, not part of a corporate system. Every decision is about what's best for your mental health.",
  },
  {
    title: "Rooted in Spokane's Mental Health Community",
    description:
      "From nonprofit partnerships to community events and suicide prevention leadership, we stay involved in improving mental health across our region.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Basic daily tasks felt almost unattainable. Life felt very heavy and hopeless. Now I look forward to things in my life. I'm able to genuinely get excited and feel motivated.",
    author: "Maddie",
  },
  {
    quote:
      "Before TMS I felt like a ghost. I had lost the best parts of me. Now my voice has returned.",
    author: "Ryan",
  },
  {
    quote:
      "I have been seeing a psychiatrist for over 20 years and have never had the results that I got doing the TMS treatments.",
    author: "T",
  },
  {
    quote:
      "I felt super low, had no hope for anything. Now I feel lighter and it's easier for me to do things.",
    author: "Patient",
  },
  {
    quote:
      "I saw the darkness in my thinking and behavior turn to light and bright thinking. All the years of counseling started to make sense.",
    author: "J",
  },
  {
    quote:
      "I am so lucky to have found New Chapter TMS when I did. I encourage everyone to reach out to get started on a new you.",
    author: "Patient",
  },
] as const;

export const INSURANCE_PLANS = [
  "Most major plans",
  "Medicare",
  "Medicaid",
  "Premera",
  "Regence",
  "Aetna",
  "Cigna",
  "UnitedHealthcare",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Is TMS covered by insurance?",
    answer:
      "NeuroStar TMS is covered by most major insurance plans. Our team can help verify your benefits and walk you through next steps at no cost.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No referral is required. You can start by filling out our qualification form or calling our Spokane team directly.",
  },
  {
    question: "Who is a good candidate for TMS?",
    answer:
      "TMS is often a fit for adults and teens 15-21 with depression when medication has not been enough. It may also support related conditions such as OCD and anxiety. A clinician will confirm whether NeuroStar is right for you.",
  },
  {
    question: "What does a TMS session feel like?",
    answer:
      "TMS is non-invasive and drug-free. You stay awake during treatment, and most people return to normal activities right after. The most common side effect is temporary discomfort near the treatment site.",
  },
  {
    question: "How long does treatment take?",
    answer:
      "Standard courses are typically daily sessions over several weeks. Accelerated options may be available for eligible patients who need a more condensed schedule. Your care plan is tailored to you.",
  },
  {
    question: "Is there a waitlist?",
    answer:
      "No. New Chapter TMS has no waitlist, so you can move forward when you are ready.",
  },
] as const;
