"use client";

import dynamic from "next/dynamic";

const SiteFooter = dynamic(() => import("@/components/site-footer"), { ssr: false });

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SiteFooter />
    </>
  );
}
