"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import GradientText from "@/components/gradient-text"
import ParticleBackground from "@/components/particle-background"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      })

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hasan@aenfinite.com",
      description: "For general inquiries and information",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (303) 632 9451",
      description: "Monday to Friday, 9am to 5pm MST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "1350 Colorado Blvd Denver, CO 80206",
      description: "By appointment only",
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
              Contact Us
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <GradientText>Get in Touch With Us</GradientText>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have a question or ready to start your project? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pillow-effect p-8 text-center"
              >
                <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-purple-300 mb-2">{item.details}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="pillow-effect p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>

              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Message Sent Successfully!</h3>
                  <p className="text-gray-300 mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-300">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-gray-800/50 border-gray-700 text-white focus:border-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-gray-300">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-gray-800/50 border-gray-700 text-white focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm text-gray-300">
                        Phone Number (Optional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (123) 456-7890"
                        className="bg-gray-800/50 border-gray-700 text-white focus:border-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm text-gray-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        className="bg-gray-800/50 border-gray-700 text-white focus:border-purple-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-300">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      required
                      rows={6}
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-purple-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full py-6"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="pillow-effect p-2 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.12937391752!2d-104.99519863183581!3d39.76451867226484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1651258254537!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>

              <div className="pillow-effect p-8 space-y-6">
                <h3 className="text-xl font-semibold text-white">Additional Information</h3>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Business Hours</h4>
                    <p className="text-gray-400 text-sm">Monday - Friday: 9:00 AM - 5:00 PM MST</p>
                    <p className="text-gray-400 text-sm">Saturday - Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Response Time</h4>
                    <p className="text-gray-400 text-sm">We typically respond to inquiries within 24 business hours.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <h4 className="text-white font-medium mb-3">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://twitter.com/aenfinite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/company/aenfinite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/aenfinite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/aenfinite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                    >
                      <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
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
                  question: "What is your typical project timeline?",
                  answer:
                    "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
                },
                {
                  question: "How do you handle project pricing?",
                  answer:
                    "We offer both fixed-price and time-and-materials pricing models depending on the nature of your project. For well-defined projects, we typically provide a fixed price quote. For more complex or evolving projects, a time-and-materials approach might be more suitable. We'll discuss the best option for your specific needs during our consultation.",
                },
                {
                  question: "Do you provide ongoing support after project completion?",
                  answer:
                    "Yes, we offer various maintenance and support packages to ensure your digital product continues to perform optimally after launch. These can include regular updates, security patches, performance monitoring, and content updates. We'll work with you to determine the level of support that best suits your needs.",
                },
                {
                  question: "What information do you need to provide a quote?",
                  answer:
                    "To provide an accurate quote, we typically need information about your project goals, target audience, desired features and functionality, design preferences, timeline, and budget constraints. The more details you can provide, the more accurate our estimate will be.",
                },
                {
                  question: "Do you work with clients remotely?",
                  answer:
                    "Yes, we work with clients globally and have established effective remote collaboration processes. We use various tools for communication, project management, and file sharing to ensure smooth collaboration regardless of location.",
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
    </div>
  )
}
