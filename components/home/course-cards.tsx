"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Plane, Building2, Ship } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const courses = [
  {
    id: "aviation",
    title: "Aviation",
    subtitle: "Cabin Crew & Ground Staff",
    description: "Soar to new heights with our comprehensive aviation training program. Become a cabin crew member or ground staff at leading airlines.",
    duration: "12 Months",
    eligibility: "10+2 Pass",
    icon: Plane,
    image: "/images/aviation-course.jpg",
    color: "aviation",
    careers: ["Cabin Crew", "Ground Staff", "Customer Service"],
  },
  {
    id: "hotel",
    title: "Hotel Management",
    subtitle: "Luxury Hospitality Training",
    description: "Master the art of hospitality with hands-on training at 5-star properties. From front desk to F&B management.",
    duration: "18 Months",
    eligibility: "10+2 Pass",
    icon: Building2,
    image: "/images/hotel-course.jpg",
    color: "hotel",
    careers: ["Front Office", "F&B Service", "Housekeeping Manager"],
  },
  {
    id: "cruise",
    title: "Cruise Management",
    subtitle: "International Waters Career",
    description: "Embark on a global adventure with our cruise management program. Work on luxury cruise liners worldwide.",
    duration: "12 Months",
    eligibility: "10+2 Pass",
    icon: Ship,
    image: "/images/cruise-course.jpg",
    color: "cruise",
    careers: ["Cruise Steward", "Guest Relations", "Entertainment Staff"],
  },
]

export function CourseCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Our Programs
          </p>
          <h2 className="text-balance mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-navy-muted text-lg">
            Three world-class programs designed to launch your career in the global hospitality industry.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <course.icon className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold">{course.title}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-deep mb-1">{course.title}</h3>
                <p className="text-sm text-gold-primary font-medium mb-3">{course.subtitle}</p>
                <p className="text-navy-muted text-sm mb-4 line-clamp-2">{course.description}</p>

                {/* Details - Show on Hover */}
                <div className={cn(
                  "space-y-3 overflow-hidden transition-all duration-300",
                  hoveredIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="flex justify-between text-sm py-2 border-t border-navy-light">
                    <span className="text-navy-muted">Duration</span>
                    <span className="font-medium text-navy-deep">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-navy-muted">Eligibility</span>
                    <span className="font-medium text-navy-deep">{course.eligibility}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  variant="ghost"
                  className="w-full mt-4 text-navy-deep hover:text-gold-primary hover:bg-gold-pale group/btn"
                >
                  <Link href={`/courses#${course.id}`}>
                    Explore Program
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
