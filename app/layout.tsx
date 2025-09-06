import React, { Suspense } from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/navbar";
import ClientWrapper from "@/components/ClientWrapper";

import "./globals.css";

export const metadata: Metadata = {
  title: "NovaAi Solution",
  description: "AI, Web & App development and automation services. Book a free demo.",
   icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  generator: "v0.app",
  openGraph: {
    title: "NovaAi Solution",
    description: "AI, Web & App Solutions",
    url: "https://example.com",
    type: "website",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Navbar />
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <ClientWrapper>{children}</ClientWrapper>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
