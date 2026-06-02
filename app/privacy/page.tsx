import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - GSIHM",
  description: "Privacy policy for Global School of Hospitality Management",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy-deep text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gold-primary hover:text-gold-soft mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-navy-light mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-navy-deep space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">1. Introduction</h2>
            <p>
              Global School of Hospitality Management (GSIHM) ("we", "our", or "us") operates the GSIHM website and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, address, and other contact information when you voluntarily provide it through forms, inquiries, or applications.</li>
              <li><strong>Course Interests:</strong> Information about the programs you are interested in, your batch preference, and educational background.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and links clicked.</li>
              <li><strong>Device Information:</strong> Information about your device, browser, IP address, and operating system.</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and analyze site usage.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">3. Use of Your Information</h2>
            <p className="mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To process your application for admission or partnership</li>
              <li>To send you promotional materials, updates, and newsletters (with your consent)</li>
              <li>To improve and personalize your experience on our website</li>
              <li>To analyze website usage and trends</li>
              <li>To comply with legal obligations and prevent fraud</li>
              <li>To contact you regarding your inquiry or application status</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">4. Disclosure of Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Our staff and service providers who assist in operating our website and conducting our business</li>
              <li>Law enforcement agencies if required by law or to protect our rights</li>
              <li>Business partners with your consent for career opportunities related to hospitality industries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of receiving marketing communications</li>
              <li>Withdraw your consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">7. Retention of Information</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. The retention period may vary depending on the context of processing and our legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of external websites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18 without parental consent. We do not knowingly collect personal information from children under 18. If we become aware of such collection, we will promptly delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time. Changes will be effective upon posting to the website. Your continued use of our website following the posting of changes constitutes your acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-deep mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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
