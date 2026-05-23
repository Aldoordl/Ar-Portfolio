import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import ScrollReveal from "@/components/motion/ScrollReveal";
import TransitionProvider from "@/components/motion/TransitionProvider";
import CustomCursor from "@/components/motion/CustomCursor";
import IntroLoader from "@/components/motion/IntroLoader";
import RouteScrollReset from "@/components/motion/RouteScrollReset";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
  default: "Aldo Ridlo — Creative Frontend Portfolio",
  template: "%s | Aldo Ridlo",
  },
  description: "Creative portfolio and digital playground.",
  keywords: [
    "creative frontend developer",
    "personal portfolio",
    "web experience",
    "creative direction",
    "interaction design",
    "Next.js portfolio",
  ],
  authors: [
    {
      name: "Aldo Ridlo",
    },
  ],
  creator: "Aldo Ridlo",
  openGraph: {
    title: "Aldo Ridlo — Creative Frontend Portfolio",
    description:
      "A personal creative portfolio exploring visual direction, interface design, motion, and digital experience.",
    url: "https://yourdomain.com",
    siteName: "Aldo Ridlo",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aldo Ridlo creative portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldo Ridlo — Creative Frontend Portfolio",
    description:
      "A personal creative portfolio exploring visual direction, interface design, motion, and digital experience.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${instrumentSerif.variable}`}>
        <SmoothScroll>
          <TransitionProvider>
            <Header />
            {children}
            <Footer />
            <ScrollReveal />
            <CustomCursor />
            <IntroLoader />
            <RouteScrollReset />
          </TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
