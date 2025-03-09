import * as React from "react"
import Image, { StaticImageData } from "next/image"

export interface HeroSectionProps {
  image: StaticImageData | string
  title: string
  imageTitle: string
  imageAlt: string
  description: string
}
export default function HeroSection({
  image,
  title,
  description,
  imageTitle,
  imageAlt
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          title={imageTitle}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full max-w-6xl px-6">
        <h1 className="mb-4 text-5xl font-playfair tracking-tight sm:text-5xl md:text-6xl whitespace-normal">
          {title}
        </h1>
        <p className="text-sm font-worksans font-light text-white uppercase tracking-wider text-muted-foreground whitespace-normal max-w-full">
          {description}
        </p>
      </div>
    </section>
  )
}
