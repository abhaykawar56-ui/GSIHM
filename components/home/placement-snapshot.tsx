"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

const partnerLogos = [
  { name: "IndiGo", logo: "/logos/indigo.svg" },
  { name: "Air India", logo: "/logos/airindia.svg" },
  { name: "Emirates", logo: "/logos/emirates.svg" },
  { name: "Qatar Airways", logo: "/logos/qatar.svg" },
  { name: "Vistara", logo: "/logos/vistara.svg" },
  { name: "SpiceJet", logo: "/logos/spicejet.svg" },
  { name: "AirAsia", logo: "/logos/airasia.svg" },
  { name: "Go First", logo: "/logos/gofirst.svg" },
  { name: "Taj Hotels", logo: "/logos/taj.svg" },
  { name: "Oberoi", logo: "/logos/oberoi.svg" },
  { name: "ITC Hotels", logo: "/logos/itc.svg" },
  { name: "Hilton", logo: "/logos/hilton.svg" },
  { name: "Marriott", logo: "/logos/marriott.svg" },
  { name: "Hyatt", logo: "/logos/hyatt.svg" },
  { name: "Radisson", logo: "/logos/radisson.svg" },
  { name: "Lemon Tree", logo: "/logos/lemontree.svg" },
  { name: "Carnival Cruises", logo: "/logos/carnival.svg" },
  { name: "Royal Caribbean", logo: "/logos/royalcaribbean.svg" },
  { name: "Norwegian", logo: "/logos/norwegian.svg" },
  { name: "MSC Cruises", logo: "/logos/msc.svg" },
  { name: "Princess Cruises", logo: "/logos/princess.svg" },
  { name: "Celebrity Cruises", logo: "/logos/celebrity.svg" },
]

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [isVisible, end, duration])

  return <span ref={ref}>{count}</span>
}

export function PlacementSnapshot() {
  return (
    <section className="py-20 lg:py-28 bg-navy-deep section-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Our Track Record
          </p>
          <h2 className="text-white text-balance mb-4">
            100% Placement Success
          </h2>
          <p className="text-navy-light text-lg">
            Our students work at the world&apos;s most prestigious hospitality brands.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-gold-primary">
              <AnimatedCounter end={100} />%
            </p>
            <p className="text-navy-light mt-2">Placement Rate</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-gold-primary">
              <AnimatedCounter end={3000} />+
            </p>
            <p className="text-navy-light mt-2">Students Placed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-gold-primary">
              <AnimatedCounter end={4} />+
            </p>
            <p className="text-navy-light mt-2">MOU Partners</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-gold-primary">
              <AnimatedCounter end={17} />+
            </p>
            <p className="text-navy-light mt-2">Batches Completed</p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="border-t border-navy-mid pt-12">
          <p className="text-center text-navy-light text-sm mb-8">
            Our students are hired by leading brands
          </p>
          <div
            className="marquee-track relative overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="marquee flex w-max flex-nowrap items-center gap-4">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center justify-center h-12 w-32 md:w-40 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={100}
                    height={40}
                    className="object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
