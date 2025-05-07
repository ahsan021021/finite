"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"
import GradientText from "@/components/gradient-text"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl -z-10"></div>
            <img src="/404-illustration.png" alt="Page Not Found" className="w-full max-w-md mx-auto h-auto" />
          </div>

          <div className="relative mt-8 mb-4 inline-block">
            <div className="text-[150px] font-bold text-gray-800">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[150px] font-bold gradient-text">404</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold">
            <GradientText>Page Not Found</GradientText>
          </h1>

          <p className="text-xl text-gray-300 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="pillow-effect p-8 space-y-4">
            <p className="text-gray-300">Here are some helpful links:</p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/">
                <Button className="gradient-button pill-button">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  className="pill-button border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to the homepage
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
