import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScheduleButton from "@/components/schedule-button"

const inter = Inter({ subsets: ["latin"] })



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
