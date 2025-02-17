import HeroSection from "@/components/hero-section"
import ImageCarousel from "@/components/image-carousel/image-carousel"
import SectionTitle from "@/components/section-title"
import DeluxeMainImage from "@/public/images/room-205/deluxe-205-main.webp"

export default function Deluxe() {
    return (
        <main className="relative min-h-screen">
            <HeroSection
                image={DeluxeMainImage}
                title="Deluxe Room"
                description="Our hotel rooms"
            />
            <section className="mx-auto py-16 max-w-[1440px]">
                <SectionTitle
                    title="Room 205"
                    description="Nu. 4500 per night"
                    className="mb-12"
                />
                <ImageCarousel />
            </section>
        </main>
    )
}
