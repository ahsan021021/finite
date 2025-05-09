"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Palette, BarChart, Smartphone, Globe, ChevronDown, Star } from "lucide-react"
import GradientText from "@/components/gradient-text"
import { AnimatedStars } from "@/components/ui/animated-stars"
import ParallaxSection from "@/components/parallax-section"
import { useEffect, useState } from "react"

// Add Testimonial type
interface Testimonial {
  id: string;
  name: string;
  role?: string | null;
  company?: string | null;
  content: string;
  imageUrl?: string | null;
  rating: number;
  approved?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchProjects() {
    try {
      const response = await fetch("/api/projects");
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchProjects();
}, []);
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch('/api/testimonials');
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications that engage users and drive conversions.",
      link: "/services/web-development",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      link: "/services/mobile-development",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that provide exceptional user experiences.",
      link: "/services/ui-ux-design",
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description: "Data-driven strategies to increase your online visibility and drive growth.",
      link: "/services/digital-marketing",
    },
  ]

  

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <AnimatedStars />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />

        {/* Animated blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 blob bg-purple-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 blob bg-blue-500"></div>

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -top-20 -left-10 w-20 h-20 text-purple-300/20 z-0"
              >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path
                    d="M47.1,-57.8C59.5,-47.8,67.6,-31.5,71.5,-14.2C75.4,3.1,75.1,21.3,67.4,35.6C59.7,49.9,44.7,60.3,28.4,66.2C12.1,72.1,-5.5,73.4,-20.9,68.2C-36.3,63,-49.5,51.3,-58.3,36.9C-67.1,22.5,-71.5,5.5,-69.2,-10.7C-66.9,-26.9,-57.9,-42.3,-45.1,-52.3C-32.3,-62.3,-16.1,-66.9,0.6,-67.6C17.3,-68.3,34.7,-67.9,47.1,-57.8Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </motion.div>

              <div className="pill-tag mb-6 shimmer">Digital Innovation Agency</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                We Create <GradientText>Digital Experiences</GradientText> That Matter
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Transforming ideas into exceptional digital solutions that drive growth and innovation for
                forward-thinking businesses.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gradient-button pill-button neon-glow">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="pill-button border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>

            
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                className="float"
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
              >
                <div className="relative z-10 gradient-border p-1 rounded-3xl overflow-hidden shadow-xl shadow-purple-500/10 neon-glow">
                  <div className="rounded-3xl overflow-hidden">
                    <img
                      src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
                      alt="Digital Experiences"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl -z-10 pulse"></div>
              <div className="absolute bottom-1/4 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10 pulse"></div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-10 -right-10 w-24 h-24 text-blue-300/20 z-0"
              >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path
                    d="M42.7,-62.9C56.8,-53.6,70.8,-42.8,76.8,-28.5C82.8,-14.2,80.8,3.6,74.2,18.8C67.6,34,56.5,46.5,43.1,56.3C29.7,66.1,14.9,73.1,-0.9,74.4C-16.6,75.7,-33.3,71.3,-47.8,62C-62.3,52.7,-74.6,38.5,-79.3,22.1C-84,5.7,-81,-13,-72.4,-27.7C-63.8,-42.4,-49.5,-53.2,-35.6,-62.5C-21.7,-71.8,-8.3,-79.7,3.9,-85.3C16.1,-90.9,28.6,-72.2,42.7,-62.9Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            whileHover={{ scale: 1.2 }}
          >
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="pill-tag mb-4 shimmer">Our Services</div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Comprehensive Digital Solutions</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer a full spectrum of digital services to help your business thrive in the digital landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 h-full hover-lift"
              >
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-6 neon-glow">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link href={service.link} className="text-purple-400 hover:text-purple-300 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="pill-button border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <ParallaxSection className="py-20" speed={0.1}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="float"
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
              >
                <div className="relative z-10 gradient-border p-1 rounded-3xl overflow-hidden shadow-xl shadow-purple-500/10 neon-glow">
                  <div className="rounded-3xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
                      alt="About AenFinite"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl -z-10 pulse"></div>
              <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10 pulse"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="pill-tag mb-4 shimmer">About Us</div>
              <h2 className="text-4xl font-bold mb-6">
                <GradientText>Passionate Digital Innovators</GradientText>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  At AenFinite, we're more than just a digital agency. We're a team of passionate innovators dedicated
                  to transforming how businesses connect with their audiences in the digital world.
                </p>
                <p>
                  Founded in 2018, we've grown from a small team of developers to a comprehensive digital agency with
                  expertise across multiple disciplines. Our journey has been defined by continuous learning,
                  adaptation, and a relentless pursuit of excellence.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center mt-1 mr-3 neon-glow">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Innovation-Driven Approach</h3>
                    <p className="text-gray-400">
                      We embrace cutting-edge technologies and creative thinking to solve complex challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center mt-1 mr-3 neon-glow">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Client-Centered Solutions</h3>
                    <p className="text-gray-400">
                      We develop tailored solutions that align perfectly with your business objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center mt-1 mr-3 neon-glow">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Results-Focused Strategy</h3>
                    <p className="text-gray-400">
                      We measure our success by the tangible results we deliver for our clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button size="lg" className="gradient-button pill-button neon-glow">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Portfolio Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="pill-tag mb-4 shimmer">Our Work</div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Featured Projects</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {loading ? (
    <div className="text-center text-gray-400">Loading projects...</div>
  ) : (
    projects.map((project, index) => (
      <motion.div
        key={project.id || index} // Ensure a unique key
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden gradient-border p-1 rounded-3xl hover-lift"
      >
        <Link href={project.linkUrl || "#"}> {/* Fallback to "#" if link is undefined */}
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={project.imageUrl } // Fallback to placeholder image
              alt={project.title || "Project"} // Fallback to "Project" if title is undefined
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="pill-tag mb-2">{project.technologies || "Uncategorized"}</div> {/* Fallback to "Uncategorized" */}
              <h3 className="text-2xl font-bold text-white mb-2">{project.title || "Untitled Project"}</h3> {/* Fallback to "Untitled Project" */}
              <div className="flex items-center text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Project</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    ))
  )}
</div>

          <div className="mt-12 text-center">
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="pill-button border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="pill-tag mb-4 shimmer">Testimonials</div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>What Our Clients Say</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center text-gray-400">Loading testimonials...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => {
                // Helper: check if imageUrl is a valid URL or base64
                const isValidImage = (url: string | null | undefined): boolean => {
                  if (!url) return false;
                  return url.startsWith('http') || url.startsWith('data:image');
                };
                // Helper: truncate content
                const truncate = (str: string | undefined, n: number) => (str && str.length > n ? str.slice(0, n) + '…' : str);
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-8 hover-lift flex flex-col justify-between min-h-[300px]"
                  >
                    <div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6">{truncate(testimonial.content, 200)}</p>
                    </div>
                    <div className="flex items-center mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 gradient-border p-0.5 bg-gray-800 flex items-center justify-center">
                        <img
                          src={isValidImage(testimonial.imageUrl) ? (testimonial.imageUrl as string) : "/default-avatar.png"}
                          alt={testimonial.name || "Avatar"}
                          className="w-full h-full object-cover rounded-full"
                          onError={e => { e.currentTarget.src = "/default-avatar.png"; }}
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        {(testimonial.role || testimonial.company) && (
                          <p className="text-gray-400 text-sm">
                            {testimonial.role ? testimonial.role : null}
                            {testimonial.role && testimonial.company ? ' at ' : ''}
                            {testimonial.company ? testimonial.company : null}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
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
            className="text-center max-w-3xl mx-auto gradient-border p-1 rounded-3xl"
          >
            <div className="glass-card p-12 rounded-3xl animated-gradient">
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg mb-8 text-gray-300">
                Let's collaborate to bring your digital vision to life. Our team is ready to help you achieve your
                goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="gradient-button pill-button neon-glow">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="pill-button border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
