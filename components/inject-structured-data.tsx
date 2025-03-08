import React from "react"
export interface InjectStructuredDataProps {
  data: Record<string, any>
}
export default function InjectStructuredData({ data }: InjectStructuredDataProps) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )

}
