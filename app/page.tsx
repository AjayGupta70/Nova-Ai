"use client"
// import { motion } from "framer-motion";
import { Lightbulb, Users, Award, CheckCircle } from "lucide-react";
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { SectionHeading } from "@/components/section-heading"
import { DemoForm } from "@/components/demo-form"
import { WhatsAppFloat, FloatingContacts } from "@/components/whatsapp-float"
import { JSX } from "react"
import ServicesPageClient from "./services/ServicesPageClient";
import ProductsPageClient from "./products/ProductsPageClient";


// ----------------- MAIN PAGE -----------------
export default function HomePage(): JSX.Element {
  return (
    <main>
      <Navbar />

      <div className="pt-16">
        <HeroCarousel />

        {/* Services */}
        <ServicesPageClient detailed={false} />

        {/* Products */}
        <ProductsPageClient detailed={false} />

        {/* Demo Form */}
        <section
          id="demo"
          className="mx-auto max-w-6xl px-4 py-12"
        >
          <SectionHeading
            title="Book a Free Demo"
            subtitle="Tell us what you're interested in"
          />
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
              <DemoForm />
            </div>


            <div className="rounded-2xl bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300 p-8 shadow-xl backdrop-blur-md border border-white/30">
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                Why Choose <span className="text-purple-700">NovaAI?</span>
              </h3>

              <ul className="mt-8 space-y-5 text-gray-800">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                  <span className="text-lg">Experienced in <strong>AI/ML, Web & Mobile</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                  <span className="text-lg">Fast delivery with <strong>reliable support</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                  <span className="text-lg">Tailored <strong>automation</strong> for your workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                  <span className="text-lg">Proven solutions for <strong>enterprises & startups</strong></span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Vision */}
        <section
          id="vision"
          className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-24 text-white overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.3),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.2),transparent_70%)]"></div>

          <div className="relative mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our Vision
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              At NovaAI, we build future-ready digital ecosystems. We empower
              businesses with AI-driven automation, scalable web & mobile
              solutions, and products that streamline operations.
            </p>

            <div className="mt-14 grid gap-10 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-300 text-sm">
                  We push boundaries to craft cutting-edge solutions.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 12l2 2m-2-2l-2 2m0-2l-2 2m2-2l-2-2m10-2.5a5.5 5.5 0 00-10.5 2.5h-1.5a4.5 4.5 0 000 9H12a4.5 4.5 0 004.5-4.5V13h1a3 3 0 003-3v0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Partnership</h3>
                <p className="text-gray-300 text-sm">
                  We collaborate closely with clients for long-term success.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8l-2 4h4l-2 4m0-12v4m0 8v4m8-8h-4M4 12H0"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-300 text-sm">
                  We deliver with precision, quality, and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>



        <WhatsAppFloat />
        <FloatingContacts />
      </div>
    </main>
  )
}
