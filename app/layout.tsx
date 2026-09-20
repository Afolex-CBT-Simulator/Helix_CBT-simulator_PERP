import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helix Academy - Mock 1.0",
  description:
    "Build readiness, strengthen mastery, and prepare with confidence for UTME success.",
  openGraph: {
    title: "Helix Academy - Mock 1.0",
    description:
      "Build readiness, strengthen mastery, and prepare with confidence for UTME success.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
