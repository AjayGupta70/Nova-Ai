"use client";

import React from "react";

type Props = { className?: string };

export function WebAryaLogo({ className = "" }: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Updated Company logo image */}
      <img
        src="https://res.cloudinary.com/dmpuu4gvn/image/upload/v1757748236/android-chrome-512x512_p8hxjv.png" // ✅ Use your uploaded logo (place inside /public folder in Next.js)
        alt="WebARYA logo"
        className="w-12 h-12 flex-none object-contain"
      />

      {/* Updated Brand text */}
      <span className="ml-2 text-2xl font-extrabold tracking-tight">
        <span className="text-black">Web</span>
        <span className="text-blue-600">ARYA</span>
      </span>
    </div>
  );
}
