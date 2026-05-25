"use client"

import { Shield, Award, Star, Users } from "lucide-react"

const accreditations = [
  { name: "MSME Registered", icon: Shield },
  { name: "ISO Certified", icon: Award },
  { name: "CVESD Affiliated", icon: Award },
  { name: "Skill India", icon: Users },
]

const stats = [
  { value: "17+", label: "Batches Trained" },
  { value: "4.9★", label: "Google Rating" },
  { value: "4+", label: "MOU Partners" },
  { value: "100%", label: "Placement Rate" },
]

export function TrustBar() {
  return (
    <section className="bg-white py-12 border-y border-navy-light/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Accreditations */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
          {accreditations.map((item) => (
            <div key={item.name} className="flex items-center gap-2 text-navy-muted">
              <item.icon className="h-5 w-5 text-gold-primary" />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Scrolling Stats Ticker */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-16 whitespace-nowrap">
            {[...stats, ...stats, ...stats].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <Star className="h-4 w-4 text-gold-primary" />
                <span className="font-bold text-navy-deep">{stat.value}</span>
                <span className="text-navy-muted text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
