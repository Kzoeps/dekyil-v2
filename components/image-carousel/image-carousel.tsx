"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { X } from "lucide-react"
import Image from "next/image"
import * as React from "react"
import { Card, CardContent } from "../ui/card"

export interface CarouselWithDialogProps {
    images: string[]
}

export default function ImageCarousel({ images }: CarouselWithDialogProps) {
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
        <>
            {/* Main Carousel */}
            <Carousel className="w-full lg:max-w-4xl 2xl:max-w-[1300px] mx-auto px-2">
                <CarouselContent className="w-full">
                    {images.map((src, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/4"
                        >
                            <Card>
                                <CardContent className="flex relative aspect-[16/9] p-0 items-center justify-center">
                                    <Image
                                        onClick={() => openFullscreen(index)}
                                        src={src}
                                        fill
                                        alt="drone image"
                                        className="rounded-xl"
                                        objectFit="cover"
                                    />
                                </CardContent>
                            </Card>
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
                            src={images[fullscreenIndex]}
                            alt={`Fullscreen image ${fullscreenIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    )
}
