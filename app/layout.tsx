import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <div className="h-full flex flex-col">
          <div>{children}</div>
          {/* footer */}
        </div>
      </body>
    </html>
  );
}
