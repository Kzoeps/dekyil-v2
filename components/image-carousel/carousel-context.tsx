"use client"

import * as React from "react"
import type { CarouselApi } from "@/components/ui/carousel"

interface CarouselContextType {
    api: CarouselApi | undefined
    setApi: (api: CarouselApi | undefined) => void
    fullscreenApi: CarouselApi | undefined
    setFullscreenApi: (api: CarouselApi | undefined) => void
    current: number
    setCurrent: (index: number) => void
}

const CarouselContext = React.createContext<CarouselContextType | undefined>(
    undefined
)

export function CarouselProvider({ children }: { children: React.ReactNode }) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [fullscreenApi, setFullscreenApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    const handleSelect = React.useCallback(() => {
        if (!api || !fullscreenApi) return
        const nextIndex = api.selectedScrollSnap()
        setCurrent(nextIndex)
        fullscreenApi.scrollTo(nextIndex)
    }, [api, fullscreenApi])

    const handleFullscreenSelect = React.useCallback(() => {
        if (!api || !fullscreenApi) return
        const nextIndex = fullscreenApi.selectedScrollSnap()
        setCurrent(nextIndex)
        api.scrollTo(nextIndex)
    }, [api, fullscreenApi])

    // Sync the current slide between normal and fullscreen carousels
    React.useEffect(() => {
        if (!api || !fullscreenApi) return

        api.on("select", handleSelect)
        fullscreenApi.on("select", handleFullscreenSelect)

        return () => {
            api.off("select", handleSelect)
            fullscreenApi.off("select", handleFullscreenSelect)
        }
    }, [api, fullscreenApi, handleSelect, handleFullscreenSelect])

    return (
        <CarouselContext.Provider
            value={{
                api,
                setApi,
                fullscreenApi,
                setFullscreenApi,
                current,
                setCurrent,
            }}
        >
            {children}
        </CarouselContext.Provider>
    )
}

export function useCarousel() {
    const context = React.useContext(CarouselContext)
    if (!context) {
        throw new Error("useCarousel must be used within a CarouselProvider")
    }
    return context
}
