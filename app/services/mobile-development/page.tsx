"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, Smartphone, Tablet, Layers, Zap, Shield, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import GradientText from "@/components/gradient-text"
import ParticleBackground from "@/components/particle-background"

export default function MobileDevelopment() {
  const features = [
    {
      icon: Smartphone,
      title: "iOS App Development",
      description:
        "Native iOS applications built with Swift for iPhones and iPads, delivering exceptional performance and user experience.",
    },
    {
      icon: Tablet,
      title: "Android App Development",
      description:
        "Native Android applications built with Kotlin or Java, optimized for the diverse Android device ecosystem.",
    },
    {
      icon: Layers,
      title: "Cross-Platform Development",
      description:
        "Efficient cross-platform solutions using React Native or Flutter, allowing you to reach both iOS and Android users with a single codebase.",
    },
    {
      icon: Shield,
      title: "Secure Mobile Solutions",
      description:
        "Implementation of robust security measures to protect user data and ensure compliance with privacy regulations.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimization techniques to ensure your app runs smoothly, loads quickly, and provides a responsive user experience.",
    },
    {
      icon: BarChart,
      title: "Analytics Integration",
      description:
        "Integration of analytics tools to track user behavior, measure app performance, and gather insights for continuous improvement.",
    },
  ]

  const technologies = [
    {
      category: "iOS",
      items: ["Swift", "SwiftUI", "UIKit", "Core Data", "ARKit", "Core ML"],
    },
    {
      category: "Android",
      items: ["Kotlin", "Java", "Jetpack Compose", "Room", "ARCore", "TensorFlow Lite"],
    },
    {
      category: "Cross-Platform",
      items: ["React Native", "Flutter", "Ionic", "Xamarin", "Capacitor", "Expo"],
    },
    {
      category: "Backend & APIs",
      items: ["Firebase", "Node.js", "GraphQL", "REST APIs", "WebSockets", "Push Notifications"],
    },
  ]

  const process = [
    {
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and specific requirements for your mobile app.",
    },
    {
      title: "UI/UX Design",
      description:
        "Our designers create wireframes and visual designs that align with your brand and provide an intuitive user experience.",
    },
    {
      title: "Development",
      description:
        "Our development team builds your mobile app using the most appropriate technologies for your specific needs.",
    },
    {
      title: "Testing & QA",
      description:
        "We conduct thorough testing across different devices and operating systems to ensure functionality, performance, and security.",
    },
    {
      title: "Deployment",
      description:
        "We handle the submission process to the App Store and Google Play Store, ensuring compliance with all requirements.",
    },
    {
      title: "Maintenance & Updates",
      description:
        "We provide ongoing maintenance and support to keep your app secure, up-to-date, and performing optimally.",
    },
  ]

  const projects = [
    {
      title: "Fitness Mobile App",
      description:
        "A cross-platform fitness application with workout tracking, nutrition planning, and social features.",
      image: "/portfolio/fitness-app.jpg",
      link: "/portfolio/fitness-app",
    },
    {
      title: "Travel Companion App",
      description: "A feature-rich travel app with itinerary planning, local recommendations, and offline maps.",
      image: "/portfolio/travel-app.jpg",
      link: "/portfolio/travel-companion-app",
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
              Mobile Development
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <GradientText>Innovative Mobile Applications</GradientText>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We create powerful, user-friendly mobile apps that engage users and drive business growth
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
                <GradientText>Mobile Solutions for the Modern World</GradientText>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  In today's mobile-first world, having a strong mobile presence is essential for businesses looking to
                  connect with their audience. A well-designed mobile app can enhance customer engagement, streamline
                  operations, and open new revenue streams.
                </p>
                <p>
                  At AenFinite, we specialize in creating custom mobile applications that deliver exceptional user
                  experiences across iOS and Android platforms. Whether you need a native app for maximum performance or
                  a cross-platform solution for broader reach, our team has the expertise to bring your vision to life.
                </p>
                <p>
                  We take a user-centered approach to mobile development, focusing on intuitive interfaces, smooth
                  performance, and features that provide real value to your users. The result is mobile applications
                  that users love to use and that drive measurable results for your business.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Native & Cross-Platform Expertise</h3>
                    <p className="text-gray-400">
                      Solutions tailored to your specific needs, whether native iOS/Android or cross-platform.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">User-Centered Design</h3>
                    <p className="text-gray-400">
                      Intuitive interfaces and smooth user experiences that keep users engaged with your app.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">End-to-End Service</h3>
                    <p className="text-gray-400">
                      Complete support from concept to deployment and beyond, including app store submission.
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
                  src="https://www.addevice.io/storage/ckeditor/uploads/images/65f840d316353_mobile.app.development.1920.1080.png"
                  alt="Mobile Development"
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
              <GradientText>Comprehensive Mobile Development Services</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer a full range of mobile development services to meet your business needs
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

      {/* Technologies Section */}
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
              Technologies
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Our Mobile Tech Stack</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We use cutting-edge technologies to build powerful, scalable, and secure mobile applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pillow-effect p-8 h-full"
              >
                <h3 className="text-xl font-semibold mb-6 text-white">{tech.category}</h3>
                <ul className="space-y-3">
                  {tech.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
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
              <GradientText>Our Mobile Development Process</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A structured approach to ensure we deliver high-quality mobile applications that meet your business needs
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
              <GradientText>Featured Mobile Projects</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore some of our successful mobile application projects
            </p>
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
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Your Mobile Project?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Let's collaborate to create a mobile application that engages users and drives results for your business.
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
