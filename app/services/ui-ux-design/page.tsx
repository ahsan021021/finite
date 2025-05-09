"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, Palette, Layers, Eye, Zap, Users, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import GradientText from "@/components/gradient-text"
import ParticleBackground from "@/components/particle-background"

export default function UiUxDesignClient() {
  const features = [
    {
      icon: Eye,
      title: "User Research & Analysis",
      description:
        "In-depth research to understand your users' needs, behaviors, and pain points, forming the foundation for effective design solutions.",
    },
    {
      icon: Layers,
      title: "Wireframing & Prototyping",
      description:
        "Creation of low and high-fidelity wireframes and interactive prototypes to visualize and test concepts before development.",
    },
    {
      icon: Palette,
      title: "Visual Design",
      description:
        "Crafting visually appealing interfaces with attention to color, typography, and imagery that align with your brand identity.",
    },
    {
      icon: Users,
      title: "User Testing",
      description:
        "Rigorous testing with real users to validate design decisions and identify opportunities for improvement.",
    },
    {
      icon: Zap,
      title: "Interaction Design",
      description:
        "Designing intuitive interactions and animations that enhance usability and create delightful user experiences.",
    },
    {
      icon: BarChart,
      title: "Design Systems",
      description:
        "Development of comprehensive design systems that ensure consistency across your digital products and streamline future design work.",
    },
  ]

  const process = [
    {
      title: "Discovery",
      description:
        "We begin by understanding your business goals, target audience, and project requirements through in-depth consultations.",
    },
    {
      title: "Research",
      description:
        "We conduct user research, competitive analysis, and gather insights to inform our design decisions.",
    },
    {
      title: "Information Architecture",
      description:
        "We organize and structure content to create intuitive navigation and user flows that make sense to your users.",
    },
    {
      title: "Wireframing",
      description:
        "We create low-fidelity wireframes to establish the layout and structure of key screens and user flows.",
    },
    {
      title: "Visual Design",
      description:
        "We develop the visual language, including color schemes, typography, and UI elements that align with your brand.",
    },
    {
      title: "Prototyping",
      description:
        "We build interactive prototypes that simulate the user experience and allow for testing before development.",
    },
    {
      title: "Testing & Iteration",
      description:
        "We conduct usability testing with real users and iterate on the design based on feedback and insights.",
    },
  ]

  const projects = [
    {
      title: "Financial Dashboard",
      description:
        "An intuitive financial dashboard that visualizes complex data for easy decision-making and financial planning.",
      image: "/portfolio/financial-dashboard.jpg",
      link: "/portfolio/financial-dashboard",
    },
    {
      title: "Fitness Mobile App",
      description:
        "A user-friendly fitness application with intuitive workout tracking, nutrition planning, and social features.",
      image: "/portfolio/fitness-app.jpg",
      link: "/portfolio/fitness-app",
    },
    {
      title: "E-commerce Mobile App",
      description: "A feature-rich mobile shopping app with personalized recommendations and seamless checkout.",
      image: "/portfolio/ecommerce-app.jpg",
      link: "/portfolio/ecommerce-mobile-app",
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
              UI/UX Design
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <GradientText>Crafting Exceptional User Experiences</GradientText>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We design beautiful, intuitive interfaces that engage users and drive conversions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Start Your Project
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
                <GradientText>Design That Drives Results</GradientText>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  In today's digital landscape, exceptional user experience is no longer optional—it's essential. Users
                  expect intuitive, engaging, and seamless interactions with digital products, and businesses that
                  deliver on these expectations gain a significant competitive advantage.
                </p>
                <p>
                  At AenFinite, we combine art and science to create user interfaces that not only look beautiful but
                  also function flawlessly. Our user-centered design approach ensures that every element serves a
                  purpose and contributes to a cohesive, intuitive experience that delights users and achieves your
                  business goals.
                </p>
                <p>
                  Whether you're launching a new product, redesigning an existing one, or optimizing specific user
                  flows, our UI/UX design services will help you create digital experiences that users love and that
                  drive measurable results for your business.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">User-Centered Approach</h3>
                    <p className="text-gray-400">
                      We put your users at the center of the design process to create experiences that truly resonate.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Data-Driven Decisions</h3>
                    <p className="text-gray-400">
                      We use research and testing to validate design decisions and optimize for performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Collaborative Process</h3>
                    <p className="text-gray-400">
                      We work closely with you throughout the design process to ensure alignment with your vision.
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
                <img src="https://cdn.pixabay.com/photo/2015/06/01/09/04/samsung-793043_1280.jpg" alt="UI/UX Design" className="w-full h-auto rounded-xl" />
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
              <GradientText>Comprehensive UI/UX Design Services</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer a full range of design services to create exceptional user experiences
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
              <GradientText>Our UI/UX Design Process</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A structured approach to ensure we deliver high-quality design solutions that meet your business needs
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
              <GradientText>Featured UI/UX Projects</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Explore some of our successful UI/UX design projects</p>
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
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Elevate Your User Experience?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Let's collaborate to create intuitive, engaging interfaces that delight your users and drive results.
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
