import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About — NovaAi Solution",
  description: "Learn about our vision, mission, and team.",
}

// ✅ Fetch only core team members
async function getCoreTeam() {
  const res = await fetch("http://localhost:8080/api/v1/employees/core-team", {
    next: { revalidate: 60 }, // revalidate every 60s
  })
  if (!res.ok) throw new Error("Failed to fetch core team")
  return res.json()
}

export default async function AboutPage() {
  const coreTeam = await getCoreTeam()

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-12 space-y-16">
        {/* Intro */}
        <SectionHeading
          title="About NovaAi Solution"
          subtitle="AI-first innovation for enterprises and startups"
        />
        <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          At NovaAi Solution, we create AI-powered web, mobile, and automation platforms.
          Our mission is to help businesses embrace intelligent technology that scales with their vision.
          With expertise in AI/ML, automation, and full-stack engineering, we are shaping the future of digital transformation.
        </p>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-10">Our Core Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {coreTeam.map((member: any, i: number) => (
              <Card
                key={i}
                className="rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center p-6 bg-white"
              >
                <div className="flex justify-center">
                  <div className="h-28 w-28 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm">
                    <Image
                      src={member.profileImageUrl || "/team-member.png"}
                      alt={member.fullName}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="mt-4 font-semibold text-gray-900">{member.fullName}</p>
                <p className="text-sm text-gray-500">{member.position}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-10">Why Choose NovaAi?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "🚀 Innovation",
                text: "We bring the latest in AI, automation, and engineering to transform ideas into scalable solutions.",
              },
              {
                title: "🤝 Expertise",
                text: "With a team of skilled engineers and AI specialists, we deliver quality at every stage of development.",
              },
              {
                title: "🔒 Trust",
                text: "We prioritize security, reliability, and transparency to build lasting relationships with clients.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center bg-white"
              >
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppFloat />
    </main>
  )
}
