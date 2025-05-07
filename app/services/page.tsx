"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Globe, Smartphone, Palette, BarChart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import GradientText from "@/components/gradient-text"
import ParticleBackground from "@/components/particle-background"
import ParallaxSection from "@/components/parallax-section"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications that engage users and drive conversions. From responsive designs to complex web platforms, we deliver solutions that meet your business needs.",
      features: [
        "Custom Website Development",
        "Web Application Development",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Apps",
        "API Development & Integration",
      ],
      link: "/services/web-development",
      image: "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android that provide seamless user experiences and drive engagement with your brand.",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform Solutions",
        "Mobile UI/UX Design",
        "App Maintenance & Support",
        "App Store Optimization",
      ],
      link: "/services/mobile-development",
      image: "https://cdn.pixabay.com/photo/2015/05/28/14/38/ux-787980_1280.jpgd",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that provide exceptional user experiences. We focus on creating designs that are not only visually appealing but also functional and user-friendly.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Interaction Design",
        "Usability Testing",
        "Design Systems",
      ],
      link: "/services/ui-ux-design",
      image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description:
        "Data-driven strategies to increase your online visibility and drive growth. We help you reach your target audience and achieve your business goals through effective digital marketing.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising (PPC)",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Analytics & Reporting",
      ],
      link: "/services/digital-marketing",
      image: "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Comprehensive e-commerce solutions that help you sell products online effectively. From storefront design to payment integration, we provide everything you need to succeed in online retail.",
      features: [
        "E-commerce Website Development",
        "Shopping Cart Integration",
        "Payment Gateway Setup",
        "Inventory Management",
        "Product Catalog Management",
        "Order Processing Systems",
      ],
      link: "/services/e-commerce",
      image: "https://cdn.pixabay.com/photo/2016/12/20/22/32/holiday-shopping-1921658_1280.jpg",
    },
  ]

  const process = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, goals, and requirements through in-depth consultations and research.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Our designers create visually appealing and user-friendly interfaces that align with your brand identity.",
    },
    {
      number: "04",
      title: "Development",
      description: "Our development team brings the designs to life, building robust and scalable digital solutions.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "We rigorously test all aspects of your digital product to ensure quality, performance, and security.",
    },
    {
      number: "06",
      title: "Launch",
      description:
        "Once everything is perfect, we launch your digital product and provide ongoing support and maintenance.",
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
              Our Services
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <GradientText>Comprehensive Digital Solutions</GradientText>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We offer a full spectrum of digital services to help your business thrive in the digital landscape
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300 mb-4">
                    {service.title}
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    <GradientText>{service.title}</GradientText>
                  </h2>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={service.link}>
                    <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl shadow-purple-500/10 pillow-effect p-2">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-auto rounded-xl"
                      />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-1/4 -left-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl -z-10"></div>
                    <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <ParallaxSection className="py-20" speed={0.1}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300 mb-4">
              Our Process
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>How We Work</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our structured approach ensures we deliver high-quality solutions that meet your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pillow-effect p-8 h-full"
              >
                <div className="text-4xl font-bold text-purple-500 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Technologies */}
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
              <GradientText>Tools We Use</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust and scalable digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((tech) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (tech % 6) * 0.1 }}
                className="pillow-effect p-4 flex items-center justify-center"
              >
                <img
                  src={`/technologies/tech-${tech}.svg`}
                  alt={`Technology ${tech}`}
                  className="h-12 opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300 mb-4">FAQ</div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Frequently Asked Questions</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our services and process
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How long does it typically take to complete a project?",
                  answer:
                    "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
                },
                {
                  question: "What is your pricing structure?",
                  answer:
                    "We offer both fixed-price and time-and-materials pricing models depending on the nature of your project. For well-defined projects, we typically provide a fixed price quote. For more complex or evolving projects, a time-and-materials approach might be more suitable. We'll discuss the best option for your specific needs during our consultation.",
                },
                {
                  question: "Do you provide ongoing maintenance and support?",
                  answer:
                    "Yes, we offer various maintenance and support packages to ensure your digital product continues to perform optimally after launch. These can include regular updates, security patches, performance monitoring, and content updates. We'll work with you to determine the level of support that best suits your needs.",
                },
                {
                  question: "How do you ensure the quality of your deliverables?",
                  answer:
                    "Quality assurance is integrated into every step of our process. We conduct thorough testing, including functionality testing, compatibility testing, performance testing, and security testing. We also follow industry best practices and standards to ensure our deliverables meet the highest quality benchmarks.",
                },
                {
                  question: "Can you work with our existing systems and technologies?",
                  answer:
                    "Yes, we have experience integrating with a wide range of existing systems and technologies. Whether you need to connect with your CRM, ERP, or other business systems, we can develop custom integrations to ensure seamless data flow and functionality.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="pillow-effect p-6"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Let's collaborate to bring your digital vision to life. Our team is ready to help you achieve your goals.
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
