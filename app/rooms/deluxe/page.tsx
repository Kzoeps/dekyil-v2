import HeroSection from "@/components/hero-section"
import ImageGrid from "@/components/image-grid"
import SectionTitle from "@/components/section-title"
import DeluxeMainImage from "@/public/images/room-205/deluxe-205-main.webp"

const ROOM_205_IMAGES = [
    {
        src: "/images/room-205/deluxe_205_corner_view.webp",
        alt: "Room 205 view 1",
    },
    {
        src: "/images/room-205/deluxe_205_jakar_view.webp",
        alt: "Room 205 view 2",
    },
    {
        src: "/images/room-205/deluxe_205.webp",
        alt: "Room 205 view 3",
    },
    {
        src: "/images/room-205/deluxe-205-main.webp",
        alt: "Room 205 view 4",
    },
]

const ROOM_207_IMAGES = [
    {
        src: "/images/room-207/room_207_bed.webp",
        alt: "Room 207 view 1",
    },
    {
        src: "/images/room-207/room_207.webp",
        alt: "Room 207 view 2",
    },
]

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
                <ImageGrid images={ROOM_205_IMAGES} />
            </section>
            <section className="mx-auto py-16 max-w-[1440px]">
                <SectionTitle
                    title="Room 207"
                    description="Nu. 4500 per night"
                    className="mb-12"
                />
                <ImageGrid images={ROOM_207_IMAGES} />
            </section>
        </main>
    )
}
