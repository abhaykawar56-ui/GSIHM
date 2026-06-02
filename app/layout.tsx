import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Schema } from '@/components/schema'
import { organizationSchema } from '@/lib/schema'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans"
})

export const metadata: Metadata = {
  title: 'GSIHM - Global School of Hospitality Management',
  description: 'Launch your career in hospitality with GSIHM. 100% placement record. Aviation, Hotel Management, and Cruise programs with global exposure.',
  keywords: ['hospitality management', 'aviation training', 'hotel management', 'cruise jobs', 'GSIHM', 'career in hospitality'],
}

export const viewport: Viewport = {
  themeColor: '#0A1628',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-cream">
      <head>
        <Schema schema={organizationSchema} />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
