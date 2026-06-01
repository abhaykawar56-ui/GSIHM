"use client"

import Image from "next/image"
import Link from "next/link"
import { FileCheck, Building2, Plane, Ship, Users, CheckCircle, ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const mouPartners = [
  {
    name: "IndiGo Airlines",
    sector: "Aviation",
    coverage: "Direct campus recruitment, 2 batches per year",
    since: "2018",
    logo: "/logos/indigo.svg",
  },
  {
    name: "Taj Hotels",
    sector: "Hotel",
    coverage: "Management trainee program, internship placements",
    since: "2015",
    logo: "/logos/taj.svg",
  },
  {
    name: "Carnival Cruise Lines",
    sector: "Cruise",
    coverage: "International placement, on-board training",
    since: "2020",
    logo: "/logos/carnival.svg",
  },
  {
    name: "Air India",
    sector: "Aviation",
    coverage: "Priority hiring for cabin crew and ground staff",
    since: "2019",
    logo: "/logos/airindia.svg",
  },
]

const aviationBrands = [
  { name: "IndiGo", logo: "/logos/indigo.svg" },
  { name: "Air India", logo: "/logos/airindia.svg" },
  { name: "Qatar Airways", logo: "/logos/qatar.svg" },
  { name: "Emirates", logo: "/logos/emirates.svg" },
]

const hotelBrands = [
  { name: "Taj Hotels", logo: "/logos/taj.svg" },
  { name: "Marriott", logo: "/logos/marriott.svg" },
  { name: "Hilton", logo: "/logos/hilton.svg" },
  { name: "Hyatt", logo: "/logos/hyatt.svg" },
  { name: "Radisson", logo: "/logos/radisson.svg" },
]

const cruiseBrands = [
  { name: "Carnival", logo: "/logos/carnival.svg" },
  { name: "Princess Cruises", logo: "/logos/princess.svg" },
  { name: "Royal Caribbean", logo: "/logos/royalcaribbean.svg" },
  { name: "Norwegian", logo: "/logos/norwegian.svg" },
  { name: "Celebrity Cruises", logo: "/logos/celebrity.svg" },
]

const mouBenefits = [
  "Guaranteed interview access for all GSIHM students",
  "Priority hiring over other candidates",
  "On-site training and internship opportunities",
  "Direct campus recruitment drives",
  "Industry mentor programs",
  "Skill development workshops",
]

export default function PartnershipsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
                Industry Partnerships
              </p>
              <h1 className="text-balance mb-6">
                Not Just Logos — <span className="text-gold-primary">Real Partnerships</span>
              </h1>
              <p className="text-navy-muted text-lg leading-relaxed mb-8">
                Our MOUs with leading hospitality brands mean more than just recognition. They represent formal agreements that guarantee our students priority access to interviews, internships, and career opportunities.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-gold-primary">20+</p>
                  <p className="text-sm text-navy-muted">Partner Companies</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-primary">2+</p>
                  <p className="text-sm text-navy-muted">Active MOUs</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gold-primary">3</p>
                  <p className="text-sm text-navy-muted">Industry Sectors</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/partnership-hero.jpg"
                  alt="Partnership signing ceremony"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <FileCheck className="h-8 w-8 text-gold-primary mb-2" />
                <p className="font-semibold text-navy-deep text-sm">Formal MOU Agreements</p>
                <p className="text-xs text-navy-muted">Legally binding partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What MOUs Mean */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
                Why MOUs Matter
              </p>
              <h2 className="mb-6">What Our Partnerships Mean for You</h2>
              <p className="text-navy-muted text-lg mb-8">
                An MOU (Memorandum of Understanding) is a formal agreement between GSIHM and our partner companies. Unlike simple recruitment ties, MOUs create structured pathways for student placement.
              </p>
              <div className="space-y-4">
                {mouBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold-primary flex-shrink-0 mt-0.5" />
                    <span className="text-navy-muted">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gold-pale rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-deep mb-6">MOU vs. Regular Recruitment</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-navy-deep mb-2">With MOU</p>
                  <ul className="space-y-2 text-sm text-navy-muted">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold-primary" />
                      Guaranteed interview rounds
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold-primary" />
                      Priority over external candidates
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold-primary" />
                      Multiple recruitment cycles/year
                    </li>
                  </ul>
                </div>
                <div className="bg-navy-light/30 rounded-lg p-4">
                  <p className="font-semibold text-navy-muted mb-2">Without MOU</p>
                  <ul className="space-y-2 text-sm text-navy-muted">
                    <li className="flex items-center gap-2 line-through opacity-60">
                      No guaranteed access
                    </li>
                    <li className="flex items-center gap-2 line-through opacity-60">
                      Compete with all applicants
                    </li>
                    <li className="flex items-center gap-2 line-through opacity-60">
                      Apply through public portals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOU Partners */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-primary font-semibold tracking-wide uppercase text-sm mb-4">
              Our MOU Partners
            </p>
            <h2 className="mb-4">Formal Partnership Agreements</h2>
            <p className="text-navy-muted text-lg">
              Each MOU is a commitment from these companies to prioritize GSIHM graduates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {mouPartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl p-6 border border-navy-light hover:border-gold-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-20 h-10 relative">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className={cn(
                    "text-xs font-medium px-2 py-1 rounded",
                    partner.sector === "Aviation" && "bg-blue-100 text-blue-700",
                    partner.sector === "Hotel" && "bg-amber-100 text-amber-700",
                    partner.sector === "Cruise" && "bg-emerald-100 text-emerald-700"
                  )}>
                    {partner.sector}
                  </span>
                </div>
                <h4 className="font-bold text-navy-deep mb-2">{partner.name}</h4>
                <p className="text-navy-muted text-sm mb-3">{partner.coverage}</p>
                <p className="text-xs text-gold-primary font-medium">MOU since {partner.since}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aviation Partners */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Plane className="h-6 w-6 text-aviation" />
            <h2 className="text-2xl font-bold text-navy-deep">Aviation Partners</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {aviationBrands.map((brand) => (
              <div
                key={brand.name}
                className="aspect-square bg-cream rounded-lg flex items-center justify-center p-4 hover:bg-gold-pale transition-colors"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Partners */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="h-6 w-6 text-hotel" />
            <h2 className="text-2xl font-bold text-navy-deep">Hotel Partners</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {hotelBrands.map((brand) => (
              <div
                key={brand.name}
                className="aspect-square bg-white rounded-lg flex items-center justify-center p-4 hover:bg-gold-pale transition-colors"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cruise Partners */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Ship className="h-6 w-6 text-cruise" />
            <h2 className="text-2xl font-bold text-navy-deep">Cruise Partners</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {cruiseBrands.map((brand) => (
              <div
                key={brand.name}
                className="aspect-square bg-cream rounded-lg flex items-center justify-center p-4 hover:bg-gold-pale transition-colors"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="bg-navy-deep py-16 lg:py-24 section-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Users className="h-12 w-12 text-gold-primary mb-4" />
              <h2 className="text-white mb-4">Partner With GSIHM</h2>
              <p className="text-navy-light text-lg mb-6">
                Is your company looking for trained hospitality professionals? Join our network of 20+ partner companies and get priority access to our graduating talent pool.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-navy-light">
                  <CheckCircle className="h-5 w-5 text-gold-primary" />
                  Pre-trained, industry-ready candidates
                </li>
                <li className="flex items-center gap-3 text-navy-light">
                  <CheckCircle className="h-5 w-5 text-gold-primary" />
                  Custom training programs available
                </li>
                <li className="flex items-center gap-3 text-navy-light">
                  <CheckCircle className="h-5 w-5 text-gold-primary" />
                  Reduced hiring and training costs
                </li>
              </ul>
            </div>

            <div className="bg-navy-mid rounded-xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Corporate Partnership Enquiry</h3>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Company Name"
                  className="bg-white border-0 h-12"
                />
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white border-0 h-12"
                />
                <Input
                  type="email"
                  placeholder="Work Email"
                  className="bg-white border-0 h-12"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-white border-0 h-12"
                />
                <Button className="w-full h-12 bg-gold-primary text-navy-deep hover:bg-gold-soft font-semibold">
                  Submit Partnership Enquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="text-navy-light text-xs mt-4 text-center">
                Or email us directly at{" "}
                <a href="mailto:gsihm111@gmail.com" className="text-gold-primary hover:underline">
                  gsihm111@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student CTA */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 text-center max-w-3xl mx-auto shadow-lg">
            <h2 className="mb-4">Benefit from Our Partnerships</h2>
            <p className="text-navy-muted text-lg mb-8">
              Join GSIHM and gain access to exclusive placement opportunities with our 20+ partner companies across Aviation, Hotel, and Cruise industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold-primary text-navy-deep hover:bg-gold-soft font-semibold px-8">
                <Link href="/contact">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-navy-mid text-navy-deep hover:bg-navy-light font-semibold px-8">
                <Link href="/courses">View Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
