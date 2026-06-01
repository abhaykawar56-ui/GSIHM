"use client"

import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const footerLinks = {
  programs: [
    { href: "/courses#aviation", label: "Aviation" },
    { href: "/courses#hotel", label: "Hotel Management" },
    { href: "/courses#cruise", label: "Cruise Management" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/placements", label: "Placements" },
    { href: "/partnerships", label: "Partnerships" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/contact#faq", label: "FAQs" },
    { href: "/contact", label: "Apply Now" },
    { href: "#", label: "Download Brochure" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">GSIHM</span>
            </Link>
            <p className="mt-4 text-navy-light leading-relaxed max-w-sm">
              Global School of Hospitality Management. Transforming careers with world-class training in Aviation, Hotel Management, and Cruise industries.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-primary flex-shrink-0 mt-0.5" />
                <span className="text-navy-light text-sm">
                  Parijat Rd, Dabgram Fullbari, Fullbari, Dabgram, Panchanai, West Bengal 734002
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold-primary flex-shrink-0" />
                <span className="text-navy-light text-sm">+91 90025 37266 / +91 62964 03223</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-primary flex-shrink-0" />
                <span className="text-navy-light text-sm">gsihm111@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-light text-sm hover:text-gold-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-light text-sm hover:text-gold-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.label === "Download Brochure" ? (
                    <button
                      onClick={handleBrochureDownload}
                      className="text-navy-light text-sm hover:text-gold-primary transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-navy-light text-sm hover:text-gold-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-mid">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-light text-sm">
              &copy; {new Date().getFullYear()} GSIHM. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-navy-light text-sm hover:text-gold-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-navy-light text-sm hover:text-gold-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
