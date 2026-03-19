import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cities+ | Cities, Data, AI",
  description:
    "cities+ is an NGO working on cities, urbanism, technology, data, and AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
