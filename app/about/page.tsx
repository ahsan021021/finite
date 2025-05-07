"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Users, Award, Clock, Lightbulb } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import GradientText from "@/components/gradient-text"
import ParticleBackground from "@/components/particle-background"
import ParallaxSection from "@/components/parallax-section"

export default function About() {
  const teamMembers = [
    {
      name: "Hasan Bukhari",
      position: "Founder & CEO",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEK5B_S3Tq-0g/profile-displayphoto-shrink_400_400/B56Zaa3keyGoAg-/0/1746354981328?e=1752105600&v=beta&t=RAJrYAxiI2bHAwTbdmxRQtUSrF-gw2NTRIHSk3fwlb0",
      bio: "With over 10 years of experience in digital innovation, Hasan leads our team with a passion for creating exceptional digital experiences.",
    },
    {
      name: "Murtaza Touqeer",
      position: "Co-Founder & CTO",
      image: "/team/sarah.jpg",
      bio: "Murtaza brings his artistic vision and strategic thinking to every project, ensuring our designs are both beautiful and effective.",
    },
    {
      name: "Syed Aayan Hussain",
      position: "Co-Founder & COO",
      image: "https://instagram.fkhi22-1.fna.fbcdn.net/v/t51.2885-19/293554841_455009222763882_1222720909308006887_n.jpg?_nc_ht=instagram.fkhi22-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QF0fcZvcJT80r84BBlG45QzSV60aLITJQUc1NJlZSpMItkqARFIqSHs0mV5ik3vJvM&_nc_ohc=0Fyw2HOXxuEQ7kNvwEeX7XH&_nc_gid=mBHMU65uefnPsWp0OR1uXQ&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfLouPrDzrNXQs8VpCGTFitOyBzKSKFNgp_MGzJt1Y_Djg&oe=681FD7A2&_nc_sid=7d3ac5",
      bio: "Aayan's technical expertise and problem-solving skills drive the development of our most complex and innovative solutions.",
    },
    {
      name: "Jessica Martinez",
      position: "Marketing Strategist",
      image: "/team/jessica.jpg",
      bio: "Jessica crafts data-driven marketing strategies that help our clients reach their target audiences and achieve their business goals.",
    },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative thinking to solve complex challenges and deliver forward-thinking solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, both within our team and with our clients, to create the best possible outcomes.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We are committed to delivering exceptional quality in everything we do, from design and development to client service.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "We value transparency, accountability, and consistency in our work, ensuring we deliver on our promises every time.",
    },
  ]

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "AenFinite was established with a vision to transform digital experiences for businesses.",
    },
    {
      year: "2019",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered a successful e-commerce platform.",
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Grew our team to include specialists in UI/UX design, mobile development, and digital marketing.",
    },
    {
      year: "2021",
      title: "Office Relocation",
      description: "Moved to our current location in Denver to accommodate our growing team.",
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Started working with clients across North America and Europe, expanding our global footprint.",
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Received industry recognition for our innovative approach to digital solutions.",
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
              About Us
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <GradientText>Our Story and Vision</GradientText>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're a team of passionate digital innovators dedicated to transforming how businesses connect with their
              audiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl shadow-purple-500/10 pillow-effect p-2">
                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593362_1280.jpg" alt="Our Story" className="w-full h-auto rounded-xl" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300 mb-4">
                Our Story
              </div>
              <h2 className="text-4xl font-bold mb-6">
                <GradientText>From Humble Beginnings to Digital Excellence</GradientText>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2018 by Hasan Ahmed, AenFinite began as a small web development studio with a big vision:
                  to create digital experiences that truly matter. What started as a one-person operation quickly grew
                  as our reputation for quality and innovation spread.
                </p>
                <p>
                  Our journey has been defined by continuous learning, adaptation, and a relentless pursuit of
                  excellence. As technology evolved, so did we, expanding our services to include mobile development,
                  UI/UX design, and digital marketing.
                </p>
                <p>
                  Today, AenFinite is a comprehensive digital agency with a diverse team of experts who share a common
                  passion for creating exceptional digital solutions. We've had the privilege of working with clients
                  across various industries, from startups to established enterprises, helping them achieve their
                  digital goals and transform their businesses.
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-4">
                    {teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-full border-2 border-gray-900 overflow-hidden"
                        style={{ zIndex: 10 - index }}
                      >
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-400">
                    Join our team of <span className="text-purple-400">passionate innovators</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
              Our Values
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Principles That Guide Us</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our core values shape everything we do, from how we work together to how we serve our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pillow-effect p-8 h-full"
              >
                <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Team Section */}
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
              Our Team
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Meet the Innovators</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our diverse team of experts brings together a wealth of knowledge and experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pillow-effect p-2 rounded-2xl overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-300 mb-3">{member.position}</p>
                    <p className="text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
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
            <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300 mb-4">
              Our Journey
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <GradientText>Company Milestones</GradientText>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A look at the key moments that have shaped our growth and success
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 ${index % 2 === 0 ? "text-right" : "text-left"}`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "justify-end" : "justify-start"} relative z-10`}>
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    <div className="pillow-effect p-6">
                      <div className="inline-block rounded-lg bg-purple-900/30 px-3 py-1 text-sm text-purple-300 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                Why Choose Us
              </div>
              <h2 className="text-4xl font-bold mb-6">
                <GradientText>What Sets Us Apart</GradientText>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Tailored Solutions</h3>
                    <p className="text-gray-300">
                      We don't believe in one-size-fits-all. Every solution we create is custom-designed to meet your
                      specific needs and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">End-to-End Expertise</h3>
                    <p className="text-gray-300">
                      From strategy and design to development and marketing, we offer comprehensive services under one
                      roof.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Transparent Communication</h3>
                    <p className="text-gray-300">
                      We believe in open, honest communication throughout the project lifecycle, keeping you informed
                      every step of the way.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Results-Driven Approach</h3>
                    <p className="text-gray-300">
                      We focus on delivering measurable results that contribute to your business growth and success.
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
                <img src="/why-choose-us.jpg" alt="Why Choose Us" className="w-full h-auto rounded-xl" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute bottom-1/4 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10"></div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Your Digital Journey?</h2>
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
