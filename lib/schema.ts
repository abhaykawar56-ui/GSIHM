// Schema.org structured data generation for Global Spectra Institute Of Hospitality Management
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.globalspectra.in/",
  "name": "Global Spectra Institute Of Hospitality Management",
  "alternateName": "GSIHM",
  "description": "Premium hospitality education institute offering Aviation, Hotel Management, and Cruise Management programs with 8+ years of excellence.",
  "url": "https://www.globalspectra.in",
  "logo": "https://www.globalspectra.in/logo.png",
  "image": "https://www.globalspectra.in/hero.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Student Admissions",
    "telephone": "+91-XXXXXXXXXX",
    "email": "gsihm111@gmail.com",
    "availableLanguage": ["en", "hi"]
  },
  "sameAs": [
    "https://www.facebook.com/gsihm",
    "https://www.instagram.com/gsihm",
    "https://www.linkedin.com/company/gsihm"
  ],
  "foundingDate": "2018",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": "20"
  },
  "areaServed": {
    "@type": "GeoShape",
    "name": "India and International"
  },
  "alumni": {
    "@type": "Person",
    "name": "GSIHM Alumni Network",
    "description": "3000+ graduates placed in international hospitality brands"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Aviation Management Program",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "educationalLevel": "Vocational/Professional"
    },
    {
      "@type": "Offer",
      "name": "Hotel Management Program",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "educationalLevel": "Vocational/Professional"
    },
    {
      "@type": "Offer",
      "name": "Cruise Management Program",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "educationalLevel": "Vocational/Professional"
    }
  ]
}

export const courseSchema = (courseType: 'aviation' | 'hotel' | 'cruise') => {
  const courses = {
    aviation: {
      name: "Aviation Management Program",
      description: "Professional aviation training with cabin crew and airline operations expertise",
      duration: "P1Y"
    },
    hotel: {
      name: "Hotel Management Program",
      description: "Luxury hotel management training covering operations, F&B, and guest services",
      duration: "P1Y"
    },
    cruise: {
      name: "Cruise Management Program",
      description: "International cruise hospitality training with maritime standards",
      duration: "P1Y"
    }
  }

  const course = courses[courseType]

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "Global Spectra Institute Of Hospitality Management",
      "url": "https://www.globalspectra.in"
    },
    "duration": course.duration,
    "educationalLevel": "Vocational",
    "coursePrerequisites": "Class 12 Pass or Graduation",
    "numberOfCredits": 12,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "name": `${course.name} - May 2026 Batch`,
      "startDate": "2026-05-01",
      "endDate": "2027-04-30",
      "courseMode": "Blended",
      "inLanguage": ["en", "hi"],
      "isAccessibleForFree": false,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.globalspectra.in/contact"
      }
    }
  }
}

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  "name": "Global Spectra Institute Of Hospitality Management",
  "image": "https://www.globalspectra.in/hero.jpg",
  "description": "Premium hospitality training institute in India with 3000+ alumni placed globally",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "India"
  },
  "telephone": "+91-XXXXXXXXXX",
  "email": "gsihm111@gmail.com",
  "url": "https://www.globalspectra.in",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "2500",
    "bestRating": "5",
    "worstRating": "1"
  }
}
