import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ECITech - Programming The Future of Your Business",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overscroll-none h-full">{children}</body>
    </html>
  );
}
