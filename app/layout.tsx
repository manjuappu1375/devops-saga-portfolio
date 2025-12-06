import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";

const titleFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const codeFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: "Manjunath R | The DevOps Saga",
  description:
    "Cinematic DevOps portfolio showcasing AWS, Terraform, CI/CD, containers, security, and observability.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${titleFont.variable} ${bodyFont.variable} ${codeFont.variable} bg-[#050609] text-white antialiased`}
      >
        <div id="particle-overlay"></div>
        {children}
      </body>
    </html>
  );
}
