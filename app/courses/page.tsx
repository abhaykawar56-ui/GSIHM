"use client"

import { useState } from "react"
import Image from "next/image"
import { Plane, Building2, Ship, ChevronDown, ChevronRight, CheckCircle, Calendar, Clock, GraduationCap, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const programs = [
  {
    id: "aviation",
    title: "Aviation",
    subtitle: "Cabin Crew & Ground Staff Training",
    icon: Plane,
    color: "aviation",
    image: "/images/aviation-course.jpg",
    overview: "Our comprehensive Aviation program prepares you for a prestigious career in the skies. With hands-on training in mock aircraft cabins and industry partnerships with leading airlines, you'll be ready to take flight.",
    duration: "12 Months",
    eligibility: "10+2 from any stream, Age 18-27",
    fee: "₹1,80,000",
    placementAssistance: "Interview Preparation & Airline Career Guidance",
    batchDates: ["May 2026", "Nov 2026"],
    curriculum: [
      { title: "Aviation Fundamentals", topics: ["History of Aviation", "Aircraft Types & Components", "Aviation Terminology", "Airline Industry Overview"] },
      { title: "Cabin Crew Training", topics: ["Safety & Emergency Procedures", "First Aid & Medical Emergencies", "Service Excellence", "Food & Beverage Service"] },
      { title: "Grooming & Personality", topics: ["Personal Grooming Standards", "Communication Skills", "Body Language", "Interview Preparation"] },
      { title: "Ground Operations", topics: ["Airport Operations", "Check-in Procedures", "Baggage Handling", "Customer Service Excellence"] },
    ],
    careers: [
      { title: "Cabin Crew", salary: "₹4-8 LPA" },
      { title: "Ground Staff", salary: "₹3-5 LPA" },
      { title: "Customer Service Agent", salary: "₹3-6 LPA" },
      { title: "Airport Operations", salary: "₹4-7 LPA" },
    ],
    alumni: [
      { name: "Ananya Reddy", role: "Cabin Crew, IndiGo", image: "/images/alumni-1.jpg" },
      { name: "Vikram Singh", role: "Ground Staff, Air India", image: "/images/alumni-2.jpg" },
      { name: "Sneha Patel", role: "Customer Service, SpiceJet", image: "/images/alumni-3.jpg" },
    ],
  },
  {
    id: "hotel",
    title: "Hotel Management",
    subtitle: "Luxury Hospitality Excellence",
    icon: Building2,
    color: "hotel",
    image: "/images/hotel-course.png",
    overview: "Master the art of luxury hospitality with our intensive Hotel Management program. From front office operations to food & beverage management, gain practical experience at 5-star properties.",
    duration: "12 Months",
    eligibility: "10+2 from any stream, Age 18-28",
    fee: "₹2,40,000",
    placementAssistance: "Hotel Industry Training & Career Guidance",
    batchDates: ["May 2026", "Nov 2026"],
    curriculum: [
      { title: "Front Office Operations", topics: ["Reception & Check-in", "Reservation Systems", "Guest Relations", "Revenue Management"] },
      { title: "Food & Beverage Service", topics: ["Restaurant Operations", "Bar & Beverage", "Banquet Management", "Wine & Spirits"] },
      { title: "Housekeeping Management", topics: ["Room Operations", "Laundry Services", "Inventory Management", "Quality Standards"] },
      { title: "Hotel Administration", topics: ["Hotel Accounting", "HR Management", "Marketing Strategies", "Leadership Skills"] },
    ],
    careers: [
      { title: "Front Office Executive", salary: "₹3-6 LPA" },
      { title: "F&B Manager", salary: "₹5-10 LPA" },
      { title: "Housekeeping Supervisor", salary: "₹3-5 LPA" },
      { title: "Guest Relations Manager", salary: "₹5-8 LPA" },
    ],
    alumni: [
      { name: "Priya Sharma", role: "Front Office, Taj Hotels", image: "/images/alumni-4.jpg" },
      { name: "Rahul Verma", role: "F&B Manager, ITC Hotels", image: "/images/alumni-5.jpg" },
      { name: "Meera Nair", role: "Guest Relations, Marriott", image: "/images/alumni-6.jpg" },
    ],
  },
  {
    id: "cruise",
    title: "Cruise Management",
    subtitle: "International Waters Career",
    icon: Ship,
    color: "cruise",
    image: "/images/cruise-course.jpg",
    overview: "Embark on a global adventure with our Cruise Management program. Train for life aboard luxury cruise liners, traveling the world while building an exciting hospitality career.",
    duration: "12 Months",
    eligibility: "10+2 from any stream, Age 18-28, Swimming Proficiency",
    fee: "₹2,80,000",
    placementAssistance: "Cruise Line Interview Preparation & Career Support",
    batchDates: ["May 2026", "Nov 2026"],
    curriculum: [
      { title: "Cruise Industry Overview", topics: ["Global Cruise Lines", "Ship Departments", "Maritime Regulations", "Cruise Itineraries"] },
      { title: "Hospitality Operations", topics: ["Guest Services", "F&B Service at Sea", "Entertainment & Events", "Casino Operations"] },
      { title: "Safety & Survival", topics: ["Sea Survival Techniques", "Fire Fighting", "Crowd Management", "First Aid at Sea"] },
      { title: "International Standards", topics: ["Cultural Diversity", "Global Etiquette", "Language Skills", "Professional Conduct"] },
    ],
    careers: [
      { title: "Cruise Steward", salary: "₹5-10 LPA" },
      { title: "Guest Relations Officer", salary: "₹6-12 LPA" },
      { title: "F&B Service (Cruise)", salary: "₹6-10 LPA" },
      { title: "Entertainment Staff", salary: "₹5-9 LPA" },
    ],
    alumni: [
      { name: "Arjun Mehta", role: "Guest Relations, Carnival", image: "/images/alumni-7.jpg" },
      { name: "Kavya Iyer", role: "Cruise Steward, MSC", image: "/images/alumni-8.jpg" },
      { name: "Rohan Das", role: "F&B, Celebrity Cruises", image: "/images/alumni-9.jpg" },
    ],
  },
]

function EligibilityChecker() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({ age: "", qualification: "", experience: "" })
  const [result, setResult] = useState<string | null>(null)

  const questions = [
    { key: "age", question: "What is your age?", options: ["17 or below", "18-25", "26-28", "Above 28"] },
    { key: "qualification", question: "What is your qualification?", options: ["Below 10+2", "10+2 Pass", "Graduate", "Post Graduate"] },
    { key: "experience", question: "Do you have hospitality experience?", options: ["No experience", "0-1 years", "1-3 years", "3+ years"] },
  ]

  const checkEligibility = () => {
    const ageEligible = answers.age === "18-25" || answers.age === "26-28"
    const qualEligible = answers.qualification !== "Below 10+2"
    
    if (ageEligible && qualEligible) {
      setResult("Congratulations! You are eligible for all our programs. Apply now to secure your seat!")
    } else if (!ageEligible) {
      setResult("Based on your age, you may have limited program options. Contact our counselors for personalized guidance.")
    } else {
      setResult("You may need to complete 10+2 first. Contact us to explore bridge programs and other options.")
    }
  }

  const handleAnswer = (value: string) => {
    const key = questions[step].key as keyof typeof answers
    setAnswers({ ...answers, [key]: value })
    
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      checkEligibility()
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers({ age: "", qualification: "", experience: "" })
    setResult(null)
  }

  return (
    <div className="bg-gold-pale rounded-xl p-6 md:p-8">
      <h3 className="text-xl font-bold text-navy-deep mb-4 flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-gold-primary" />
        Am I Eligible?
      </h3>
      
      {result ? (
        <div className="space-y-4">
          <p className="text-navy-muted">{result}</p>
          <div className="flex gap-3">
            <Button onClick={reset} variant="outline" className="border-navy-mid">
              Check Again
            </Button>
            <Button asChild className="bg-gold-primary text-navy-deep hover:bg-gold-soft">
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex gap-2 mb-4">
            {questions.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 flex-1 rounded-full transition-colors",
                  i <= step ? "bg-gold-primary" : "bg-navy-light"
                )}
              />
            ))}
          </div>
          <p className="font-medium text-navy-deep mb-4">{questions[step].question}</p>
          <div className="grid grid-cols-2 gap-3">
            {questions[step].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="px-4 py-3 text-sm rounded-lg border border-navy-light hover:border-gold-primary hover:bg-white transition-colors text-left text-navy-deep"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("aviation")
  const [expandedModules, setExpandedModules] = useState<string[]>([])

  const handleBrochureDownload = async () => {
    try {
      const response = await fetch("/GSIHM-Brochure.pdf")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "GSIHM-Brochure.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed:", error)
    }
  }

  const activeProgram = programs.find((p) => p.id === activeTab)!

  const toggleModule = (title: string) => {
    setExpandedModules((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-navy-deep py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
              Our Programs
            </p>
            <h1 className="text-white text-balance mb-4">
              Choose Your Career Path
            </h1>
            <p className="text-navy-light text-lg">
              Three specialized programs designed to launch your career in Aviation, Hotel Management, or Cruise industries.
            </p>
          </div>
        </div>
      </section>

      {/* Program Selection Tabs */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-deep">Explore Our Programs</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300",
                  activeTab === program.id
                    ? "bg-navy-deep text-white shadow-lg"
                    : "bg-white text-navy-deep border-2 border-navy-light hover:border-navy-deep"
                )}
              >
                <program.icon className="h-5 w-5" />
                {program.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div id={activeProgram.id}>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
                  <Image
                    src={activeProgram.image}
                    alt={activeProgram.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h2 className="text-white text-3xl font-bold mb-1">{activeProgram.title}</h2>
                    <p className="text-gold-light">{activeProgram.subtitle}</p>
                  </div>
                </div>
                <p className="text-navy-muted text-lg leading-relaxed">{activeProgram.overview}</p>
              </div>

              {/* Quick Info */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-5 border border-navy-light">
                  <Clock className="h-5 w-5 text-gold-primary mb-2" />
                  <p className="text-sm text-navy-muted">Duration</p>
                  <p className="font-semibold text-navy-deep">{activeProgram.duration}</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-navy-light">
                  <GraduationCap className="h-5 w-5 text-gold-primary mb-2" />
                  <p className="text-sm text-navy-muted">Eligibility</p>
                  <p className="font-semibold text-navy-deep text-sm">{activeProgram.eligibility}</p>
                </div>
                <div className="bg-white rounded-lg p-5 border border-navy-light">
                  <Briefcase className="h-5 w-5 text-gold-primary mb-2" />
                  <p className="text-sm text-navy-muted">Placement Assistance</p>
                  <p className="font-semibold text-navy-deep text-sm">{activeProgram.placementAssistance}</p>
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h3 className="text-2xl font-bold text-navy-deep mb-6">Curriculum</h3>
                <div className="space-y-3">
                  {activeProgram.curriculum.map((module) => (
                    <div key={module.title} className="bg-white rounded-lg border border-navy-light overflow-hidden">
                      <button
                        onClick={() => toggleModule(module.title)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-cream transition-colors"
                      >
                        <span className="font-semibold text-navy-deep">{module.title}</span>
                        {expandedModules.includes(module.title) ? (
                          <ChevronDown className="h-5 w-5 text-navy-muted" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-navy-muted" />
                        )}
                      </button>
                      {expandedModules.includes(module.title) && (
                        <div className="px-4 pb-4 border-t border-navy-light pt-4">
                          <ul className="space-y-2">
                            {module.topics.map((topic) => (
                              <li key={topic} className="flex items-center gap-2 text-navy-muted">
                                <CheckCircle className="h-4 w-4 text-gold-primary flex-shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Paths */}
              <div>
                <h3 className="text-2xl font-bold text-navy-deep mb-6">Career Paths</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeProgram.careers.map((career) => (
                    <div key={career.title} className="bg-white rounded-lg p-5 border border-navy-light">
                      <div className="flex items-start justify-between">
                        <div>
                          <Briefcase className="h-5 w-5 text-gold-primary mb-2" />
                          <p className="font-semibold text-navy-deep">{career.title}</p>
                        </div>
                        <span className="text-sm font-medium text-gold-primary bg-gold-pale px-2 py-1 rounded">
                          {career.salary}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Eligibility Checker */}
              <EligibilityChecker />

              {/* Batch Schedule */}
              <div className="bg-white rounded-xl p-6 border border-navy-light">
                <h3 className="text-xl font-bold text-navy-deep mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gold-primary" />
                  Upcoming Batches
                </h3>
                <div className="space-y-3">
                  {activeProgram.batchDates.map((date, index) => (
                    <div
                      key={date}
                      className={cn(
                        "flex items-center justify-between py-3 border-b border-navy-light last:border-0",
                        index === 0 && "text-gold-primary"
                      )}
                    >
                      <span className={cn(
                        "font-medium",
                        index === 0 ? "text-navy-deep" : "text-navy-muted"
                      )}>
                        {date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-navy-deep rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3 text-white">Ready to Apply?</h3>
                <p className="text-navy-light text-sm mb-6">
                  Secure your seat in the next batch. Limited seats available.
                </p>
                <Button asChild className="w-full bg-gold-primary text-navy-deep hover:bg-gold-soft font-semibold">
                  <Link href="/contact">Apply Now</Link>
                </Button>
                <Button onClick={handleBrochureDownload} variant="outline" className="w-full mt-3 border-gold-primary text-gold-primary bg-navy-deep hover:bg-gold-primary hover:text-navy-deep font-semibold">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
