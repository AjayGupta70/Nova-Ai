"use client";

import React, { useId } from "react";

type Props = { className?: string };

export function NovaAiLogo({ className = "" }: Props) {
  const id = useId();
  const gradId = `nova-gradient-${id}`;

  return (
    <div className={`flex items-center ${className}`}>
      {/* Circular gradient icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-8 h-8 flex-none"
        role="img"
        aria-label="NovaAI logo"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="30" fill={`url(#${gradId})`} opacity="0.15" />
        <circle cx="32" cy="24" r="6" fill={`url(#${gradId})`} />
        <path
          d="M18 38c4-6 9-9 14-9s10 3 14 9"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="20" cy="44" r="2.8" fill="#9333EA" />
        <circle cx="44" cy="44" r="2.8" fill="#9333EA" />
      </svg>

      {/* Brand text */}
      <span className="ml-2 font-extrabold text-lg sm:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        NovaAI
      </span>
    </div>
  );
}
