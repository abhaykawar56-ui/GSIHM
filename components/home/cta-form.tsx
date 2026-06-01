"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle } from "lucide-react"

const courses = [
  { value: "aviation", label: "Aviation" },
  { value: "hotel", label: "Hotel Management" },
  { value: "cruise", label: "Cruise Management" },
]

export function CTAForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "homepage_cta",
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

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mb-4">Thank You!</h2>
            <p className="text-navy-muted text-lg">
              Our admissions team will contact you within 24 hours. Keep your phone handy!
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Content Side */}
              <div className="bg-navy-deep p-8 lg:p-12 text-white">
                <h2 className="text-white text-balance mb-4">
                  Start Your Journey Today
                </h2>
                <p className="text-navy-light mb-8">
                  Fill in your details and our admissions team will reach out within 24 hours to guide you through the enrollment process.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold-primary flex-shrink-0" />
                    <span className="text-navy-light">Free career counseling session</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold-primary flex-shrink-0" />
                    <span className="text-navy-light">Campus tour & demo class</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold-primary flex-shrink-0" />
                    <span className="text-navy-light">Career roadmap session</span>
                  </li>
                </ul>
              </div>

              {/* Form Side */}
              <div className="p-8 lg:p-12">
                <h3 className="text-xl font-bold text-navy-deep mb-6">Get Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 border-navy-light focus:border-gold-primary focus:ring-gold-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 border-navy-light focus:border-gold-primary focus:ring-gold-primary"
                    />
                  </div>
                  <div>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      required
                      className="w-full h-12 px-3 rounded-lg border border-navy-light focus:border-gold-primary focus:ring-1 focus:ring-gold-primary bg-white text-navy-deep"
                    >
                      <option value="">Select Course Interest</option>
                      {courses.map((course) => (
                        <option key={course.value} value={course.value}>
                          {course.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gold-primary text-navy-deep hover:bg-gold-soft font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
