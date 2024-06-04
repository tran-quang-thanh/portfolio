import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thanh Tran | Portfio",
  description: "Tran Quang Thanh's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/avatar.svg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
