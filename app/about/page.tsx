import Image from "next/image"
import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About — NovaAi Solution",
  description: "Learn about our vision, mission, and team.",
}

export default function AboutPage() {
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
       {/* Team Section */}
<div>
  <h2 className="text-2xl font-semibold text-center mb-8">Our Team</h2>
  <div className="grid gap-6 md:grid-cols-4">
    {[
      { name: "Tony Stark", role: "CEO", img: "/team-member.png" },
      { name: "Tabitha", role: "AI Engineer", img: "/team-member.png" },
      { name: "Tom Cruise", role: "Full Stack Developer", img: "/team-member.png" },
      { name: "chris hemsworth", role: "UI/UX Designer", img: "/team-member.png" },
    ].map((member, i) => (
      <Card
        key={i}
        className="rounded-2xl shadow-md hover:shadow-lg transition text-center p-6"
      >
        <div className="flex justify-center">
          <div className="h-28 w-28 rounded-full overflow-hidden border border-gray-200">
            <Image
              src={member.img}
              alt={member.name}
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
        </div>
        <p className="mt-4 font-medium">{member.name}</p>
        <p className="text-xs text-gray-600">{member.role}</p>
      </Card>
    ))}
  </div>
</div>


        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">Why Choose NovaAi?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center">
              <CardHeader>
                <CardTitle className="text-lg">🚀 Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We bring the latest in AI, automation, and engineering to transform ideas into scalable solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center">
              <CardHeader>
                <CardTitle className="text-lg">🤝 Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  With a team of skilled engineers and AI specialists, we deliver quality at every stage of development.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md hover:shadow-lg transition p-6 text-center">
              <CardHeader>
                <CardTitle className="text-lg">🔒 Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We prioritize security, reliability, and transparency to build lasting relationships with clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CEO, Vision & Office */}
        {/* <div>
          <h2 className="text-2xl font-semibold text-center mb-8">Leadership & Office</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center">
              <CardHeader>
                <CardTitle className="text-lg">CEO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-medium">Ajay Gupta</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center">
              <CardHeader>
                <CardTitle className="text-lg">Vision & Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Empower businesses with AI, automation, and intelligent solutions that create measurable impact.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center">
              <CardHeader>
                <CardTitle className="text-lg">Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  NovaAi Solution, Tech Park, Bengaluru, India
                </p>
              </CardContent>
            </Card>
          </div>
        </div> */}
      </section>
      {/* <Footer /> */}
      <WhatsAppFloat />
    </main>
  )
}
