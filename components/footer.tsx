import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, GitlabIcon as GitHub } from "lucide-react"
import Image from "next/image"
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />

      {/* Top curved shape */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gray-950">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -top-1">
          <path
            fill="#030712"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
        {/* Newsletter Section */}
        <div className="gradient-border p-1 mb-16 max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="gradient-text">Subscribe to Our Newsletter</span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Stay updated with our latest news, insights, and special offers
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input type="email" placeholder="Enter your email" className="pill-input flex-grow px-6 py-3" required />
              <button type="submit" className="gradient-button pill-button flex-shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
               <div className="h-7">
                <Image src="/logo.svg" alt="AenFinite" width={40} height={40} className="h-full w-auto" />
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming ideas into exceptional digital solutions that drive growth and innovation for
              forward-thinking businesses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-3" />
                <a href="mailto:hasan@aenfinite.com" className="text-gray-300 hover:text-white transition-colors">
                  hasan@aenfinite.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-400 mr-3" />
                <a href="tel:+13035551234" className="text-gray-300 hover:text-white transition-colors">
                  +1 (303) 632-9451
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-400 mr-3 mt-1" />
                <span className="text-gray-300">
                1350 Colorado Blvd
                  <br />
                  Denver, CO 80206
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pill-tag inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pill-tag inline-block">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Web Development", href: "/services/web-development" },
                { name: "Mobile Development", href: "/services/mobile-development" },
                { name: "UI/UX Design", href: "/services/ui-ux-design" },
                { name: "Digital Marketing", href: "/services/digital-marketing" },
                { name: "E-commerce Solutions", href: "/services/e-commerce" },
                { name: "Content Creation", href: "/services/content-creation" },
                { name: "SEO Optimization", href: "/services/seo" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pill-tag inline-block">Working Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-gray-300">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-gray-300">By Appointment</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-gray-300">Closed</span>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com/aenfinite" },
                { icon: Twitter, href: "https://twitter.com/aenfinite" },
                { icon: Instagram, href: "https://instagram.com/aenfinite" },
                { icon: Linkedin, href: "https://linkedin.com/company/aenfinite" },
                { icon: GitHub, href: "https://github.com/aenfinite" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <social.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© {currentYear} AenFinite. All rights reserved.</p>
          <div className="flex justify-center md:justify-end space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
