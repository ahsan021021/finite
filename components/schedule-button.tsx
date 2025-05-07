"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, X, ArrowUp } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function ScheduleButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll to show/hide the scroll-to-top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center items-center pb-6">
        <div className="flex flex-col items-center gap-4">
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="bg-gray-800/80 text-white p-3 rounded-full hover:bg-gray-700 transition-colors shadow-lg"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}

          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Schedule Meeting</span>
            </div>
          </motion.button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 rounded-3xl overflow-hidden border-0">
          <div className="relative h-[600px] w-full">
            <div className="absolute top-2 right-2 z-50">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-900/80 text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <iframe
              src="https://calendly.com/aenfinite/business-meeting"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule Meeting"
              className="rounded-3xl"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
