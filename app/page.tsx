"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import Download from "@/components/download"
import Screenshots from "@/components/screenshots"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Download />
      <Screenshots />
      <Stats />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  )
}
