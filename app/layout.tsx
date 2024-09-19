import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";

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
        <div className="h-full flex flex-col">
          {/* <Header /> */}
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
