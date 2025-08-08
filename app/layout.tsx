import "./globals.css";
import type { Metadata } from "next";
import { lato } from "../app/font";

export const metadata: Metadata = {
  title: "kOTAKi",
  description: "kOTAKi (Komunitas Tumor Otak Indonesia)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-gray-50`}>{children}</body>
    </html>
  );
}
