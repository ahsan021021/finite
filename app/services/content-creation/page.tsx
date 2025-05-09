"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Edit, FileText, Megaphone, Video, Camera, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
const services = [
  {
    title: "Blog Writing",
    description: "Engage your audience with well-researched and compelling blog posts tailored to your niche.",
    icon: <Edit className="w-7 h-7 text-pink-400" />,
    features: ["SEO Optimized", "Engaging Content", "Tailored to Audience"],
  },
  {
    title: "Video Production",
    description: "Create high-quality videos that captivate and inform your audience.",
    icon: <Video className="w-7 h-7 text-pink-400" />,
    features: ["Professional Editing", "High-Resolution", "Custom Branding"],
  },
  {
    title: "Social Media Content",
    description: "Boost your social media presence with creative and engaging posts.",
    icon: <Megaphone className="w-7 h-7 text-pink-400" />,
    features: ["Platform-Specific", "Consistent Branding", "Audience Engagement"],
  },
  {
    title: "Copywriting",
    description: "Persuasive and impactful copy to drive conversions across all your platforms.",
    icon: <FileText className="w-7 h-7 text-pink-400" />,
    features: ["Website & Landing Pages", "Sales Copy", "Clear Calls-to-Action"],
  },
  {
    title: "Content Strategy",
    description: "Plan, organize, and execute a powerful content roadmap aligned with your goals.",
    icon: <Newspaper className="w-7 h-7 text-pink-400" />,
    features: ["Audience Research", "Monthly Calendars", "Performance Tracking"],
  },
  {
    title: "Graphic Design",
    description: "Visually stunning graphics to enhance brand identity and message clarity.",
    icon: <Camera className="w-7 h-7 text-pink-400" />,
    features: ["Custom Visuals", "Social Media Graphics", "Infographics"],
  },
];
export default function ContentCreationClient() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.2),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.2),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
                Content Creation Services
              </h1>
              <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-2xl">
                Engage your audience with compelling, strategic content that drives traffic, builds authority, and
                converts visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0"
                >
                  <Link href="/contact">Request Content Strategy</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://cdn.pixabay.com/photo/2014/02/13/07/28/cms-265127_1280.jpg"
                alt="Content Creation Services"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Content Solutions</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              From blog posts to videos, we create high-quality content that resonates with your audience and aligns
              with your business objectives.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Service Cards */}
{services.map((service, index) => (
  <motion.div
    key={index}
    className="bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700 hover:shadow-xl transition-shadow"
    variants={fadeIn}
  >
    <div className="w-14 h-14 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
    <p className="text-slate-300 mb-4">{service.description}</p>
    <ul className="space-y-2">
      {service.features.map((feature, featureIndex) => (
        <li key={featureIndex} className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <span className="text-slate-300">{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Content That Delivers Results</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our content strategies have helped businesses increase engagement, drive traffic, and generate leads.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Result Cards */}
            {/* Result Cards */}
{[
  {
    percentage: '+135%',
    title: 'Increased Organic Traffic',
    description: 'Our blog strategy helped a SaaS client grow their organic traffic by over 135% in just 3 months.',
  },
  {
    percentage: '+80%',
    title: 'Boosted Social Engagement',
    description: 'Custom video and post content led to an 80% increase in engagement across LinkedIn and Instagram.',
  },
  {
    percentage: '+60%',
    title: 'Improved Lead Conversions',
    description: 'Optimized landing page copy and targeted content raised lead conversion rates by 60%.',
  },
].map((result, index) => (
  <motion.div
    key={index}
    className="bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className="text-5xl font-bold text-pink-400 mb-4">{result.percentage}</div>
    <h3 className="text-xl font-bold mb-2">{result.title}</h3>
    <p className="text-slate-300">{result.description}</p>
  </motion.div>
))}

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Get answers to common questions about our content creation services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* FAQ Cards */}
              {/* FAQ Cards */}
{[
  {
    question: 'What types of content do you create?',
    answer: 'We produce blogs, videos, social media posts, email campaigns, graphics, and more — all tailored to your brand.',
  },
  {
    question: 'How do you ensure content matches our brand voice?',
    answer: 'We conduct a brand audit and collaborate closely with your team to align tone, style, and messaging.',
  },
  {
    question: 'Do you offer SEO services with your content?',
    answer: 'Yes, all written content is SEO-optimized with keyword research and on-page best practices.',
  },
  {
    question: 'Can you handle video editing and production?',
    answer: 'Absolutely — we script, shoot, and edit videos customized for platforms like YouTube, Instagram, and TikTok.',
  },
  {
    question: 'What’s your turnaround time for content?',
    answer: 'Most content is delivered within 5-7 business days, depending on the scope and volume.',
  },
].map((faq, index) => (
  <motion.div
    key={index}
    className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700"
    variants={fadeIn}
  >
    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
    <p className="text-slate-300">{faq.answer}</p>
  </motion.div>
))}

            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}