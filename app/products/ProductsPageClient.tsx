"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { FloatingContacts, WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Product = {
  id: string
  title: string
  description: string
  imageUrl: string
}

const staticProducts: Product[] = [
  {
    id: "p1",
    title: "School ERP",
    description: `
      <ul class="space-y-2 text-gray-700">
        <li>📚 Admissions & Student Management</li>
        <li>📝 Attendance & Exam Tracking</li>
        <li>💰 Fees Collection & Finance Reports</li>
        <li>📊 Analytics Dashboard for Admins</li>
      </ul>
    `,
    imageUrl: "/School-ERP-System.png",
  },
  {
    id: "p2",
    title: "Coaching ERP",
    description: `
      <ul class="space-y-2 text-gray-700">
        <li>📅 Batch Scheduling & Timetables</li>
        <li>📂 Study Material & Content Management</li>
        <li>🧑‍🏫 Teacher & Student Collaboration Tools</li>
        <li>🏆 Result Tracking & Progress Reports</li>
      </ul>
    `,
    imageUrl: "/consulting-service.png",
  },
  {
    id: "p3",
    title: "Cab Management",
    description: `
      <ul class="space-y-2 text-gray-700">
        <li>🚖 Ride Dispatch & Driver Allocation</li>
        <li>📍 Real-time GPS Tracking</li>
        <li>💳 Billing & Automated Payments</li>
        <li>📊 Fleet Performance Analytics</li>
      </ul>
    `,
    imageUrl: "/cab-management-software.jpg",
  },
]

export default function ProductsPageClient() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-12">
        <SectionHeading
          title="Our Products"
          subtitle="Battle-tested solutions trusted by businesses"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {staticProducts.map((p) => (
            <Card
              key={p.id}
              className="rounded-2xl shadow-md hover:shadow-xl transition group"
            >
              <CardHeader className="text-center">
                {/* ✅ Image framed properly */}
                <div className="flex justify-center">
                  <div className="h-32 w-full max-w-xs rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                    <Image
                      src={p.imageUrl}
                      alt={p.title}
                      width={300}
                      height={200}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <CardTitle className="mt-4 text-xl font-bold">
                  {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.description }}
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
