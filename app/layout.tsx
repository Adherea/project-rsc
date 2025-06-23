// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // sesuaikan
});
export const metadata: Metadata = {
  title: "kOTAKi",
  description: "kOTAKi (Komunitas Tumor Otak Indonesia)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="">
      <body className={`${poppins.className} bg-gray-50`}>{children}</body>
    </html>
  );
}
