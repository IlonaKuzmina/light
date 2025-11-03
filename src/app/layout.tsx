import type { Metadata } from "next";
import { BBH_Sans_Bartle, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  title: "Light Shift - powering,productions, frame by frame",
  description: "Everything you need to bring your vision to life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${bbhSansBartle.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
