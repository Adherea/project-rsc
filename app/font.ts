// app/fonts.ts
import { Lato, Poppins } from "next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
