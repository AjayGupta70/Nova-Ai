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

export default function ProductsPageClient({ detailed = true }) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
            {products.map((p) => (
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
                        <ul className="list-disc list-inside pl-2">
                          {p.keyFeatures.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <strong>🛠️ Technologies:</strong>
                        <ul className="list-disc list-inside pl-2">
                          {p.technologies.map((tech, idx) => (
                            <li key={idx}>{tech}</li>
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
