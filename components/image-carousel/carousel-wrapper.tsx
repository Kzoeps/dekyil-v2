"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import * as React from "react"
import { useCarousel } from "./carousel-context"
import { ImageDialog } from "./image-dialog"

interface CarouselWrapperProps {
  images: string[]
}

export function CarouselWrapper({ images }: CarouselWrapperProps) {
  const { setApi } = useCarousel()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="w-full max-w-4xl mx-auto px-6">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div
                className="relative aspect-[16/9] w-full cursor-pointer rounded-lg border bg-white"
                onClick={() => setIsOpen(true)}
              >
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-gray-500">
                  {index + 1}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <ImageDialog images={images} isOpen={isOpen} onOpenChange={setIsOpen} />
    </div>
  )
}

