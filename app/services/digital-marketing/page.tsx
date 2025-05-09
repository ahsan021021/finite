"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, BarChart, Target, TrendingUp, Mail, Share2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import GradientText from "@/components/gradient-text"
import ParticleBackground from "@/components/particle-background"

export default function DigitalMarketingClient() {
  const features = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your website's visibility in search engine results to drive organic traffic and increase conversions.",
    },
    {
      icon: Target,
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Strategic paid advertising campaigns that target your ideal customers and deliver measurable ROI.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Engage with your audience and build brand awareness through effective social media strategies and campaigns.",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Nurture leads and maintain customer relationships with personalized, targeted email marketing campaigns.",
    },
    {
      icon: TrendingUp,
      title: "Content Marketing",
      description:
        "Create valuable, relevant content that attracts and engages your target audience while driving business growth.",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description:
        "Comprehensive data analysis and reporting to track performance and continuously optimize your marketing efforts.",
    },
  ]

  const process = [
    {
      title: "Discovery & Analysis",
      description:
        "We start by understanding your business, goals, target audience, and current digital presence through in-depth research and analysis.",
    },
    {
      title: "Strategy Development",
      description:
        "Based on our findings, we create a comprehensive digital marketing strategy tailored to your specific needs and objectives.",
    },
    {
      title: "Implementation",
      description:
        "We execute the strategy across relevant channels, implementing SEO, PPC, content, social media, and email marketing tactics.",
    },
    {
      title: "Monitoring & Optimization",
      description:
        "We continuously monitor campaign performance, making data-driven adjustments to optimize results and maximize ROI.",
    },
    {
      title: "Reporting & Analysis",
      description:
        "Regular reporting and analysis keep you informed about campaign performance, insights, and recommendations for future growth.",
    },
  ]

  const projects = [
    {
      title: "Digital Marketing Campaign",
      description: "A multi-channel marketing campaign that increased client's customer acquisition by 150%.",
      image: "/portfolio/marketing-campaign.jpg",
      link: "/portfolio/marketing-campaign",
    },
    {
      title: "E-commerce SEO Strategy",
      description: "Comprehensive SEO strategy that boosted organic traffic by 200% and sales by 85%.",
      image: "/portfolio/ecommerce-project.jpg",
      link: "/portfolio/ecommerce-platform",
    },
    {
      title: "Social Media Brand Building",
      description: "Social media campaign that increased engagement by 300% and followers by 10,000 in three months.",
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
              Digital Marketing
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <GradientText>Strategic Digital Marketing Solutions</GradientText>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Data-driven strategies to increase your online visibility, engage your audience, and drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Start Your Campaign
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
                <GradientText>Elevate Your Digital Presence</GradientText>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  In today's digital landscape, a strong online presence is essential for business success. Our digital
                  marketing services help you cut through the noise, reach your target audience, and achieve measurable
                  results.
                </p>
                <p>
                  At AenFinite, we take a strategic, data-driven approach to digital marketing. We combine creativity
                  with analytics to develop campaigns that not only capture attention but also drive conversions and
                  deliver ROI.
                </p>
                <p>
                  Whether you're looking to increase brand awareness, generate leads, or boost sales, our comprehensive
                  digital marketing solutions are designed to help you achieve your business goals.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Data-Driven Strategies</h3>
                    <p className="text-gray-400">
                      We use analytics and insights to develop and refine marketing strategies that deliver results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Multi-Channel Approach</h3>
                    <p className="text-gray-400">
                      We leverage multiple digital channels to maximize your reach and engagement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-400 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Measurable Results</h3>
                    <p className="text-gray-400">
                      We provide transparent reporting and focus on metrics that matter to your business.
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
                  src="https://cdn.pixabay.com/photo/2015/09/05/21/13/analytics-925379_1280.jpg"
                  alt="Digital Marketing"
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
              Services
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Comprehensive Digital Marketing Services</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer a full range of digital marketing services to help your business thrive online
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
              Process
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Our Digital Marketing Process</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A structured approach to ensure we deliver high-quality marketing campaigns that meet your business needs
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
              Portfolio
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Featured Marketing Projects</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore some of our successful digital marketing campaigns
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
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Boost Your Online Presence?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Let's collaborate to create a digital marketing strategy that drives results for your business.
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
