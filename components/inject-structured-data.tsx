import React from "react"
import { Thing, WithContext } from 'schema-dts'
export interface InjectStructuredDataProps {
  data: WithContext<Thing>[] | WithContext<Thing>
}
export default function InjectStructuredData({ data }: InjectStructuredDataProps) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )

}
