"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const slides = [
  { src: "/images/hero-1.png", alt: "Modern AI & Web solutions" },
  { src: "/images/hero-2.png", alt: "Enterprise-grade engineering" },
  { src: "/images/hero-3.png", alt: "Mobile apps that scale" },
  { src: "/images/hero-4.png", alt: "Automation & workflows" },
  { src: "/images/hero-5.png", alt: "Data-driven products" },
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000)
    return () => clearInterval(id)
  }, [])

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + slides.length) % slides.length)

  return (
    <section className="relative mt-[64px]">
      <div className="relative h-[320px] md:h-[520px] overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.src || "/placeholder.svg"}
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay uses neutrals/blue only */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-blue-900/30" aria-hidden="true" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-4xl px-4 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-semibold text-balance">
              Powering Businesses with AI, Web & App Solutions
            </h1>
            <p className="mt-4 text-sm md:text-base text-pretty">
              Build faster, scale smarter, and automate with confidence.
            </p>
            <div className="mt-6 flex gap-3 justify-center">
              <Link
                href="/services"
                className="rounded-xl bg-white text-blue-700 px-5 py-3 text-sm font-medium hover:bg-gray-100"
              >
                Explore Services
              </Link>
              <Link
                href="/free-demo"
                className="rounded-xl bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-700"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 hover:bg-black/60"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 hover:bg-black/60"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"} hover:bg-white`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
