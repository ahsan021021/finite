"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react"
import GradientText from "@/components/gradient-text"

export default function PrivacyPolicy() {
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
              <GradientText>Privacy Policy</GradientText>
            </h1>
            <div className="hidden md:block">
              <Shield className="h-16 w-16 text-purple-400" />
            </div>
          </div>

          <div className="pillow-effect p-8 space-y-6 text-gray-300">
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl -z-10"></div>
                <img src="/privacy-illustration.png" alt="Privacy Protection" className="w-full h-auto rounded-xl" />
              </div>
            </div>

            <p className="text-lg">Last Updated: May 6, 2025</p>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Lock className="h-6 w-6 text-purple-400 flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
              </div>
              <p>
                At AenFinite ("we," "our," or "us"), we respect your privacy and are committed to protecting your
                personal data. This privacy policy explains how we collect, use, and safeguard your information when you
                visit our website or use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                please do not access the site.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-purple-400 flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
              </div>
              <p>We may collect several types of information from and about users of our website, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">Personal Information:</strong> Name, email address, phone number, and
                  other contact details you provide when filling out forms on our website.
                </li>
                <li>
                  <strong className="text-white">Usage Data:</strong> Information about how you use our website,
                  including your browsing actions and patterns.
                </li>
                <li>
                  <strong className="text-white">Technical Data:</strong> IP address, browser type and version, time
                  zone setting, browser plug-in types and versions, operating system, and platform.
                </li>
                <li>
                  <strong className="text-white">Marketing and Communications Data:</strong> Your preferences in
                  receiving marketing from us and our third parties and your communication preferences.
                </li>
              </ul>
            </section>

            <div className="flex justify-center my-8">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10"></div>
                <img src="/data-protection.png" alt="Data Protection" className="w-full h-auto rounded-xl" />
              </div>
            </div>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Eye className="h-6 w-6 text-purple-400 flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
              </div>
              <p>We use the information we collect about you for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To allow you to participate in interactive features of our website</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our services</li>
                <li>To monitor the usage of our services</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>
                  To provide you with news, special offers, and general information about other goods, services, and
                  events
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-purple-400 flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-white">4. Data Security</h2>
              </div>
              <p>
                We have implemented appropriate security measures to prevent your personal data from being accidentally
                lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors, and other third parties who have a business
                need to know.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it
                for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Your Data Protection Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to request correction of your personal data</li>
                <li>The right to request erasure of your personal data</li>
                <li>The right to object to processing of your personal data</li>
                <li>The right to request restriction of processing your personal data</li>
                <li>The right to request transfer of your personal data</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track the activity on our website and hold certain
                information. Cookies are files with a small amount of data which may include an anonymous unique
                identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
                if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">8. Changes to This Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
              </p>
              <p>
                You are advised to review this privacy policy periodically for any changes. Changes to this privacy
                policy are effective when they are posted on this page.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">9. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at{" "}
                <a href="mailto:privacy@aenfinite.com" className="text-purple-400 hover:text-purple-300">
                  privacy@aenfinite.com
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
