import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | Cities+",
  description: "Something amazing is coming soon",
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
