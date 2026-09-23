import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apollo Green Solutions | Industrial IoT Energy Management",
  description: "Advanced IoT-based energy monitoring products and services for industrial and commercial clients.",
  openGraph: {
    title: "Apollo Green Solutions | IoT Energy Management",
    description: "Monitor and optimize your industrial energy consumption with edge IoT products.",
    type: "website",
    locale: "en_US",
    siteName: "Apollo Green Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}