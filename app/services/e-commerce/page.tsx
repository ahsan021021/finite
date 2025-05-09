"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, ShoppingCart, CreditCard, Package, BarChart, Truck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import GradientText from "@/components/gradient-text"
import ParticleBackground from "@/components/particle-background"

export default function EcommerceClient() {
  const features = [
    {
      icon: ShoppingCart,
      title: "E-commerce Website Development",
      description:
        "Custom online stores designed to showcase your products and provide a seamless shopping experience.",
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description: "Secure payment processing solutions that support multiple payment methods and currencies.",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Robust inventory systems to track stock levels, manage products, and automate reordering processes.",
    },
    {
      icon: Users,
      title: "Customer Account Management",
      description: "User-friendly account systems that enhance the shopping experience and build customer loyalty.",
    },
    {
      icon: Truck,
      title: "Order Processing & Fulfillment",
      description: "Streamlined order management systems to ensure efficient processing, shipping, and delivery.",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics to track sales, customer behavior, and other key performance indicators.",
    },
  ]

  const platforms = [
    {
      name: "Shopify",
      description:
        "A complete e-commerce platform that lets you start, grow, and manage your business with built-in marketing tools and insights.",
      image: "https://cdn.iconscout.com/icon/free/png-256/free-shopify-logo-icon-download-in-svg-png-gif-file-formats--online-shopping-brand-logos-pack-icons-226579.png?f=webp&w=256",
    },
    {
      name: "WooCommerce",
      description:
        "A customizable, open-source e-commerce platform built on WordPress, perfect for businesses that need flexibility.",
      image: "https://brandlogo.org/wp-content/uploads/2025/02/WooCommerce-App-Icon-2025.png.webp",
    },
    {
      name: "Magento",
      description:
        "A powerful e-commerce platform with enterprise-level features for businesses with complex requirements.",
      image: "https://cdn.iconscout.com/icon/free/png-256/free-magento-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-1-pack-logos-icons-3030040.png?f=webp&w=256",
    },
    {
      name: "Custom Solutions",
      description:
        "Bespoke e-commerce platforms built from the ground up to meet your specific business needs and requirements.",
      image: "https://cdn-icons-png.flaticon.com/512/3029/3029478.png",
    },
  ]

  const process = [
    {
      title: "Discovery & Planning",
      description:
        "We start by understanding your business, products, target audience, and specific requirements for your e-commerce platform.",
    },
    {
      title: "Design & Prototyping",
      description:
        "Our designers create wireframes and visual designs that align with your brand and provide an optimal shopping experience.",
    },
    {
      title: "Development",
      description:
        "Our development team builds your e-commerce platform, integrating payment gateways, inventory systems, and other required features.",
    },
    {
      title: "Testing & QA",
      description:
        "We conduct thorough testing to ensure functionality, performance, security, and a seamless checkout process.",
    },
    {
      title: "Launch & Training",
      description:
        "Once everything is perfect, we launch your e-commerce platform and provide training on how to manage it effectively.",
    },
    {
      title: "Ongoing Support",
      description:
        "We provide ongoing maintenance and support to keep your e-commerce platform secure, up-to-date, and performing optimally.",
    },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A comprehensive e-commerce solution with advanced product filtering, secure payment processing, and inventory management.",
      image: "/portfolio/ecommerce-project.jpg",
      link: "/portfolio/ecommerce-platform",
    },
    {
      title: "E-commerce Mobile App",
      description: "A feature-rich mobile shopping app with personalized recommendations and seamless checkout.",
      image: "/portfolio/ecommerce-app.jpg",
      link: "/portfolio/ecommerce-mobile-app",
    },
    {
      title: "Luxury Brand Website",
      description:
        "An immersive e-commerce website for a luxury brand with stunning visuals and seamless user experience.",
      image: "/portfolio/luxury-brand.jpg",
      link: "/portfolio/luxury-brand-website",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300 mb-6">
              E-commerce Solutions
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <GradientText>Powerful E-commerce Solutions</GradientText>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive e-commerce platforms that help you sell products online effectively and grow your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Start Your Online Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300 mb-4">
                Overview
              </div>
              <h2 className="text-4xl font-bold mb-6">
                <GradientText>Transform Your Retail Business</GradientText>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  In today's digital marketplace, having a robust e-commerce presence is essential for retail businesses
                  looking to thrive. Our e-commerce solutions help you create an online shopping experience that
                  attracts customers, drives sales, and builds brand loyalty.
                </p>
                <p>
                  At AenFinite, we understand that every e-commerce business has unique needs. Whether you're launching
                  your first online store or looking to upgrade an existing platform, we provide tailored solutions that
                  align with your business goals and customer expectations.
                </p>
                <p>
                  From user-friendly storefronts to secure payment processing and efficient inventory management, our
                  comprehensive e-commerce solutions cover all aspects of online retail to help your business succeed in
                  the digital marketplace.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">User-Friendly Shopping Experience</h3>
                    <p className="text-gray-400">
                      Intuitive interfaces and smooth checkout processes that enhance customer satisfaction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Secure & Reliable Platforms</h3>
                    <p className="text-gray-400">
                      Robust security measures to protect customer data and ensure safe transactions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Scalable Solutions</h3>
                    <p className="text-gray-400">
                      E-commerce platforms that can grow and evolve with your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl shadow-purple-500/10 pillow-effect p-2">
                <img
                  src="https://cdn.pixabay.com/photo/2018/08/09/14/01/ecommerce-3594580_1280.jpg"
                  alt="E-commerce Solutions"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute bottom-1/4 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300 mb-4">
              Features
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Comprehensive E-commerce Services</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer a full range of e-commerce services to help your business succeed online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pillow-effect p-8 h-full"
              >
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300 mb-4">
              Platforms
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>E-commerce Platforms We Work With</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We specialize in developing on various e-commerce platforms to meet your specific business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pillow-effect p-8 h-full"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                    <img src={platform.image || "/placeholder.svg"} alt={platform.name} className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{platform.name}</h3>
                </div>
                <p className="text-gray-400">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300 mb-4">
              Process
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Our E-commerce Development Process</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A structured approach to ensure we deliver high-quality e-commerce solutions that meet your business needs
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center border-2 border-purple-500 text-white font-bold">
                      {index + 1}
                    </div>
                    {index < process.length - 1 && (
                      <div className="absolute top-12 bottom-0 left-6 w-0.5 bg-purple-500/30 -z-10"></div>
                    )}
                  </div>
                  <div className="pillow-effect p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300 mb-4">
              Portfolio
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Featured E-commerce Projects</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Explore some of our successful e-commerce projects</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl pillow-effect p-2"
              >
                <Link href={project.link}>
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                      <div className="flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>View Project</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto pillow-effect p-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Launch Your Online Store?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Let's collaborate to create an e-commerce solution that drives sales and growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
