import type { Product } from "@/types"
import Link from "next/link"

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="h-36 w-full rounded-lg overflow-hidden mb-3 bg-gray-50">
        <img
          src={product.imageUrl || "/placeholder.svg?height=180&width=320&query=Product%20screenshot"}
          alt={`${product.title} image`}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="font-medium">{product.title}</h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-3">{product.description}</p>
      <div className="mt-3">
        <Link href="/free-demo" className="text-blue-700 text-sm hover:underline">
          Book Now →
        </Link>
      </div>
    </div>
  )
}
