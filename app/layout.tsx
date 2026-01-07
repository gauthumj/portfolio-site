import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gauthum's Portfolio",
  description: "Gauthum's portfolio website showcasing projects and skills.",
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        media: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        media: "image/png",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/android-chrome-192x192.png",
        media: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        media: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
