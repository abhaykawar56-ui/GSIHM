import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service - GSIHM",
  description: "Terms of service for Global School of Hospitality Management",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy-deep text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gold-primary hover:text-gold-soft mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
          <p className="text-navy-light mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-navy-deep space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using the GSIHM website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on GSIHM's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">3. Disclaimer of Warranties</h2>
            <p>
              The materials on GSIHM's website are provided on an "as is" basis. GSIHM makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">4. Limitations of Liability</h2>
            <p>
              In no event shall GSIHM or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GSIHM's website, even if GSIHM or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on GSIHM's website could include technical, typographical, or photographic errors. GSIHM does not warrant that any of the materials on its website are accurate, complete, or current. GSIHM may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">6. Materials and Content</h2>
            <p>
              The materials on GSIHM's website are protected by intellectual property laws. Unauthorized use of these materials may violate copyright, trademark, and other laws. You are prohibited from modifying, copying, reproducing, publishing, or transmitting any content without explicit permission from GSIHM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">7. Limitations on Use</h2>
            <p className="mb-4">
              You agree not to access or use the website for any purpose other than that for which we make the website available. You may not use the website in any manner that could damage, disable, overburden, or impair the website or servers or networks connected to the website.
            </p>
            <p>
              Prohibited behavior includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Transmitting obscene or offensive content</li>
              <li>Disrupting the normal flow of dialogue within GSIHM's website</li>
              <li>Attempting to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">8. Third-Party Links</h2>
            <p>
              GSIHM has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by GSIHM of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">9. Modifications</h2>
            <p>
              GSIHM may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">10. Application Process and Admission</h2>
            <p className="mb-4">
              When you apply to GSIHM through our website:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to provide accurate and complete information in your application</li>
              <li>You authorize GSIHM to verify the information you provide</li>
              <li>You agree to comply with all admission requirements and policies</li>
              <li>Admission is subject to our discretion and eligibility criteria</li>
              <li>We reserve the right to reject any application without providing reasons</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">11. Student Responsibilities</h2>
            <p className="mb-4">
              Admitted students agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comply with all institutional policies and procedures</li>
              <li>Attend classes and training sessions as scheduled</li>
              <li>Maintain professional conduct and ethical standards</li>
              <li>Pay all applicable fees and charges as per the agreed schedule</li>
              <li>Complete all coursework and assessments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">12. Refund Policy</h2>
            <p>
              Refund policies are subject to GSIHM's refund guidelines. Please contact our admissions office for detailed information regarding refunds, cancellations, and applicable terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">13. Governing Law</h2>
            <p>
              These Terms and Conditions and any separate agreements we provide to clarify the Service are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">14. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-white rounded-lg border border-navy-mid">
              <p><strong>Email:</strong> gsihm111@gmail.com</p>
              <p><strong>Phone:</strong> +91 90025 37266 / +91 62964 03223</p>
              <p><strong>Address:</strong> Parijat Rd, Dabgram Fullbari, Fullbari, Dabgram, Panchanai, West Bengal 734002</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
