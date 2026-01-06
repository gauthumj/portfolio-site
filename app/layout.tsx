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
        url: "/logo/favicon-16x16.png",
        media: "image/png",
      },
      {
        url: "/logo/favicon-32x32.png",
        media: "image/png",
      },
      {
        url: "/logo/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/logo/android-chrome-192x192.png",
        media: "image/png",
      },
      {
        url: "/logo/android-chrome-512x512.png",
        media: "image/png",
      },
    ],
    apple: "/logo/apple-touch-icon.png",
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
