"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle, ChevronDown, CheckCircle, ArrowRight, Clock, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Schema } from "@/components/schema"
import { faqSchema } from "@/lib/schema"
import { cn } from "@/lib/utils"

const courses = [
  { value: "aviation", label: "Aviation" },
  { value: "hotel", label: "Hotel Management" },
  { value: "cruise", label: "Cruise Management" },
]

const batches = [
  { value: "may-2026", label: "May 2026" },
  { value: "november-2026", label: "November 2026" },
]

const faqs = [
  {
    question: "Who can apply for admission at GSIHM?",
    answer: "Students who have completed Class 12, or Graduation from a recognized board or university are eligible to apply for selected programs. GSIHM welcomes students looking to build careers in hospitality, aviation, cruise, and global service industries. Minimum Qualification: Class 12 (course dependent). Age Criteria: Typically 18+",
  },
  {
    question: "What courses does GSIHM offer?",
    answer: "GSIHM offers industry-oriented programs designed to prepare students for successful global careers through practical training and placement support. Programs include Hotel Management, Aviation Management, and Cruise Management. Course Duration: 1 year",
  },
  {
    question: "What is the placement rate and recruitment process?",
    answer: "GSIHM has achieved a 98% placement record, backed by industry partnerships and career-focused training. Students receive interview preparation, professional grooming, practical exposure, and placement assistance throughout their journey. Students Placed: 3000+. Placement Support Starts From: Training period onward",
  },
  {
    question: "Which companies hire GSIHM students?",
    answer: "Students have opportunities to connect with leading hospitality, aviation, and cruise brands through institutional partnerships and recruitment programs. Some recruiting partners include JW Marriott Marquis Dubai, Jumeirah Al Qasr Dubai, Hilton Downtown Abu Dhabi, Leela Kovlam, and International Cruise Partners. Total Hiring Partners: 20+",
  },
  {
    question: "What is the average salary package offered?",
    answer: "Salary packages vary depending on the industry, role, destination, and student performance. Opportunities are available across domestic and international markets. Average Package: ₹1.2 LPA. International Opportunities Available In: UAE, India, Middle East & selected global destinations",
  },
  {
    question: "Are international placements available?",
    answer: "Yes. Eligible students receive opportunities for training and placements through institutional partnerships with premium international hospitality and service brands. Countries Covered: 15+. International Partner Brands: Marriott, Jumeirah, Qatar Airways, Cruise Partners & more",
  },
  {
    question: "What career opportunities are available after completing a program at GSIHM?",
    answer: "Graduates can pursue careers across hospitality, aviation, cruise, luxury service, and customer experience industries. Career Paths Include: Hotel Operations, Cabin Crew & Aviation Services, Cruise Hospitality, Food & Beverage Operations, Guest Relations & Customer Experience. Placement Locations: India, UAE & international destinations",
  },
  {
    question: "Do programs include practical training and internships?",
    answer: "Yes. Programs are designed with strong practical exposure to ensure students graduate with real-world experience and industry confidence.",
  },
  {
    question: "Why choose GSIHM for hospitality and aviation education?",
    answer: "GSIHM combines industry-led training, practical exposure, professional development, and strong placement support to prepare students for real-world careers from day one. Placement Record: 98%. Students Placed: 3000+. Industry Partners: 20+. Countries Covered: 15+",
  },
  {
    question: "Can I visit the campus before enrolling?",
    answer: "Absolutely. Students and parents are encouraged to visit the campus, meet faculty members, and explore the learning environment before making a decision. Campus Visit Timings: Monday–Saturday | 10:00 AM to 6:00 PM. Schedule a Visit: Contact Admissions Team",
  },
  {
    question: "How is GSIHM different from traditional hotel management colleges?",
    answer: "GSIHM combines industry-driven learning, practical exposure, personality development, and placement support to prepare students for global career opportunities. Industry Partners: 20+. Placement Record: 98%. Student Placements: 3000+",
  },
  {
    question: "Where are GSIHM alumni working today?",
    answer: "GSIHM alumni are building careers across premium hospitality, aviation, and global service brands in India and internationally. Students Placed: 3000+. Countries Covered: 15+. Featured Employers: JW Marriott Marquis Dubai, Jumeirah, Qatar Airways, IndiGo, Cruise partners & more",
  },
]

const postApplySteps = [
  {
    step: 1,
    title: "We Call You",
    description: "Within 24 hours, our admissions counselor will contact you to understand your goals and answer questions.",
    icon: Phone,
  },
  {
    step: 2,
    title: "Campus Visit",
    description: "Schedule a campus tour or virtual walkthrough. See our training facilities and meet the faculty.",
    icon: Users,
  },
  {
    step: 3,
    title: "Enrollment",
    description: "Complete documentation, choose your payment plan, and secure your seat in the upcoming batch.",
    icon: FileText,
  },
]

export default function ContactPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    batch: "",
    whatsapp: true,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
    else handleSubmit()
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/leads/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "student",
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            courseInterest: formData.course,
            preferredBatch: formData.batch,
          },
        }),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error("[v0] Failed to submit lead")
      }
    } catch (error) {
      console.error("[v0] Error submitting lead:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.name && formData.phone
      case 2:
        return formData.course
      case 3:
        return true
      default:
        return false
    }
  }

  return (
    <>
      <Schema schema={faqSchema(faqs)} />
      <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-navy-deep py-16 lg:py-20 section-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
              Get Started
            </p>
            <h1 className="text-white text-balance mb-4">
              Begin Your Journey Today
            </h1>
            <p className="text-navy-light text-lg">
              Fill out the form below and our admissions team will guide you through every step of the enrollment process.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div>
              {isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-deep mb-4">Application Received!</h2>
                  <p className="text-navy-muted mb-6">
                    Thank you for your interest in GSIHM. Our admissions team will contact you within 24 hours to discuss the next steps.
                  </p>
                  <div className="bg-gold-pale rounded-lg p-4 mb-6">
                    <p className="text-sm text-navy-muted">
                      <strong>What happens next?</strong> Our counselor will call you to schedule a campus visit or virtual tour, discuss program details, and guide you through the enrollment process.
                    </p>
                  </div>
                  <Button asChild className="bg-gold-primary text-navy-deep hover:bg-gold-soft">
                    <Link href="/">Return to Home</Link>
                  </Button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
                  <h2 className="text-2xl font-bold text-navy-deep mb-2">Apply Now</h2>
                  <p className="text-navy-muted mb-6">3-step quick application</p>

                  {/* Progress Bar */}
                  <div className="flex gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={cn(
                          "flex-1 h-2 rounded-full transition-colors",
                          s <= step ? "bg-gold-primary" : "bg-navy-light"
                        )}
                      />
                    ))}
                  </div>

                  {/* Step 1: Personal Info */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <h3 className="font-semibold text-navy-deep">Personal Information</h3>
                      <Input
                        type="text"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 border-navy-light focus:border-gold-primary"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 border-navy-light focus:border-gold-primary"
                      />
                      <Input
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border-navy-light focus:border-gold-primary"
                      />
                    </div>
                  )}

                  {/* Step 2: Course Interest */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <h3 className="font-semibold text-navy-deep">Course Interest</h3>
                      <div className="space-y-3">
                        {courses.map((course) => (
                          <button
                            key={course.value}
                            onClick={() => setFormData({ ...formData, course: course.value })}
                            className={cn(
                              "w-full flex items-center justify-between p-4 rounded-lg border transition-colors text-left",
                              formData.course === course.value
                                ? "border-gold-primary bg-gold-pale"
                                : "border-navy-light hover:border-gold-primary"
                            )}
                          >
                            <span className="font-medium text-navy-deep">{course.label}</span>
                            {formData.course === course.value && (
                              <CheckCircle className="h-5 w-5 text-gold-primary" />
                            )}
                          </button>
                        ))}
                      </div>
      <div>

  const handleNext = () => {
                        <label className="block text-sm text-navy-muted mb-2">Preferred Batch</label>
                        <select
                          value={formData.batch}
                          onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                          className="w-full h-12 px-3 rounded-lg border border-navy-light focus:border-gold-primary bg-white text-navy-deep"
                        >
                          <option value="">Select Batch (Optional)</option>
                          {batches.map((batch) => (
                            <option key={batch.value} value={batch.value}>
                              {batch.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Confirm */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <h3 className="font-semibold text-navy-deep">Confirm Details</h3>
                      <div className="bg-cream rounded-lg p-4 space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-navy-muted">Name</span>
                          <span className="font-medium text-navy-deep">{formData.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-navy-muted">Phone</span>
                          <span className="font-medium text-navy-deep">{formData.phone}</span>
                        </div>
                        {formData.email && (
                          <div className="flex justify-between text-sm">
                            <span className="text-navy-muted">Email</span>
                            <span className="font-medium text-navy-deep">{formData.email}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span className="text-navy-muted">Course</span>
                          <span className="font-medium text-navy-deep">
                            {courses.find((c) => c.value === formData.course)?.label}
                          </span>
                        </div>
                        {formData.batch && (
                          <div className="flex justify-between text-sm">
                            <span className="text-navy-muted">Preferred Batch</span>
                            <span className="font-medium text-navy-deep">
                              {batches.find((b) => b.value === formData.batch)?.label}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="whatsapp"
                          checked={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.checked })}
                          className="w-4 h-4 rounded border-navy-light text-gold-primary focus:ring-gold-primary"
                        />
                        <label htmlFor="whatsapp" className="text-sm text-navy-muted">
                          Receive updates via WhatsApp
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex gap-4 mt-8">
                    {step > 1 && (
                      <Button
                        variant="outline"
                        onClick={() => setStep(step - 1)}
                        className="flex-1 h-12 border-navy-mid"
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      onClick={handleNext}
                      disabled={!canProceed() || isSubmitting}
                      className="flex-1 h-12 bg-gold-primary text-navy-deep hover:bg-gold-soft font-semibold disabled:opacity-50"
                    >
                      {step === 3 ? (isSubmitting ? "Submitting..." : "Submit Application") : "Continue"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Channels */}
              <div className="bg-white rounded-xl p-6 lg:p-8">
                <h3 className="text-xl font-bold text-navy-deep mb-6">Contact Us Directly</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919002537266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-deep">WhatsApp (Preferred)</p>
                      <p className="text-sm text-navy-muted">+91 90025 37266</p>
                    </div>
                  </a>
                  <a
                    href="tel:+919002537266"
                    className="flex items-center gap-4 p-4 rounded-lg bg-cream hover:bg-navy-light/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-navy-mid flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-deep">Call Us</p>
                      <p className="text-sm text-navy-muted">+91 90025 37266 / +91 62964 03223</p>
                    </div>
                  </a>
                  <a
                    href="mailto:gsihm111@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-cream hover:bg-navy-light/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-navy-mid flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-deep">Email</p>
                      <p className="text-sm text-navy-muted">gsihm111@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-gold-primary" />
                  <h3 className="text-lg font-bold text-navy-deep">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-navy-muted">Monday - Saturday</span>
                    <span className="font-medium text-navy-deep">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-muted">Sunday</span>
                    <span className="font-medium text-navy-muted">Closed</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="p-4 border-b border-navy-light">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-deep">Campus Address</p>
                      <p className="text-sm text-navy-muted">
                        Parijat Rd, Dabgram Fullbari, Fullbari,<br />
                        Dabgram, Panchanai, West Bengal 734002
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-48 bg-navy-light">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.5!2d88.4209!3d26.7195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441c7c7d7b1b7%3A0x0!2zUGFyaWphdCBSZCwgRGFiZ3JhbSBGdWxsYmFyaSwgV2VzdCBCZW5nYWwgNzM0MDAy!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GSIHM Campus Location"
                  />
                </div>
                <a
                  href="https://maps.app.goo.gl/7B9epiBuz9EDy6eHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 text-center text-sm font-medium text-gold-primary hover:bg-gold-pale transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Apply Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
              What Happens Next
            </p>
            <h2 className="mb-4">After You Apply</h2>
            <p className="text-navy-muted text-lg">
              We make the enrollment process simple and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {postApplySteps.map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-gold-pale flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-gold-primary" />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-navy-light -z-10 hidden md:block last:hidden" style={{ display: index === postApplySteps.length - 1 ? "none" : undefined }} />
                <span className="inline-block bg-gold-primary text-navy-deep text-sm font-bold w-6 h-6 rounded-full mb-3">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-navy-deep mb-2">{item.title}</h3>
                <p className="text-navy-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
              FAQs
            </p>
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-navy-muted text-lg">
              Get answers to common questions about admission, fees, and placements.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-navy-light overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-cream transition-colors"
                >
                  <span className="font-semibold text-navy-deep pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-navy-muted flex-shrink-0 transition-transform",
                      expandedFaq === index && "rotate-180"
                    )}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-5 border-t border-navy-light pt-4">
                    <p className="text-navy-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
