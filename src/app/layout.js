import "./globals.css";
import { Jua } from "next/font/google";

const jua = Jua({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jua",
});

export const metadata = {
  title: "tailwind-rapunzel-inspired-ui",
  description:
    "A Rapunzel-inspired UI design project crafted with Tailwind CSS. This practice app showcases a fairytale-themed interface with animated elements and vibrant colors, bringing the magic of Tangled to life in a modern web layout. It features responsive design, custom animations, and creative styling using Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-jua">{children}</body>
    </html>
  );
}
