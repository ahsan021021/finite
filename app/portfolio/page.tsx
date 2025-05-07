"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import GradientText from "@/components/gradient-text"
import ParticleBackground from "@/components/particle-background"

export default function Portfolio() {
  const categories = ["All", "Web Development", "Mobile Development", "UI/UX Design", "E-commerce", "Digital Marketing"]
  const [activeCategory, setActiveCategory] = useState("All")
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects")
        if (!response.ok) {
          throw new Error("Failed to fetch projects")
        }
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error("Error fetching projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.technologies.includes(activeCategory))

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-300">Loading projects...</div>
      </div>
    )
  }

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
              Our Portfolio
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <GradientText>Showcasing Our Creative Excellence</GradientText>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our diverse portfolio of successful projects that demonstrate our expertise and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl pillow-effect p-2"
              >
                <Link href={`/portfolio/${project.id}`}>
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
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
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Let's collaborate to bring your digital vision to life. Our team is ready to help you achieve your goals
              with innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Start a Project
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
