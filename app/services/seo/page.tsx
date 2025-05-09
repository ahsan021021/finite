"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Search, BarChart, Globe, TrendingUp, Award } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function SeoOptimizationClient() {
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
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(74,222,128,0.2),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.2),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2 text-center md:text-left"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                SEO Optimization Services
              </h1>
              <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-2xl">
                Boost your online visibility and drive organic traffic with our data-driven SEO strategies tailored to
                your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0"
                >
                  <Link href="/contact">Get a Free SEO Audit</Link>
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
                src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg"
                alt="SEO Optimization Services"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive SEO Solutions</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our data-driven approach to SEO helps businesses improve their search engine rankings, increase organic
              traffic, and achieve sustainable growth.
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
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700 hover:shadow-xl transition-shadow"
                variants={fadeIn}
              >
                <div className="w-14 h-14 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Service Title</h3>
                <p className="text-slate-300 mb-4">
                  Description of the service goes here. It should be concise and informative.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Feature 1</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Feature 2</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Feature 3</span>
                  </li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Results That Speak For Themselves</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our SEO strategies have helped businesses achieve significant improvements in their online visibility and
              organic traffic.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Result Cards */}
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-green-400 mb-4">+XX%</div>
                <h3 className="text-xl font-bold mb-2">Result Title</h3>
                <p className="text-slate-300">
                  Description of the result goes here. It should highlight the impact of the service.
                </p>
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
              Get answers to common questions about our SEO services.
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
              {[...Array(5)].map((_, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-bold mb-3">FAQ Question {index + 1}</h3>
                  <p className="text-slate-300">
                    Answer to the FAQ question goes here. It should be clear and concise.
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}