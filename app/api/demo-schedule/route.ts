export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  const base = process.env.API_BASE_URL
  if (!base) return new Response("Missing API_BASE_URL", { status: 500 })
  const body = await req.text()
  const upstream = await fetch(`${base}/api/v1/demo-schedule/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  })
  const text = await upstream.text()
  return new Response(text, {
    status: upstream.status,
    headers: { "Content-Type": upstream.headers.get("Content-Type") || "application/json" },
  })
}
