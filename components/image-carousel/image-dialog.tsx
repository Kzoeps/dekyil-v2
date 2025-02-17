"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useCarousel } from "./carousel-context"

interface ImageDialogProps {
    images: string[]
    isOpen: boolean
    onOpenChange: (open: boolean) => void
}

export function ImageDialog({
    images,
    isOpen,
    onOpenChange,
}: ImageDialogProps) {
    const { setFullscreenApi } = useCarousel()

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-7xl w-full h-[90vh] p-0">
                <Carousel setApi={setFullscreenApi} className="w-full h-full">
                    <CarouselContent className="h-full">
                        {images.map((src, index) => (
                            <CarouselItem key={index} className="h-full">
                                <div className="relative aspect-[16/9] w-full h-full flex items-center justify-center bg-white rounded-lg">
                                    <div className="text-6xl font-semibold text-gray-500">
                                        {index + 1}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </DialogContent>
        </Dialog>
    )
}
