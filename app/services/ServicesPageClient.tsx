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

// Utility for truncating items with "+X more"
function getTruncatedItems(items: string[], limit = 3) {
  const shown = items.slice(0, limit)
  const hiddenCount = items.length > limit ? items.length - limit : 0
  return { shown, hiddenCount }
}

export default function ServicesPageClient({ detailed = true }) {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Track expanded state for technologies and key features per service
  const [expandedTechIds, setExpandedTechIds] = useState<Set<string>>(new Set())
  const [expandedFeatureIds, setExpandedFeatureIds] = useState<Set<string>>(new Set())

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

  // Toggle expand/collapse for technologies
  const toggleTechExpand = (id: string) => {
    setExpandedTechIds((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) newSet.delete(id)
      else newSet.add(id)
      return newSet
    })
  }

  // Toggle expand/collapse for features
  const toggleFeatureExpand = (id: string) => {
    setExpandedFeatureIds((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) newSet.delete(id)
      else newSet.add(id)
      return newSet
    })
  }

  return (
    <main>
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pt-24 pb-12">
        <SectionHeading title="Our Services" subtitle="Built to scale with your business" />

        {loading && <p>Loading services...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const techExpanded = expandedTechIds.has(s.id)
              const featureExpanded = expandedFeatureIds.has(s.id)

              const { shown: shownTechs, hiddenCount: moreTechs } = getTruncatedItems(s.technologies)
              const { shown: shownFeatures, hiddenCount: moreFeatures } = getTruncatedItems(s.keyFeatures)

              const techsToShow = techExpanded ? s.technologies : shownTechs
              const featuresToShow = featureExpanded ? s.keyFeatures : shownFeatures

              return (
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
                    <p className="text-sm text-gray-500 mt-1">{s.description}</p>
                    {detailed && (
                      <>
                        <div>
                          <strong>💲 Pricing:</strong> ${s.pricing.toFixed(2)}
                        </div>

                        <div>
                          <strong>⏱️ Delivery:</strong> {s.delivery} day{s.delivery > 1 ? "s" : ""}
                        </div>

                        <div>
                          <strong>🛠️ Technologies:</strong>
                          <div className="flex flex-wrap gap-2 mt-1 overflow-hidden transition-all duration-300 max-h-[200px]">
                            {techsToShow.map((tech, idx) => (
                              <span
                                key={idx}
                                className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}

                            {moreTechs > 0 && !techExpanded && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleTechExpand(s.id)
                                }}
                                className="inline-block bg-green-200 text-green-900 text-xs font-medium px-3 py-1 rounded-full cursor-pointer select-none"
                                aria-label={`Show all technologies for ${s.title}`}
                              >
                                +{moreTechs} more
                              </button>
                            )}

                            {techExpanded && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleTechExpand(s.id)
                                }}
                                className="inline-block bg-green-300 text-green-900 text-xs font-medium px-3 py-1 rounded-full cursor-pointer select-none"
                                aria-label={`Show less technologies for ${s.title}`}
                              >
                                Show less
                              </button>
                            )}
                          </div>
                        </div>

                        <div>
                          <strong>🚀 Key Features:</strong>
                          <div className="flex flex-wrap gap-2 mt-1 overflow-hidden transition-all duration-300 max-h-[200px]">
                            {featuresToShow.map((feature, idx) => (
                              <span
                                key={idx}
                                className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                              >
                                {feature}
                              </span>
                            ))}

                            {moreFeatures > 0 && !featureExpanded && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleFeatureExpand(s.id)
                                }}
                                className="inline-block bg-blue-200 text-blue-900 text-xs font-medium px-3 py-1 rounded-full cursor-pointer select-none"
                                aria-label={`Show all key features for ${s.title}`}
                              >
                                +{moreFeatures} more
                              </button>
                            )}

                            {featureExpanded && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleFeatureExpand(s.id)
                                }}
                                className="inline-block bg-blue-300 text-blue-900 text-xs font-medium px-3 py-1 rounded-full cursor-pointer select-none"
                                aria-label={`Show less key features for ${s.title}`}
                              >
                                Show less
                              </button>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </section>

      <WhatsAppFloat />
      <FloatingContacts />
    </main>
  )
}
