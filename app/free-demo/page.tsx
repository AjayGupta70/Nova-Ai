import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
import { DemoForm } from "@/components/demo-form"
import { FloatingContacts, WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata = {
  title: "Book a Free Demo — NovaAi Solution",
  description: "Schedule a demo for our services and products.",
}

export default function FreeDemoPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-4xl px-4 pt-24 pb-12">
        <h1 className="text-3xl font-semibold">Book a Free Demo</h1>
        <p className="mt-2 text-gray-600">Tell us your interest and preferred time.</p>
        <div className="mt-6 rounded-xl border border-gray-200 p-6 bg-white">
          <DemoForm />
        </div>
      </section>
      {/* <Footer /> */}
      <WhatsAppFloat />
           <FloatingContacts />
    </main>
  )
}
