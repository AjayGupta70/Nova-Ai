import Link from "next/link"

export function Hero() {
  return (
    <section className="text-center">
      <p className="text-sm font-medium text-emerald-600">Launch faster with AI</p>
      <h1 className="mt-3 text-pretty text-3xl font-bold md:text-5xl">
        Websites, apps, and automations that ship in days—not months
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-balance text-gray-600">
        We craft modern experiences for startups and small teams. Start small, scale with confidence.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link href="/services" className="rounded-md bg-blue-600 px-4 py-2 text-white">
          Explore services
        </Link>
        <Link href="/products" className="rounded-md border border-gray-300 px-4 py-2 text-gray-900">
          View products
        </Link>
      </div>
    </section>
  )
}
