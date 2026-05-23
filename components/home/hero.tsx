"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      style={{ minHeight: "520px" }}
      className="grid md:grid-cols-2 w-full"
    >
      {/* ── Left column ── */}
      <div
        className="flex flex-col justify-between px-12 py-12"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        {/* Top content */}
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <p
            className="uppercase"
            style={{
              fontSize: "10px",
              letterSpacing: "0.12em",
              color: "#C9A84C",
            }}
          >
            India&apos;s premier hospitality institute
          </p>

          {/* H1 */}
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 500,
              color: "#F5F0E8",
              lineHeight: 1.12,
              maxWidth: "420px",
            }}
          >
            Launch your career in{" "}
            <span style={{ color: "#C9A84C" }}>global hospitality</span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "14px",
              color: "rgba(245,240,232,0.55)",
              lineHeight: 1.65,
              maxWidth: "380px",
            }}
          >
            Aviation, Hotel Management, and Cruise — three paths, one
            destination: a world-class career.
          </p>

          {/* CTA group */}
          <div className="flex flex-col gap-3 mt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0D1B2A",
                fontWeight: 500,
                fontSize: "13px",
                padding: "12px 26px",
                borderRadius: "6px",
              }}
            >
              Apply Now
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/about"
              className="self-start hover:underline"
              style={{
                fontSize: "13px",
                color: "rgba(245,240,232,0.4)",
                textDecoration: "none",
              }}
            >
              Watch our story →
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div>
          <div
            className="mb-6"
            style={{
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          />
          <div className="flex gap-10">
            {[
              { number: "5000+", label: "Alumni placed" },
              { number: "50+", label: "MOU partners" },
              { number: "12+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 500,
                    color: "#C9A84C",
                  }}
                >
                  {stat.number}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "rgba(245,240,232,0.4)",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right column ── hidden on mobile */}
      <div
        className="relative hidden md:block"
        style={{ backgroundColor: "#16263A" }}
      >
        {/* Asymmetric photo grid */}
        <div
          className="w-full h-full"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "4px",
          }}
        >
          {/* Left cell — spans both rows (tall portrait) */}
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
            alt="Cabin crew professional"
            style={{
              gridRow: "1 / 3",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          {/* Top-right cell */}
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80"
            alt="Luxury hotel lobby"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          {/* Bottom-right cell */}
          <img
            src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&q=80"
            alt="Cruise ship"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Floating batch tag */}
        <div
          className="absolute bottom-4 left-4 flex items-center gap-2"
          style={{
            backgroundColor: "rgba(13,27,42,0.85)",
            border: "0.5px solid rgba(201,168,76,0.3)",
            borderRadius: "8px",
            padding: "10px 14px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#C9A84C",
              flexShrink: 0,
            }}
          />
          <p style={{ fontSize: "11px", color: "rgba(245,240,232,0.8)" }}>
            <span style={{ color: "#C9A84C", fontWeight: 500 }}>
              Next batch
            </span>{" "}
            — July 2025. Limited seats.
          </p>
        </div>
      </div>
    </section>
  )
}
