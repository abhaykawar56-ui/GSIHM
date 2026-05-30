"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Dechen Sherpa",
    role: "Food & Beverage, JW Marquis Dubai",
    course: "Hotel Management 2025",
    image: "/images/testimonial-dechen-sherpa.jpg",
    quote: "The education provided out here in this particular institution is top notch and the employees out here are really cooperative, if you want a friendly environment along with top notch education this is the right place for you. And the placements are beyond expectations, trust me you'll not be disappointed, ps. HIGHLY RECOMMENDED FOR HOSPITALITY STUDENTS.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Front Office Manager, Taj Hotels",
    course: "Hotel Management 2022",
    image: "/images/testimonial-2.jpg",
    quote: "The practical exposure at GSIHM is unmatched. We trained at actual 5-star properties. Today, I manage the front office at Taj, and I credit my success to the foundation GSIHM built.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
            Success Stories
          </p>
          <h2 className="text-balance mb-4">
            Hear From Our Alumni
          </h2>
          <p className="text-navy-muted text-lg">
            Real stories from real graduates building global careers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-cream rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-gold-pale" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-primary text-gold-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-navy-muted leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-navy-deep">{testimonial.name}</p>
                  <p className="text-sm text-gold-primary">{testimonial.role}</p>
                  <p className="text-xs text-navy-muted">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review Widget */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold-primary text-gold-primary" />
              ))}
            </div>
            <span className="font-bold text-navy-deep text-xl">4.9</span>
          </div>
          <p className="text-navy-muted text-sm">Based on 100+ Google Reviews</p>
        </div>
      </div>
    </section>
  )
}
