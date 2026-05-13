import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DealKaro – WhatsApp Commerce Platform powered by Kleem",
  description:
    "DealKaro helps businesses sell smarter on WhatsApp. AI-powered automation, instant order management, and real-time analytics — powered by Kleem.",
  keywords: ["WhatsApp commerce", "WhatsApp selling", "DealKaro", "Kleem"],
  openGraph: {
    title: "DealKaro – WhatsApp Commerce Platform",
    description: "Sell smarter on WhatsApp with AI-powered automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

