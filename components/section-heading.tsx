export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle ? <p className="text-sm text-gray-600 mt-1">{subtitle}</p> : null}
    </div>
  )
}
