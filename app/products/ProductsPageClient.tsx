"use client"

import { useEffect, useState } from "react"
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
  rating: number
  subscriberCount: number
  keyFeatures: string[]
  technologies: string[]
  price: number
}

// Utility for truncating items with "+X more"
function getTruncatedItems(items: string[], limit = 3) {
  const shown = items.slice(0, limit)
  const hiddenCount = items.length > limit ? items.length - limit : 0
  return { shown, hiddenCount }
}

export default function ProductsPageClient({ detailed = true }) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Track expanded state for technologies and key features per product
  const [expandedTechIds, setExpandedTechIds] = useState<Set<string>>(new Set())
  const [expandedFeatureIds, setExpandedFeatureIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/v1/products/getAll")
        if (!res.ok) throw new Error("Failed to fetch products")
        const data = await res.json()

        const mappedProducts: Product[] = data.map((product: any) => ({
          id: product.id.toString(),
          title: product.productHeading,
          description: product.description,
          imageUrl: product.imageUrl,
          rating: product.rating,
          subscriberCount: product.subscriberCount,
          keyFeatures: product.keyFeatures,
          technologies: product.technologies,
          price: product.price,
        }))

        setProducts(mappedProducts)
      } catch (err: any) {
        setError(err.message || "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
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
        <SectionHeading
          title="Our Products"
          subtitle="Battle-tested solutions trusted by businesses"
        />

        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((p) => {
              const techExpanded = expandedTechIds.has(p.id)
              const featureExpanded = expandedFeatureIds.has(p.id)

              const { shown: shownTechs, hiddenCount: moreTechs } = getTruncatedItems(p.technologies)
              const { shown: shownFeatures, hiddenCount: moreFeatures } = getTruncatedItems(p.keyFeatures)

              const techsToShow = techExpanded ? p.technologies : shownTechs
              const featuresToShow = featureExpanded ? p.keyFeatures : shownFeatures

              return (
                <Card
                  key={p.id}
                  className="rounded-2xl border border-gray-300 shadow-sm transition-all duration-300 group hover:shadow-xl hover:border-blue-500 cursor-pointer"
                >
                  <CardHeader className="text-center">
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

                    <CardTitle className="mt-4 text-xl font-bold">{p.title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">{p.description}</p>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2 text-gray-700">
                    <div>
                      <strong>⭐ Rating:</strong> {p.rating} / 5
                    </div>
                    {detailed && (
                      <>
                        <div>
                          <strong>👥 Subscribers:</strong> {p.subscriberCount.toLocaleString()}
                        </div>
                        <div>
                          <strong>💲 Price:</strong> ${p.price.toFixed(2)}
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
                                  toggleFeatureExpand(p.id)
                                }}
                                className="inline-block bg-blue-200 text-blue-900 text-xs font-medium px-3 py-1 rounded-full cursor-pointer select-none"
                                aria-label={`Show all key features for ${p.title}`}
                              >
                                +{moreFeatures} more
                              </button>
                            )}

                            {featureExpanded && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleFeatureExpand(p.id)
                                }}
                                className="inline-block bg-blue-300 text-blue-900 text-xs font-medium px-3 py-1 rounded-full cursor-pointer select-none"
                                aria-label={`Show less key features for ${p.title}`}
                              >
                                Show less
                              </button>
                            )}
                          </div>
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
                                  toggleTechExpand(p.id)
                                }}
                                className="inline-block bg-green-200 text-green-900 text-xs font-medium px-3 py-1 rounded-full cursor-pointer select-none"
                                aria-label={`Show all technologies for ${p.title}`}
                              >
                                +{moreTechs} more
                              </button>
                            )}

                            {techExpanded && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleTechExpand(p.id)
                                }}
                                className="inline-block bg-green-300 text-green-900 text-xs font-medium px-3 py-1 rounded-full cursor-pointer select-none"
                                aria-label={`Show less technologies for ${p.title}`}
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
