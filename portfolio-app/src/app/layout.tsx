import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const lora = Lora({
  subsets: ["latin"],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} font-sans`}>{children}</body>
    </html>
  );
}
