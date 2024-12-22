import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " ZILA SAHKARI BANK LTD. MIRZAPUR	",
  description: " ZILA SAHKARI BANK LTD. MIRZAPUR	",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen bg-black selection:bg-sky-500/20">
          {/* Gradient Background */}
         
          <Navbar />
          <main className="">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}