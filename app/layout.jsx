import { Outfit, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageEffects from "@/components/PageEffects";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Aryan — Web Expert | WordPress, Laravel & Drupal Expert",
    template: "%s — Aryan | Web Expert",
  },
  description:
    "Web Expert | WordPress, Laravel & Drupal Expert. Also skilled in Shopify, Node.js, Next.js, Core PHP, HTML, and server deployment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable}`}>
      <body>
        <PageEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
