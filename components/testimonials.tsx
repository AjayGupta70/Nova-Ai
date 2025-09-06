const items = [
  { name: "Rohit M.", role: "Founder, EduTech", quote: "NovaAi delivered our ERP on time with exceptional quality." },
  { name: "Shreya P.", role: "COO, Logistics", quote: "Automation suite saved us hours every week." },
  { name: "Vikram S.", role: "CTO, Fintech", quote: "Reliable team with strong AI/ML expertise." },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((t, i) => (
          <figure key={i} className="rounded-xl border border-gray-200 p-4 bg-white">
            <blockquote className="text-sm text-gray-700">“{t.quote}”</blockquote>
            <figcaption className="mt-3 text-sm font-medium">
              {t.name} • <span className="text-gray-600">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
