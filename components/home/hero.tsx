"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Users, Briefcase, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-navy-mid overflow-hidden rounded-3xl mx-4 lg:mx-8 mt-8">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <h2 className="text-[180px] lg:text-[280px] font-bold text-white text-center leading-none whitespace-nowrap">
          HOSPITALITY
        </h2>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content Section */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-balance text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ready to Launch Your{" "}
                <span className="text-gold-primary">Dream Career?</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-light max-w-lg leading-relaxed">
                Join India's premier hospitality institute with 100% placement record. Master Aviation, Hotel Management, and Cruise operations with hands-on training from industry experts.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold-primary text-navy-deep hover:bg-gold-soft font-semibold px-8 h-12 rounded-full"
              >
                <Link href="/contact">Explore Programs</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gold-primary text-white hover:bg-white/10 font-semibold px-8 h-12 rounded-full"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right Section - Image and Stats Card */}
          <div className="relative flex justify-center animate-slide-in-right">
            {/* Main Hero Image */}
            <div className="relative w-full max-w-sm">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-cabin-crew.jpg"
                  alt="Airline cabin crew professional"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs animate-float">
                <div className="space-y-4">
                  {/* Stat Item 1 */}
                  <div className="flex items-center gap-3 pb-4 border-b border-navy-light">
                    <div className="w-12 h-12 rounded-lg bg-gold-pale flex items-center justify-center flex-shrink-0">
                      <Star className="h-6 w-6 text-gold-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-navy-deep text-sm">100% Placement</p>
                    </div>
                  </div>

                  {/* Stat Item 2 */}
                  <div className="flex items-center gap-3 pb-4 border-b border-navy-light">
                    <div className="w-12 h-12 rounded-lg bg-aviation-blue/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-aviation-blue" />
                    </div>
                    <div>
                      <p className="font-bold text-navy-deep text-sm">Global Employers</p>
                    </div>
                  </div>

                  {/* Stat Item 3 */}
                  <div className="flex items-center gap-3 pb-4 border-b border-navy-light">
                    <div className="w-12 h-12 rounded-lg bg-cruise-green/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-cruise-green" />
                    </div>
                    <div>
                      <p className="font-bold text-navy-deep text-sm">Internships</p>
                    </div>
                  </div>

                  {/* Stat Item 4 */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-hotel-amber/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-hotel-amber" />
                    </div>
                    <div>
                      <p className="font-bold text-navy-deep text-sm">Career Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
