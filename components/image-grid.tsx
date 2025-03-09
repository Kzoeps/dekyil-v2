"use client"
import React, { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"
import { X } from "lucide-react"
import SectionTitle from "./section-title"

export interface ImageGridImage {
  src: string | StaticImageData
  alt: string,
  title?: string
}

export interface ImageGridProps {
  images: ImageGridImage[]
  title?: string
}

const ImageGrid = ({ images, title }: ImageGridProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageGridImage | null>(
    null
  )

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    // Cleanup function to ensure we remove the class when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [selectedImage])

  return (
    <>
      <div className="container mx-auto px-4 pt-8">
        <section className="">
          {title && <SectionTitle className="mb-12 mt-5" title={title} />}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full aspect-video overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  title={image.title || ""}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 hover:opacity-30 transition-[transform,opacity] ease-in-out duration-300 cursor-pointer"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={85}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] m-4">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              title={selectedImage.title || ""}
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGrid
