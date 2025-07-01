import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GenLayer AI - Transforming Business with Intelligent Solutions",
  description:
    "Harness the power of AI for content generation, image enhancement, and data analysis. Professional AI solutions for modern businesses.",
  keywords: "AI, artificial intelligence, content generation, image enhancement, data analysis, business solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
