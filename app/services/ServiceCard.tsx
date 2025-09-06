"use client"

import type { Service } from "@/types"
import { SectionHeading } from "@/components/section-heading"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const staticServices: Service[] = [
  {
    id: "s1",
    title: "Web & App Development",
    description: `
      <ul class="space-y-2 text-gray-600">
        <li>✅ Custom Website Development – Static & dynamic sites</li>
        <li>✅ Web Applications – Scalable & secure</li>
        <li>✅ E-commerce Platforms – Shopify, WooCommerce, Magento</li>
        <li>✅ Mobile Apps – iOS, Android, Cross-platform</li>
        <li>✅ CMS Solutions – WordPress, Drupal, Headless CMS</li>
        <li>✅ UI/UX Design – Beautiful & user-friendly experiences</li>
      </ul>
    `,
    imageUrl: "/web-moble-app-dev.jpg",
  },
  {
    id: "s2",
    title: "AI & Machine Learning",
    description: `
      <ul class="space-y-2 text-gray-600">
        <li>🤖 AI Chatbots & Assistants</li>
        <li>📊 Predictive Analytics & Forecasting</li>
        <li>🖼️ Computer Vision (Image/Video recognition)</li>
        <li>💬 NLP – Language understanding apps</li>
        <li>🎯 Recommendation Engines</li>
        <li>⚡ Custom ML Models & Deployment</li>
      </ul>
    `,
    imageUrl: "/images/ai-ml.svg",
  },
  {
    id: "s3",
    title: "AI Automation & RPA",
    description: `
      <ul class="space-y-2 text-gray-600">
        <li>⚡ Business Process Automation (BPA)</li>
        <li>🤖 Robotic Process Automation (RPA)</li>
        <li>📑 Intelligent Document Processing (IDP)</li>
        <li>🔄 Workflow Automation (HR, Finance, CRM)</li>
        <li>🧠 Agentic AI – Autonomous smart agents</li>
      </ul>
    `,
    imageUrl: "/images/automation.svg",
  },
]

export default function ServicesPageClient() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-20">
        <SectionHeading title="Our Services" subtitle="Built to scale with your business" />
        
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {staticServices.map((s) => (
            <Card
              key={s.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-xl hover:border-blue-500"
            >
              {/* Icon / Image */}
              <div className="flex justify-center">
                <div className="relative h-20 w-20">
                  {s.imageUrl ? (
                    <Image
                      src={s.imageUrl}
                      alt={s.title}
                      fill
                      className="object-contain transition-transform group-hover:scale-110"
                    />
                  ) : null}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-bold text-gray-900 text-center group-hover:text-blue-600">
                {s.title}
              </h3>

              {/* Description */}
              <div
                className="mt-4 text-sm leading-relaxed text-gray-600"
                dangerouslySetInnerHTML={{ __html: s.description }}
              />
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
