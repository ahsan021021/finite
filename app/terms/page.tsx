"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, FileText, Scale, AlertTriangle, BookOpen } from "lucide-react"
import GradientText from "@/components/gradient-text"

export default function TermsOfService() {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">
              <GradientText>Terms of Service</GradientText>
            </h1>
            <div className="hidden md:block">
              <Scale className="h-16 w-16 text-purple-400" />
            </div>
          </div>

          <div className="pillow-effect p-8 space-y-6 text-gray-300">
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl -z-10"></div>
                <img src="/terms-illustration.png" alt="Terms of Service" className="w-full h-auto rounded-xl" />
              </div>
            </div>

            <p className="text-lg">Last Updated: May 6, 2025</p>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-purple-400 flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
              </div>
              <p>
                Welcome to AenFinite. These Terms of Service ("Terms") govern your use of our website and services
                offered by AenFinite ("we," "our," or "us").
              </p>
              <p>
                By accessing or using our website and services, you agree to be bound by these Terms. If you disagree
                with any part of the terms, you may not access our website or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-purple-400 flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-white">2. Use of Our Services</h2>
              </div>
              <p>
                Our website and services are intended for users who are at least 18 years old. By using our website and
                services, you represent and warrant that you are at least 18 years old and that you have the legal
                capacity to enter into these Terms.
              </p>
              <p>
                You agree to use our website and services only for lawful purposes and in accordance with these Terms.
              </p>
            </section>

            <div className="flex justify-center my-8">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10"></div>
                <img src="/legal-document.png" alt="Legal Document" className="w-full h-auto rounded-xl" />
              </div>
            </div>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-purple-400 flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-white">3. Intellectual Property</h2>
              </div>
              <p>
                The website and its original content, features, and functionality are and will remain the exclusive
                property of AenFinite. Our website is protected by copyright, trademark, and other laws of both the
                United States and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the
                prior written consent of AenFinite.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. User Content</h2>
              <p>
                Our website may allow you to post, link, store, share, and otherwise make available certain information,
                text, graphics, videos, or other material. You are responsible for the content that you post on or
                through our website.
              </p>
              <p>
                By posting content on or through our website, you grant us the right to use, modify, publicly perform,
                publicly display, reproduce, and distribute such content on and through our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Accounts</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                termination of your account on our website.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access our website and for any
                activities or actions under your password.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Links to Other Websites</h2>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by
                AenFinite.
              </p>
              <p>
                AenFinite has no control over, and assumes no responsibility for, the content, privacy policies, or
                practices of any third-party websites or services. You further acknowledge and agree that AenFinite
                shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to
                be caused by or in connection with the use of or reliance on any such content, goods, or services
                available on or through any such websites or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use our website and services will immediately cease. If you wish to
                terminate your account, you may simply discontinue using our website and services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">8. Limitation of Liability</h2>
              <p>
                In no event shall AenFinite, nor its directors, employees, partners, agents, suppliers, or affiliates,
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
                to or use of or inability to access or use our website and services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">9. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the State of Colorado, United
                States, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">10. Changes to These Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will
                provide notice of any changes by posting the new Terms on this page and updating the "Last Updated"
                date.
              </p>
              <p>
                By continuing to access or use our website after those revisions become effective, you agree to be bound
                by the revised terms. If you do not agree to the new terms, please stop using our website and services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@aenfinite.com" className="text-purple-400 hover:text-purple-300">
                  legal@aenfinite.com
                </a>
                .
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
