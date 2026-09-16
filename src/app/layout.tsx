import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "New Chapter TMS | NeuroStar TMS Therapy in Spokane, WA",
  description:
    "When medication isn't enough. Psychiatrist-led NeuroStar TMS for adults and teens in Spokane. FDA-cleared, non-invasive, drug-free. No waitlist. No referral required. Covered by most major insurance.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  keywords: [
    "New Chapter TMS",
    "TMS Spokane",
    "NeuroStar TMS",
    "treatment-resistant depression",
    "adolescent TMS Spokane",
    "TMS therapy Washington",
  ],
  openGraph: {
    title: "New Chapter TMS | When Medication Isn't Enough",
    description:
      "FDA-cleared NeuroStar TMS in Spokane, WA. Psychiatrist-led care for teens and adults. Find out if you qualify today.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
