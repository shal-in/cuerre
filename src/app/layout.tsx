import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cuerre",
  description: "QR codes that do not look like QR codes.",
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
