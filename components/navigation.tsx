"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  // Add scroll progress indicator
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Development", href: "/services/mobile-development" },
        { name: "UI/UX Design", href: "/services/ui-ux-design" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "E-commerce", href: "/services/e-commerce" },
      ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/80 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <div className="flex items-center">
              <div className="h-7">
  <Image src="/logo.svg" alt="AenFinite" width={40} height={40} className="h-full w-auto" />
</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                if (item.submenu) {
                  return (
                    <div key={item.name} className="relative group">
                      <button
                        className={`px-5 py-2 rounded-full text-sm font-medium flex items-center transition-colors ${
                          pathname === item.href || pathname.startsWith(`${item.href}/`)
                            ? "bg-purple-900/50 text-white"
                            : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div className="glass-card p-2 rounded-3xl">
                          <div className="py-1">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className={`block px-4 py-2 text-sm rounded-full ${
                                  pathname === subitem.href
                                    ? "bg-purple-900/50 text-white"
                                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                                }`}
                                onClick={closeMenu}
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-purple-900/50 text-white"
                        : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/contact">
                <Button size="sm" className="gradient-button pill-button">
                  Schedule a Meeting
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-10 p-2 rounded-full bg-gray-800/50 text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-6 py-4">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => {
                    if (item.submenu) {
                      return (
                        <div key={item.name} className="space-y-2">
                          <div
                            className={`px-5 py-2 rounded-full text-sm font-medium ${
                              pathname === item.href || pathname.startsWith(`${item.href}/`)
                                ? "bg-purple-900/50 text-white"
                                : "text-gray-300"
                            }`}
                          >
                            {item.name}
                          </div>
                          <div className="pl-4 space-y-2">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className={`block px-5 py-2 text-sm rounded-full ${
                                  pathname === subitem.href
                                    ? "bg-purple-900/30 text-white"
                                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                }`}
                                onClick={closeMenu}
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    }

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`px-5 py-2 rounded-full text-sm font-medium ${
                          pathname === item.href
                            ? "bg-purple-900/50 text-white"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`}
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </nav>

                <div className="mt-6">
                  <Link href="/contact" onClick={closeMenu}>
                    <Button className="w-full gradient-button pill-button">Schedule a Meeting</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
