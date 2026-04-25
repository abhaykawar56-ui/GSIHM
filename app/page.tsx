import { Hero } from "@/components/home/hero"
import { TrustBar } from "@/components/home/trust-bar"
import { CourseCards } from "@/components/home/course-cards"
import { PlacementSnapshot } from "@/components/home/placement-snapshot"
import { Testimonials } from "@/components/home/testimonials"
import { CTAForm } from "@/components/home/cta-form"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CourseCards />
      <PlacementSnapshot />
      <Testimonials />
      <CTAForm />
    </>
  )
}
