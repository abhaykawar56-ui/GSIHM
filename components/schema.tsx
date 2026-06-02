// Component to inject Schema.org structured data into Next.js pages
import { ReactNode } from 'react'

interface SchemaProps {
  schema: Record<string, unknown> | Record<string, unknown>[]
  children?: ReactNode
}

export function Schema({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
