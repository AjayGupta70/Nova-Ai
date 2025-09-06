export const dynamic = "force-dynamic"

export async function GET() {
  const base = process.env.API_BASE_URL
  if (!base) return new Response("Missing API_BASE_URL", { status: 500 })
  const upstream = await fetch(`${base}/api/v1/my-new-services/getAll`, { cache: "no-store" })
  const data = await upstream.json().catch(() => ({}))
  return Response.json(data, { status: upstream.status })
}
