"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, Play, ChevronRight, Briefcase, TrendingUp, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const videoTestimonials = [
  { name: "Geltsyen Sherpa", role: "From passion to plate", thumbnail: "/images/geltsyen-thumbnail.png", duration: "2:15", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/From%20passion%20to%20plate%2C%20the%20journey%20of%20a%20chef%20begins%20with%20hands-on%20experience%21%20%F0%9F%8D%BD%EF%B8%8F%E2%9C%A8%20Our%20talented%20-4jLGrEBbYOJdtkzE5SJru12As1LXUs.mp4" },
  { name: "Dechen Sherpa", role: "F&B Service, JW Marriott Marquis Dubai", thumbnail: "/images/dechen-thumbnail.png", duration: "2:30", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hard%20work%2C%20dedication%2C%20and%20the%20right%20opportunity%20%E2%80%94%20successfully%20placed%20at%20JW%20Marriott%20Marquis%20Du-AUIqtT3VRGmQ4REmYjrCCmD4N5RDdM.mp4" },
  { name: "Bharati Thapa", role: "Housekeeping, Jumeirah Al Qasr Dubai", thumbnail: "/images/bharati-thumbnail.png", duration: "2:25", videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Congratulations%20on%20getting%20placed%20at%20Al%20Qasr%21%20%F0%9F%8E%89%20Wishing%20you%20great%20success%2C%20new%20opportunities%2C%20a-BwrZhPqvtHpcmrhneOxQusJfQkJLva.mp4" },
]

const placedStudents = [
  { name: "Priya Sharma", company: "IndiGo", role: "Cabin Crew", year: 2025, course: "Aviation", image: "/images/alumni/priya.jpg" },
  { name: "Rahul Verma", company: "Taj Hotels", role: "Front Office", year: 2025, course: "Hotel", image: "/images/alumni/rahul.jpg" },
  { name: "Kavya Iyer", company: "Carnival Cruises", role: "Guest Relations", year: 2026, course: "Cruise", image: "/images/alumni/kavya.jpg" },
  { name: "Anaya Patel", company: "Air India", role: "Cabin Crew", year: 2025, course: "Aviation", image: "/images/alumni/anaya.jpg" },
  { name: "Vikram Singh", company: "Marriott", role: "Chef", year: 2026, course: "Hotel", image: "/images/alumni/vikram.jpg" },
  { name: "Neha Gupta", company: "ITC Hotels", role: "Event Manager", year: 2026, course: "Hotel", image: "/images/alumni/neha.jpg" },
  { name: "Rohan Desai", company: "Air India", role: "Ground Staff", year: 2025, course: "Aviation", image: "/images/alumni/rohan.jpg" },
  { name: "Shreya Nair", company: "Marriott", role: "Housekeeping", year: 2025, course: "Hotel", image: "/images/alumni/shreya.jpg" },
  { name: "Arjun Kumar", company: "Taj Hotels", role: "F&B Service", year: 2026, course: "Hotel", image: "/images/alumni/arjun.jpg" },
  { name: "Diya Joshi", company: "Carnival Cruises", role: "Cabin Staff", year: 2026, course: "Cruise", image: "/images/alumni/diya.jpg" },
  { name: "Sameer Khan", company: "IndiGo", role: "Cabin Crew", year: 2026, course: "Aviation", image: "/images/alumni/sameer.jpg" },
  { name: "Meera Singh", company: "ITC Hotels", role: "Human Resources", year: 2025, course: "Hotel", image: "/images/alumni/meera.jpg" },
]

const filters = [
  { id: "all", label: "All" },
  { id: "Aviation", label: "Aviation" },
  { id: "Hotel", label: "Hotel" },
  { id: "Cruise", label: "Cruise" },
]

const companyFilters = [
  { id: "all", label: "All Companies" },
  { id: "IndiGo", label: "IndiGo" },
  { id: "Taj Hotels", label: "Taj Hotels" },
  { id: "Carnival Cruises", label: "Carnival" },
  { id: "Air India", label: "Air India" },
  { id: "Marriott", label: "Marriott" },
  { id: "ITC Hotels", label: "ITC Hotels" },
]

const salaryRanges = [
  { role: "Cabin Crew (Domestic)", range: "₹4-6 LPA", sector: "Aviation" },
  { role: "Cabin Crew (International)", range: "₹6-10 LPA", sector: "Aviation" },
  { role: "Ground Staff", range: "₹3-5 LPA", sector: "Aviation" },
  { role: "Front Office Executive", range: "₹3-5 LPA", sector: "Hotel" },
  { role: "F&B Manager", range: "₹5-8 LPA", sector: "Hotel" },
  { role: "Guest Relations Manager", range: "₹5-10 LPA", sector: "Hotel" },
  { role: "Cruise Steward", range: "₹5-8 LPA", sector: "Cruise" },
  { role: "Guest Relations (Cruise)", range: "₹6-12 LPA", sector: "Cruise" },
]

const hiringProcess = [
  { step: 1, title: "Training Excellence", description: "Complete your program with hands-on practical training and soft skills development." },
  { step: 2, title: "Mock Interviews", description: "Practice with industry experts. Multiple rounds of grooming and interview preparation." },
  { step: 3, title: "Company Connect", description: "Direct campus recruitment by our 50+ MOU partners. Priority hiring for GSIHM students." },
  { step: 4, title: "Offer Letter", description: "Receive your offer letter and begin your dream career with 100% placement guarantee." },
]

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let startTime: number
    const duration = 2000
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isVisible, end])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function PlacementsPage() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videoTestimonials[0] | null>(null)
  const [selectedCourse, setSelectedCourse] = useState("all")
  const [selectedCompany, setSelectedCompany] = useState("all")

  const filteredStudents = placedStudents.filter((student) => {
    const courseMatch = selectedCourse === "all" || student.course === selectedCourse
    const companyMatch = selectedCompany === "all" || student.company === selectedCompany
    return courseMatch && companyMatch
  })

  const uniqueCompanies = Array.from(new Set(placedStudents.map(s => s.company)))
    .map(company => ({
      id: company,
      label: company
    }))

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-navy-deep py-16 lg:py-24 section-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
              Placement Record
            </p>
            <h1 className="text-white text-balance mb-4">
              3000+ Students Placed
              <br />
              <span className="text-gold-primary">Building Careers, Creating Futures</span>
            </h1>
            <p className="text-navy-light text-lg max-w-2xl mx-auto">
              Our 98% placement record isn&apos;t just a number — it reflects the careers we&apos;ve built. Discover where our alumni are making their mark today.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gold-primary">
                <AnimatedCounter end={3000} suffix="+" />
              </p>
              <p className="text-navy-light mt-2">Students Placed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gold-primary">
                <AnimatedCounter end={98} suffix="%" />
              </p>
              <p className="text-navy-light mt-2">Placement Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gold-primary">
                <AnimatedCounter end={20} suffix="+" />
              </p>
              <p className="text-navy-light mt-2">Hiring Partners</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-gold-primary">
                <AnimatedCounter end={15} suffix="+" />
              </p>
              <p className="text-navy-light mt-2">Countries Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Placed Alumni Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <h2 className="mb-2">Our Placed Alumni</h2>
              <p className="text-navy-muted">Filter by course or company to see placements</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-navy-muted" />
                <span className="text-sm text-navy-muted">Course:</span>
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedCourse(filter.id)}
                    className={cn(
                      "px-3 py-1.5 text-sm rounded-lg transition-colors",
                      selectedCourse === filter.id
                        ? "bg-gold-primary text-navy-deep font-semibold"
                        : "bg-white text-navy-muted hover:bg-navy-light"
                    )}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Company Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {companyFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedCompany(filter.id)}
                className={cn(
                  "px-4 py-2 text-sm rounded-lg border transition-colors",
                  selectedCompany === filter.id
                    ? "border-gold-primary bg-gold-pale text-navy-deep font-medium"
                    : "border-navy-light bg-white text-navy-muted hover:border-gold-primary"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Students Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredStudents.map((student, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-navy-deep">
                    {student.year}
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-navy-deep">{student.name}</p>
                  <p className="text-gold-primary text-sm font-medium">{student.company}</p>
                  <p className="text-navy-muted text-sm">{student.role}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-navy-muted">No students found matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
              Success Stories
            </p>
            <h2 className="mb-4">Hear From Our Alumni</h2>
            <p className="text-navy-muted text-lg">
              Watch real students share their journey from GSIHM to their dream careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
              >
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden mb-4 bg-navy-deep">
                  {selectedVideo?.name === video.name ? (
                    <video 
                      src={video.videoUrl} 
                      controls 
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <video 
                        src={video.videoUrl}
                        className="w-full h-full object-cover opacity-0 absolute"
                        onLoadedMetadata={(e) => {
                          if (e.currentTarget) {
                            e.currentTarget.currentTime = 0
                          }
                        }}
                      />
                      <Image
                        src={video.thumbnail}
                        alt={video.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-navy-deep/40 group-hover:bg-navy-deep/60 transition-colors" />
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        onClick={() => setSelectedVideo(video)}
                      >
                        <div className="w-16 h-16 rounded-full bg-gold-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 text-navy-deep fill-navy-deep ml-1" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 right-3 bg-navy-deep/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </span>
                    </>
                  )}
                </div>
                <p className="font-semibold text-navy-deep">{video.name}</p>
                <p className="text-navy-muted text-sm">{video.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-2xl aspect-[9/16] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video 
              src={selectedVideo.videoUrl} 
              controls 
              autoPlay
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-gold-primary hover:bg-gold-primary/90 text-navy-deep rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Salary Breakdown */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
                Career Earnings
              </p>
              <h2 className="mb-4">Salary Expectations</h2>
              <p className="text-navy-muted text-lg mb-8">
                Transparent salary ranges for different roles across Aviation, Hotel, and Cruise industries. Our graduates consistently achieve competitive packages.
              </p>
              <div className="flex items-center gap-4">
                <TrendingUp className="h-8 w-8 text-gold-primary" />
                <div>
                  <p className="text-2xl font-bold text-navy-deep">₹1.2 LPA</p>
                  <p className="text-navy-muted text-sm">Average Package</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-navy-light overflow-hidden">
              <div className="p-4 bg-navy-deep">
                <div className="grid grid-cols-3 text-white text-sm font-semibold">
                  <span>Role</span>
                  <span className="text-center">Sector</span>
                  <span className="text-right">Salary Range</span>
                </div>
              </div>
              <div className="divide-y divide-navy-light">
                {salaryRanges.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 p-4 text-sm hover:bg-cream transition-colors">
                    <span className="text-navy-deep font-medium">{item.role}</span>
                    <span className="text-center">
                      <span className={cn(
                        "px-2 py-1 rounded text-xs font-medium",
                        item.sector === "Aviation" && "bg-blue-100 text-blue-700",
                        item.sector === "Hotel" && "bg-amber-100 text-amber-700",
                        item.sector === "Cruise" && "bg-emerald-100 text-emerald-700"
                      )}>
                        {item.sector}
                      </span>
                    </span>
                    <span className="text-right text-gold-primary font-semibold">{item.range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 lg:py-24 bg-navy-deep section-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
              How We Get You Placed
            </p>
            <h2 className="text-white mb-4">The GSIHM Placement Process</h2>
            <p className="text-navy-light text-lg">
              Our structured approach ensures every student is interview-ready and placed in their dream role.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringProcess.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-navy-mid rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-gold-primary text-navy-deep font-bold text-xl flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-navy-light text-sm">{step.description}</p>
                </div>
                {index < hiringProcess.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 h-8 w-8 text-gold-primary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto shadow-lg">
            <Briefcase className="h-12 w-12 text-gold-primary mx-auto mb-4" />
            <h2 className="mb-4">Ready to Launch Your Career?</h2>
            <p className="text-navy-muted text-lg mb-8">
              Join 3000+ successful alumni working at top hospitality brands worldwide. Your dream career is one application away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold-primary text-navy-deep hover:bg-gold-soft font-semibold px-8">
                <Link href="/contact">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-navy-mid text-navy-deep hover:bg-navy-light font-semibold px-8">
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
