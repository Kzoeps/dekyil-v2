import * as React from 'react'
import { Card, CardContent } from './ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from './ui/carousel'

export default function GalleryCarousel() {
    return (
        <>
            <Carousel
                opts={{
                    align: 'start',
                }}
                className="w-full max-w-[1200px] mx-auto"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/4"
                        >
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-[4/3] items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">
                                            {index + 1}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}
