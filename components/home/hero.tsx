"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section
      style={{ minHeight: "560px" }}
      className="grid md:grid-cols-2 w-full"
    >
      {/* ── Left column ── */}
      <div
        className="flex flex-col justify-between px-8 md:px-12 py-10 md:py-12"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        {/* Top content */}
        <div className="flex flex-col gap-5">
          {/* Decorative gold line */}
          <div
            style={{
              width: "40px",
              height: "3px",
              backgroundColor: "#C9A84C",
            }}
          />

          {/* Eyebrow */}
          <p
            className="uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: "#C9A84C",
            }}
          >
            India&apos;s premier hospitality institute
          </p>

          {/* H1 */}
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 42px)",
              fontWeight: 400,
              color: "#F5F0E8",
              lineHeight: 1.15,
              maxWidth: "420px",
            }}
          >
            Launch your career{" "}
            <br />
            in{" "}
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>
              global hospitality
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontSize: "14px",
              color: "rgba(245,240,232,0.6)",
              lineHeight: 1.7,
              maxWidth: "380px",
            }}
          >
            Aviation, Hotel Management, and Cruise — three paths, one
            destination: a world-class career with guaranteed placement support.
          </p>

          {/* CTA group - side by side */}
          <div className="flex items-center gap-4 mt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0D1B2A",
                fontWeight: 500,
                fontSize: "13px",
                padding: "12px 24px",
                borderRadius: "6px",
              }}
            >
              Apply now
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 hover:opacity-80"
              style={{
                fontSize: "13px",
                color: "rgba(245,240,232,0.7)",
              }}
            >
              <Play size={16} fill="rgba(245,240,232,0.7)" />
              Watch our story
            </Link>
          </div>
        </div>

        {/* Stats bar - 4 stats */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-6 md:gap-8">
            {[
              { number: "5000+", label: "Alumni\nplaced" },
              { number: "50+", label: "MOU\npartners" },
              { number: "12+", label: "Countries" },
              { number: "₹8L", label: "Avg.\npackage" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1"
                style={{ minWidth: "60px" }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#F5F0E8",
                  }}
                >
                  {stat.number}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "rgba(245,240,232,0.45)",
                    whiteSpace: "pre-line",
                    lineHeight: 1.3,
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
        {/* Photo grid - 3 images */}
        <div
          className="w-full h-full"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "3px",
          }}
        >
          {/* Top-right cell - Hotel/Resort */}
          <div style={{ gridColumn: "2", gridRow: "1" }}>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80"
              alt="Luxury resort"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Left cell - Laptop/Video conference - spans row 1 and partially row 2 */}
          <div style={{ gridColumn: "1", gridRow: "1 / 3" }}>
            <img
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80"
              alt="Online learning session"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Bottom-right cell - Cruise ship */}
          <div style={{ gridColumn: "2", gridRow: "2" }}>
            <img
              src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=500&q=80"
              alt="Cruise ship"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Certification badges overlay */}
        <div
          className="absolute bottom-16 left-0 right-0 flex flex-wrap justify-center gap-x-4 gap-y-2 px-4"
          style={{
            backgroundColor: "rgba(13,27,42,0.75)",
            padding: "12px 16px",
          }}
        >
          {["NSQF Certified", "ISO 9001:2015", "AICTE Recognised", "Skill India"].map(
            (badge) => (
              <span
                key={badge}
                style={{
                  fontSize: "10px",
                  color: "rgba(245,240,232,0.7)",
                  letterSpacing: "0.02em",
                }}
              >
                {badge}
              </span>
            )
          )}
        </div>

        {/* Floating batch tag */}
        <div
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2"
          style={{
            backgroundColor: "rgba(13,27,42,0.9)",
            border: "1px solid rgba(201,168,76,0.25)",
            borderRadius: "8px",
            padding: "10px 16px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#C9A84C",
              flexShrink: 0,
            }}
          />
          <p style={{ fontSize: "12px", color: "rgba(245,240,232,0.85)" }}>
            <span style={{ color: "#C9A84C", fontWeight: 500 }}>
              Next batch
            </span>{" "}
            — July 2025 · Limited seats available
          </p>
        </div>
      </div>
    </section>
  )
}
