"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { FloatingContacts, WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Service = {
  id: string
  title: string
  description: string
  pricing: number
  delivery: number
  technologies: string[]
  keyFeatures: string[]
  imageUrl: string
}

export default function ServicesPageClient({ detailed = true }) {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/services/getAll")
        if (!res.ok) throw new Error("Failed to fetch services")
        const data = await res.json()

        const mappedServices: Service[] = data.map((service: any) => ({
          id: service.id.toString(),
          title: service.serviceHeading,
          description: service.description,
          pricing: service.pricing,
          delivery: service.delivery,
          technologies: service.technologies,
          keyFeatures: service.keyFeatures,
          imageUrl: service.imageUri,
        }))

        setServices(mappedServices)
      } catch (err: any) {
        setError(err.message || "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  return (
    <main>
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pt-24 pb-12">
        <SectionHeading title="Our Services" subtitle="Built to scale with your business" />

        {loading && <p>Loading services...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Card
                key={s.id}
                className="rounded-2xl border border-gray-300 shadow-sm transition-all duration-300 group hover:shadow-lg hover:border-blue-500 cursor-pointer"
              >
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
                  <CardTitle className="text-xl font-semibold text-center mt-2">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-700">
                  <p className="text-gray-800 font-medium">💬 {s.description}</p>
                  {detailed && (
                    <>
                      <div>
                        <strong>💲 Pricing:</strong> ${s.pricing.toFixed(2)}
                      </div>

                      <div>
                        <strong>⏱️ Delivery:</strong> {s.delivery} day{s.delivery > 1 ? 's' : ''}
                      </div>

                      <div>
                        <strong>🛠️ Technologies:</strong>
                        <ul className="list-disc list-inside pl-2">
                          {s.technologies.map((tech, idx) => (
                            <li key={idx}>{tech}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <strong>🚀 Key Features:</strong>
                        <ul className="list-disc list-inside pl-2">
                          {s.keyFeatures.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <WhatsAppFloat />
      <FloatingContacts />
    </main>
  )
}
