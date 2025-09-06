"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingContacts, WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Service = {
  id: string
  title: string
  description: string
  imageUrl: string
}

const staticServices: Service[] = [
{
  id: "s1",
  title: "Website & App Development (Web / Mobile)",
  description: `
    <ul class="space-y-2 text-gray-700 text-sm leading-relaxed tracking-normal">
      <li>✨ Responsive & SEO-Friendly Websites for a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;strong digital presence</li>
      <li>⚡ Scalable & Secure Web  Applications</li>
      <li>📱 Mobile Apps – Native iOS, Android & cross-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; platform solutions</li>
    </ul>
  `,
  imageUrl: "/daniel-korpai-pKRNxEguRgM-unsplash.jpg",
},



{
  id: "s2",
  title: "AI & Machine Learning Solutions",
  description: `
    <ul class="space-y-2 text-gray-700 text-sm leading-relaxed tracking-normal">
      <li>🤖 AI Chatbots & Virtual Assistants – Smart, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; responsive,  and available </li>
      <li>🖼️ Computer Vision – Image & video &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; recognition for real-world applications</li>
      <li>💬 Natural Language Processing Language - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aware apps that understand context</li>
      <li>⚡ Custom ML Models – Designed, trained, and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; deployed  for your business</li>
    </ul>
  `,
  imageUrl: "/machine-learning-fine-tuning.png",
},


  {
    id: "s3",
    title: "AI Automation & RPA",
    description: `
      <ul class="space-y-2 text-gray-700">
        <li>⚡ Business Process Automation (BPA) – Streamline daily operations</li>
        <li>🤖 Robotic Process Automation (RPA) – Automate repetitive tasks</li>
        <li>📑 Intelligent Document Processing (IDP) – Extract & analyze documents</li>
        <li>🔄 Workflow Automation – HR, Finance, CRM & more</li>
        <li>🧠 Agentic AI Solutions – Autonomous AI agents for smart tasks</li>
      </ul>
    `,
    imageUrl: "/automation-workflows.png",
  },
]

export default function ServicesPageClient() {
  return (
    <main>
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pt-24 pb-12">
        <SectionHeading title="Our Services" subtitle="Built to scale with your business" />
        <div className="grid gap-6 md:grid-cols-3">
          {staticServices.map((s) => (
            <Card key={s.id} className="rounded-2xl shadow-md hover:shadow-lg transition group">
              <CardHeader className="flex flex-col items-center">
                <div className="h-32 w-full max-w-xs rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src={s.imageUrl}
                    alt={s.title}
                    width={400}
                     height={200}
                 
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-center">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <WhatsAppFloat />
           <FloatingContacts />
    </main>
  )
}
