import type { Metadata } from "next";
import { Quicksand, Raleway } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-main",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "cities+",
  description:
    "cities+ is an NGO working on cities, urbanism, technology, data, and AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${quicksand.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
