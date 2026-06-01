"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Quote, Award, Shield, Star, Users, X } from "lucide-react"
import { cn } from "@/lib/utils"

const faculty = [
  {
    name: "Roshan Shahi Thakuri",
    role: "Director & Founder",
    description: "With over 25 years in the hospitality industry, Dr. Kumar founded GSIHM to bridge the gap between education and industry. He holds an MBA and PhD in Hospitality Management and has trained thousands of professionals across India.",
    image: "/images/faculty-1.jpg",
  },
  {
    name: "Sunita Mehta",
    role: "Head - Aviation Training",
    description: "A former Training Manager at IndiGo with 15 years of airline experience, Sunita leads our aviation program. She specializes in cabin crew grooming, in-flight safety, and airline service standards.",
    image: "/images/faculty-2.jpg",
  },
  {
    name: "John D'Souza",
    role: "Head - Hotel Management",
    description: "Ex-General Manager at Taj Hotels with 20 years in luxury hospitality, John brings real-world expertise to our hotel management curriculum covering front office, F&B, and housekeeping operations.",
    image: "/images/faculty-3.jpg",
  },
  {
    name: "Priya Nair",
    role: "Head - Cruise Management",
    description: "With 12 years of experience aboard international cruise liners including Carnival and Royal Caribbean, Priya trains students in guest relations, onboard service, and maritime hospitality standards.",
    image: "/images/faculty-4.jpg",
  },
  {
    name: "Amit Banerjee",
    role: "Placement Coordinator",
    description: "Amit manages industry relationships and student placements across aviation, hotel, and cruise sectors. His extensive network with over 50 recruiters ensures every graduate finds their ideal role.",
    image: "/images/faculty-5.jpg",
  },
]

const milestones = [
  { year: "2018", title: "Foundation", description: "GSIHM was founded with a vision to transform hospitality education in India." },
  { year: "2019", title: "First Batch", description: "Graduated our first batch with 100% placement in leading airlines and hotels." },
  { year: "2020", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management systems." },
  { year: "2021", title: "NSQF Recognition", description: "Received National Skills Qualification Framework recognition." },
  { year: "2022", title: "Cruise Program", description: "Launched specialized Cruise Management program with international partnerships." },
  { year: "2023", title: "5000+ Alumni", description: "Celebrated placing over 5000 students in hospitality careers worldwide." },
  { year: "2024", title: "New Campus", description: "Expanded to state-of-the-art training facilities with mock aircraft and hotel setups." },
]

const accreditations = [
  { name: "MSME Registered", description: "Registered with Ministry of Micro, Small & Medium Enterprises", icon: Shield },
  { name: "ISO Certified", description: "International standards certified for quality management", icon: Award },
  { name: "CVESD Affiliated", description: "Affiliated with Central Council for Vocational Training", icon: Star },
]

const galleryImages = [
  { src: "/images/infrastructure/meeting-room-1.webp", category: "Meeting Room", alt: "Modern meeting room facility" },
  { src: "/images/infrastructure/office-kitchen-1.webp", category: "Office Kitchen", alt: "State-of-the-art office kitchen" },
  { src: "/images/infrastructure/bar-setup.webp", category: "Bar Training", alt: "Professional bar setup training" },
  { src: "/images/infrastructure/meeting-room-2.webp", category: "Meeting Room", alt: "Meeting room with modern amenities" },
  { src: "/images/infrastructure/entrance.webp", category: "Campus Entrance", alt: "GSIHM campus entrance" },
  { src: "/images/infrastructure/bar-counter.webp", category: "Bar Counter", alt: "Professional bar counter training area" },
]

function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setActiveIndex(index)
          }
        })
      },
      { threshold: 0.5 }
    )

    const items = timelineRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy-light transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.year}
            data-index={index}
            className={cn(
              "relative flex items-start gap-8 md:gap-0 transition-opacity duration-500",
              index <= activeIndex ? "opacity-100" : "opacity-40"
            )}
          >
            {/* Desktop: Alternating layout */}
            <div className={cn(
              "hidden md:flex w-1/2 pr-12",
              index % 2 === 0 ? "justify-end text-right" : "order-2 pl-12 pr-0 justify-start text-left"
            )}>
              <div className="max-w-sm">
                <span className="text-gold-primary font-bold text-lg">{milestone.year}</span>
                <h4 className="font-bold text-navy-deep text-xl mt-1">{milestone.title}</h4>
                <p className="text-navy-muted mt-2">{milestone.description}</p>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className={cn(
              "absolute left-4 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 mt-2 transition-colors",
              index <= activeIndex ? "bg-gold-primary" : "bg-navy-light"
            )} />

            {/* Mobile Layout */}
            <div className="md:hidden pl-10">
              <span className="text-gold-primary font-bold">{milestone.year}</span>
              <h4 className="font-bold text-navy-deep text-lg">{milestone.title}</h4>
              <p className="text-navy-muted text-sm mt-1">{milestone.description}</p>
            </div>

            {/* Desktop: Empty space for alternating */}
            <div className={cn(
              "hidden md:block w-1/2",
              index % 2 === 0 ? "order-2" : ""
            )} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
                Our Story
              </p>
              <h1 className="text-balance mb-6">
                Building Global Hospitality Leaders Since 2018
              </h1>
              <p className="text-navy-muted text-lg leading-relaxed mb-6">
                GSIHM was founded in 2018. Over the past eight years, we have built a powerful network of global employers and brought together a faculty of industry veterans. Our sole focus has been helping students from this region step out of the classroom and launch highly successful careers in international hubs and global waters.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-gold-primary">8+</p>
                  <p className="text-sm text-navy-muted">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-primary">3000+</p>
                  <p className="text-sm text-navy-muted">Students Placed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-primary">20+</p>
                  <p className="text-sm text-navy-muted">Hiring Partners</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-hero.jpg"
                  alt="GSIHM Campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden">
                <Image
                  src="/images/roshan-shahi-thakuri.jpg"
                  alt="Roshan Shahi Thakuri - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-gold-pale rounded-lg p-4 shadow-lg">
                <Quote className="h-6 w-6 text-gold-primary" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
                Founder&apos;s Message
              </p>
              <h2 className="mb-6">A Vision for Excellence</h2>
              <blockquote className="text-navy-muted text-lg leading-relaxed mb-6 italic">
                &quot;When I started GSIHM, I saw a gap between what the hospitality industry needed and what education provided. Our mission has always been to bridge this gap — to create professionals who don&apos;t just fill positions, but transform the guest experience.&quot;
              </blockquote>
              <div>
                <p className="font-bold text-navy-deep text-lg">Dr. Rajesh Kumar</p>
                <p className="text-navy-muted">Founder & Director, GSIHM</p>
                <p className="text-sm text-gold-primary mt-1">25+ years in Hospitality Industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
              Our Team
            </p>
            <h2 className="mb-4">Learn From Industry Leaders</h2>
            <p className="text-navy-muted text-lg">
              Our faculty brings decades of real-world experience from airlines, luxury hotels, and cruise lines.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 pb-2">
            {faculty.map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-navy-light/30 flex flex-col">
                {/* Image placeholder */}
                <div className="relative h-48 flex-shrink-0 bg-navy-deep flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gold-primary flex items-center justify-center">
                    <span className="text-navy-deep font-bold text-2xl">
                      {member.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h4 className="font-bold text-navy-deep text-sm">{member.name}</h4>
                  <p className="text-gold-primary text-xs font-medium mt-1">{member.role}</p>
                  <p className="text-navy-muted text-xs mt-2 leading-relaxed line-clamp-4 flex-1">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
              Our Journey
            </p>
            <h2 className="mb-4">Milestones of Excellence</h2>
            <p className="text-navy-muted text-lg">
              From a single classroom to a state-of-the-art campus, see how we&apos;ve grown.
            </p>
          </div>

          <Timeline />
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-navy-deep py-16 lg:py-24 section-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
              Accreditations
            </p>
            <h2 className="text-white mb-4">Recognized Excellence</h2>
            <p className="text-navy-light text-lg">
              Our certifications and affiliations ensure you receive quality education that&apos;s recognized industry-wide.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
              {accreditations.map((accred) => (
                <div key={accred.name} className="bg-navy-mid rounded-xl p-6 text-center">
                  <accred.icon className="h-10 w-10 text-gold-primary mx-auto mb-4" />
                  <h4 className="font-bold text-white mb-2">{accred.name}</h4>
                  <p className="text-navy-light text-sm">{accred.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
              Campus Life
            </p>
            <h2 className="mb-4">Our Infrastructure</h2>
            <p className="text-navy-muted text-lg">
              State-of-the-art facilities designed to provide hands-on training in real-world environments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className={cn(
                  "relative overflow-hidden rounded-xl group",
                  index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-navy-deep/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gold-primary transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-4xl w-full aspect-video">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
