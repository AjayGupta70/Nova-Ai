import { Code2, Smartphone, Brain, GraduationCap, BookOpen, Car, Mail, Phone, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4 text-sm">
        {/* Brand Section */}
        <div>
          <h4 className="text-white font-semibold text-lg">NovaAI Solution</h4>
          <p className="mt-3 leading-relaxed">
            AI, Web & Mobile Development with automation at the core. <br />
            Empowering businesses with next-gen digital solutions.
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-white font-semibold text-lg">Services</h4>
          <ul className="mt-3 space-y-3">
            <li>
              <a href="/services/web-development" className="flex items-center gap-2 hover:text-white transition-colors">
                <Code2 size={16} /> Web Development
              </a>
            </li>
            <li>
              <a href="/services/mobile-apps" className="flex items-center gap-2 hover:text-white transition-colors">
                <Smartphone size={16} /> Mobile Apps
              </a>
            </li>
            <li>
              <a href="/services/ai-ml" className="flex items-center gap-2 hover:text-white transition-colors">
                <Brain size={16} /> AI / ML
              </a>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h4 className="text-white font-semibold text-lg">Products</h4>
          <ul className="mt-3 space-y-3">
            <li>
              <a href="/products/school-erp" className="flex items-center gap-2 hover:text-white transition-colors">
                <GraduationCap size={16} /> School ERP
              </a>
            </li>
            <li>
              <a href="/products/coaching-erp" className="flex items-center gap-2 hover:text-white transition-colors">
                <BookOpen size={16} /> Coaching ERP
              </a>
            </li>
            <li>
              <a href="/products/cab-management" className="flex items-center gap-2 hover:text-white transition-colors">
                <Car size={16} /> Cab Management
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-white font-semibold text-lg">Contact</h4>
          <ul className="mt-3 space-y-3">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:hello@novaai.com" className="hover:text-white transition-colors">
                hello@novaai.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+1234567890" className="hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              Silicon Valley, CA
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 py-6 border-t border-gray-800 text-xs">
        © {new Date().getFullYear()} NovaAI Solution. All rights reserved.
      </div>
    </footer>
  );
}
