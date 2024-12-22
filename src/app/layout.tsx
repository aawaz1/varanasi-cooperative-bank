import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " VARANASI DISTRICT CO-OPERATIVE BANK 	",
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
        <div className="min-h-screen overflow-x-hidden bg-black selection:bg-sky-500/20">
          {/* Gradient Background */}
         
          <Navbar />
          <main className="w-full min-w-[100%]">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
