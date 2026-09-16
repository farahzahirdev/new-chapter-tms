import { PHONE_HREF, PHONE_NUMBER, FORM_SECTION_ID } from "@/lib/constants";

type FormButtonVariant = "primary" | "secondary" | "outline" | "accent" | "gold";
type CallButtonVariant = "primary" | "secondary" | "outline" | "light" | "hero";

type FormButtonProps = {
  variant?: FormButtonVariant;
  className?: string;
};

type CallButtonProps = {
  variant?: CallButtonVariant;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all sm:px-8 sm:text-base";

export function QualifyButton({ variant = "primary", className = "" }: FormButtonProps) {
  const styles: Record<FormButtonVariant, string> = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20",
    accent: "bg-white text-brand-700 hover:bg-brand-50 shadow-lg shadow-black/10",
    gold: "bg-accent-500 text-brand-800 hover:bg-accent-400 shadow-lg shadow-accent-500/30",
    secondary: "bg-brand-600 text-white hover:bg-brand-700",
    outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50",
  };

  return (
    <a href={`#${FORM_SECTION_ID}`} className={`${base} ${styles[variant]} ${className}`}>
      Find Out If You Qualify
    </a>
  );
}

export function CallButton({ variant = "outline", className = "" }: CallButtonProps) {
  const styles: Record<CallButtonVariant, string> = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20",
    secondary: "bg-white text-brand-700 hover:bg-brand-50",
    outline: "border-2 border-brand-600 text-brand-600 hover:bg-brand-50",
    light: "border-2 border-white text-white hover:bg-white/10",
    hero: "border-2 border-brand-600/70 bg-white/70 text-brand-700 backdrop-blur-sm hover:bg-white",
  };

  return (
    <a href={PHONE_HREF} className={`${base} gap-2 ${styles[variant]} ${className}`}>
      <PhoneIcon />
      Call {PHONE_NUMBER}
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
