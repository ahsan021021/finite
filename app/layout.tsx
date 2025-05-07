import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScheduleButton from "@/components/schedule-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AenFinite - Digital Innovation Agency",
  description:
    "Transforming ideas into exceptional digital solutions that drive growth and innovation for forward-thinking businesses.",
  keywords: "digital agency, web development, mobile development, UI/UX design, digital marketing, Denver, Colorado",
  authors: [{ name: "AenFinite", url: "https://aenfinite.com" }],
  creator: "AenFinite",
  publisher: "AenFinite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aenfinite.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AenFinite - Digital Innovation Agency",
    description: "Transforming ideas into exceptional digital solutions that drive growth and innovation.",
    url: "https://aenfinite.com",
    siteName: "AenFinite",
    images: [
      {
        url: "https://aenfinite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AenFinite - Digital Innovation Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AenFinite - Digital Innovation Agency",
    description: "Transforming ideas into exceptional digital solutions that drive growth and innovation.",
    images: ["https://aenfinite.com/twitter-image.jpg"],
    creator: "@aenfinite",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-950 text-gray-100 min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
            <ScheduleButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
