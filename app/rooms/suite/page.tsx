import HeroSection from "@/components/hero-section"
import ImageGrid from "@/components/image-grid"
import SectionTitle from "@/components/section-title"
import SuiteRoomPano from "@/public/images/room-203/suite_203_pano.webp"
const images = [
    {
        src: "/images/room-203/suite_203_pano.webp",
        alt: "Room 203 view 1",
    },
    {
        src: "/images/room-203/suite_203_outside.webp",
        alt: "Room 203 view 2",
    },
    {
        src: "/images/room-203/suite_twin.webp",
        alt: "Room 203 view 3",
    },
]
export default function SuitePage() {
    return (
        <main className="relative min-h-screen">
            <HeroSection
                image={SuiteRoomPano}
                title="Our Suite Room"
                description="Dekyil Rooms"
            />
            <section className="mx-auto py-16 max-w-[1440px]">
                <SectionTitle
                    title="Room 202"
                    description="Nu. 8500 per night"
                    className="mb-12"
                />
                <ImageGrid images={images} title="Room 203" />
            </section>
        </main>
    )
}
