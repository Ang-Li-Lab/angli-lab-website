import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComp from "@/components/Header";
import FooterComp from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Science Core",
  description: "ICTR Data Science Core at Baylor College of Medicine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <HeaderComp />
          <main className="flex-grow p-4 bg-gray-100">
            {children}
          </main>
          <FooterComp />
        </div>
      </body>
    </html>
  );
}
