import type { Metadata } from "next";
import { BBH_Sans_Bartle, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CookiePopUp } from "../components/ui/CookiePopUp";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const bbhSansBartle = BBH_Sans_Bartle({
  variable: "--font-bbh-sans-bartle",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lightshiftproductions.com/"),
  title: "Light Shift - powering,productions, frame by frame",
  description: "Everything you need to bring your vision to life",
  icons: {
    icon: "https://lightshiftproductions.com/icon0.svg",
    apple: "https://lightshiftproductions.com/apple-icon.png",
  },
  manifest: "https://lightshiftproductions.com/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="LightShift" />
        <meta
          property="og:logo"
          content="https://lightshiftproductions.com/logo.svg"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${bbhSansBartle.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <CookiePopUp />
      </body>
    </html>
  );
}
