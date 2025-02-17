"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import DroneImage from "@/public/images/drone.webp"
import { X } from "lucide-react"
import Image from "next/image"
import * as React from "react"

const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_16-Feb_22-37-46_21925-YkYC1qpKvSVKXG1JOxGJYREs6IOmGj.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_16-Feb_22-37-46_21925-YkYC1qpKvSVKXG1JOxGJYREs6IOmGj.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_16-Feb_22-37-46_21925-YkYC1qpKvSVKXG1JOxGJYREs6IOmGj.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_16-Feb_22-37-46_21925-YkYC1qpKvSVKXG1JOxGJYREs6IOmGj.png",
]

function CarouselWithDialog() {
    const [fullscreenIndex, setFullscreenIndex] = React.useState<number | null>(
        null
    )

    const openFullscreen = (index: number) => {
        setFullscreenIndex(index)
    }

    const closeFullscreen = () => {
        console.log("clost feulla cser")
        setFullscreenIndex(null)
    }

    return (
        <div className="w-full max-w-4xl mx-auto px-6">
            {/* Main Carousel */}
            <Carousel className="w-full max-w-[1200px] mx-auto">
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index}>
                            <div
                                className="relative aspect-[16/9] md:basis-1/2 lg:basis-1/4 w-full cursor-pointer rounded-lg border bg-white"
                                onClick={() => openFullscreen(index)}
                            >
                                <span className="text-3xl font-semibold">
                                    {index + 1}
                                </span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            {fullscreenIndex !== null && (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                    <button
                        onClick={closeFullscreen}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 transition-colors"
                        aria-label="Close fullscreen view"
                    >
                        <X size={32} />
                    </button>
                    <div className="relative w-full h-full">
                        <Image
                            src={DroneImage || "/placeholder.svg"}
                            alt={`Fullscreen image ${fullscreenIndex + 1}`}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default function ImageCarousel() {
    return <CarouselWithDialog />
}
