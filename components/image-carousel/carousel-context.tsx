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

const CarouselContext = React.createContext<CarouselContextType | undefined>(undefined)

export function CarouselProvider({ children }: { children: React.ReactNode }) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [fullscreenApi, setFullscreenApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  // Sync the current slide between normal and fullscreen carousels
  React.useEffect(() => {
    if (!api || !fullscreenApi) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
      fullscreenApi.scrollTo(api.selectedScrollSnap())
    })

    fullscreenApi.on("select", () => {
      setCurrent(fullscreenApi.selectedScrollSnap())
      api.scrollTo(fullscreenApi.selectedScrollSnap())
    })
  }, [api, fullscreenApi])

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

