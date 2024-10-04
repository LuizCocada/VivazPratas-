import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"
import "./globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/auth";

const open_Sans = Open_Sans({ subsets: ["latin"] })

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
      <body className={open_Sans.className}>
        <AuthProvider>
          <div className="h-full flex flex-col">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
