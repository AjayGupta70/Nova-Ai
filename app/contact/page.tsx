import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingContacts, WhatsAppFloat } from "@/components/whatsapp-float"
import { SectionHeading } from "@/components/section-heading"

export const metadata = {
  title: "Contact — NovaAi Solution",
  description: "Get in touch with our team.",
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pt-24 pb-20">
        {/* Heading */}
        <SectionHeading
          title="Contact Us"
          subtitle="We’d love to hear from you — let’s build something amazing together"
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-900">Send us a message</h2>
            <form className="mt-6 grid gap-4">
              <input
                name="name"
                placeholder="Your Name"
                required
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="rounded-xl bg-blue-600 text-white px-6 py-3 text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md hover:shadow-lg transition">
              <h2 className="text-lg font-semibold text-gray-900">Get in Touch</h2>
              <div className="mt-4 text-sm text-gray-700 space-y-2">
                <p>
                  📧 Email:{" "}
                  <a
                    className="text-blue-600 hover:underline"
                    href="mailto:theajaygupta7071@gmail.com"
                  >
                    theajaygupta7071@gmail.com
                  </a>
                </p>
                <p>
                  📞 Phone:{" "}
                  <a className="text-blue-600 hover:underline" href="tel:+917071011152">
                    +91 7071011152
                  </a>
                </p>
                <p>📍 Address: NovaAi Solution, Tech Park, Bengaluru, India</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md h-[300px]">
              <iframe
                title="Map to NovaAi Solution"
                src="https://maps.google.com/maps?q=Bengaluru%20Tech%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <WhatsAppFloat />
           <FloatingContacts />
    </main>
  )
}
