"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Map, Compass } from "lucide-react"
import GradientText from "@/components/gradient-text"

export default function Sitemap() {
  const sitemapData = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Development", href: "/services/mobile-development" },
        { name: "UI/UX Design", href: "/services/ui-ux-design" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "E-commerce", href: "/services/e-commerce" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ]

  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">
              <GradientText>Sitemap</GradientText>
            </h1>
            <div className="hidden md:block">
              <Map className="h-16 w-16 text-purple-400" />
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl -z-10"></div>
              <img src="/sitemap-illustration.png" alt="Sitemap" className="w-full h-auto rounded-xl" />
            </div>
          </div>

          <div className="pillow-effect p-8 space-y-8">
            {sitemapData.map((section, index) => (
              <motion.div
                key={section.title}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <Compass className="h-6 w-6 text-purple-400" />
                  <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors flex items-center"
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
