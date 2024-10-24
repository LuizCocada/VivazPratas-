import type { Metadata } from "next";
import {  Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/auth";
import { Toaster } from "sonner";

const playfair_Display = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" });
const open_Sans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  title: "VivazPratas",
  description: "Especialista em Joias em Prata 925 e 950. Garantia vitalícia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair_Display.variable} ${open_Sans.variable}`}>
        <AuthProvider>
          <div className="h-full flex flex-col">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}