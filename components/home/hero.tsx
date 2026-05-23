"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  const partners = "INDIGO · TAJ HOTELS · CARNIVAL CRUISES · AIR INDIA · MARRIOTT · ITC HOTELS · MSC CRUISES · SPICEJET · HILTON · CELEBRITY CRUISES"

  return (
    <section className="relative">
      {/* Zone 1 - Ticker Bar */}
      <div className="w-full h-11 bg-navy-deep flex items-center overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-gold-primary text-xs font-bold tracking-widest px-8 inline-block">
            {partners} · {partners}
          </span>
        </div>
      </div>

      {/* Zone 2 - Main Hero */}
      <section className="min-h-screen flex items-center justify-center bg-cream px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 bg-navy-deep text-white px-4 py-2 rounded-full text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot"></div>
              <span>50+ Active MOU Partners</span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-navy-deep leading-tight">
              Not Just a Degree.{" "}
              <span className="text-gold-primary">A Career Guarantee.</span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-navy-muted max-w-2xl mx-auto leading-relaxed">
            Join 5000+ alumni working at the world&apos;s most prestigious hospitality brands. Aviation. Hotels. Cruise Lines.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gold-primary text-navy-deep hover:bg-gold-soft font-semibold px-8 h-12 rounded-lg"
            >
              <Link href="/contact">Apply Now</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-navy-deep hover:bg-transparent font-semibold px-8 h-12"
            >
              <Link href="/courses">Explore Programs →</Link>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
            <div className="border border-navy-light rounded-lg p-6 bg-white">
              <p className="text-3xl font-bold text-navy-deep">100%</p>
              <p className="text-sm text-navy-muted mt-2">Placement Rate</p>
            </div>
            <div className="border border-navy-light rounded-lg p-6 bg-white">
              <p className="text-3xl font-bold text-navy-deep">₹8L</p>
              <p className="text-sm text-navy-muted mt-2">Avg. Package</p>
            </div>
            <div className="border border-navy-light rounded-lg p-6 bg-white">
              <p className="text-3xl font-bold text-navy-deep">12+</p>
              <p className="text-sm text-navy-muted mt-2">Countries</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
