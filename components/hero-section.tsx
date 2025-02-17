import * as React from 'react'
import Image, { StaticImageData } from 'next/image'

export interface HeroSectionProps {
    image: StaticImageData | string
    title: string
    description: string
}
export default function HeroSection({
    image,
    title,
    description,
}: HeroSectionProps) {
    return (
        <section className="relative min-h-screen">
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt="Dekyl Guest House"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    {title}
                </h1>
                <p className="text-base uppercase tracking-wider text-muted-foreground sm:text-lg md:text-xl">
                    {description}
                </p>
            </div>
        </section>
    )
}
