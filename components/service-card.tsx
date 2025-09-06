import type { Service } from "@/types"
import Link from "next/link"

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="h-36 w-full rounded-lg overflow-hidden mb-3 bg-gray-50">
        <img
          src={service.imageUrl || "/placeholder.svg?height=180&width=320&query=Service%20illustration"}
          alt={`${service.title} image`}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="font-medium">{service.title}</h3>
      <p className="text-sm text-gray-600 mt-1 line-clamp-3">{service.description}</p>
      <div className="mt-3">
        <Link href="/free-demo" className="text-blue-700 text-sm hover:underline">
          Book Now →
        </Link>
      </div>
    </div>
  )
}
