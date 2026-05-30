"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-cream overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0A1628 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm">
                100% Placement Record Since 2018
              </p>
              <h1 className="text-balance">
                Launch Your Career in{" "}
                <span className="text-gold-primary">Global Hospitality</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-muted max-w-xl leading-relaxed">
                Transform your passion into a prestigious career. Join India&apos;s leading hospitality institute for Aviation, Hotel Management, and Cruise training with guaranteed placements.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold-primary text-navy-deep hover:bg-gold-soft font-semibold px-8 h-12"
              >
                <Link href="/contact">Apply Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-navy-mid text-navy-deep hover:bg-navy-light/50 font-semibold px-8 h-12"
              >
                <Link href="/about" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Watch Our Story
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <p className="text-3xl font-bold text-navy-deep">17+</p>
                <p className="text-sm text-navy-muted">Batches trained and placed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-navy-deep">4.9</p>
                <p className="text-sm text-navy-muted">Google Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-navy-deep">4+</p>
                <p className="text-sm text-navy-muted">MOU Partners</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-hospitality.jpg"
                alt="Hospitality professionals in luxury hotel setting"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-pale flex items-center justify-center">
                  <span className="text-gold-primary font-bold text-lg">3k+</span>
                </div>
                <div>
                  <p className="font-semibold text-navy-deep text-sm">Students Placed</p>
                  <p className="text-xs text-navy-muted">Globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
