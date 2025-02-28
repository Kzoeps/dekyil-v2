import HeroSection from "@/components/hero-section"
import ImageGrid from "@/components/image-grid"
import PriceInfo from "@/components/price-info"
import SectionTitle from "@/components/section-title"
import SuiteRoomPano from "@/public/images/room-203/suite_203_pano.webp"
import { Metadata } from "next"
const ROOM_203_IMAGES = [
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
    {
        src: "/images/room-203/twin_suite_203_overview.webp",
        alt: "Room 203 view 4",
    },
    {
        src: "/images/room-203/twin_suite_203.webp",
        alt: "Room 203 view 5",
    },
]

const ROOM_202_IMAGES = [
    {
        src: "/images/room-202/room_202_scenery.webp",
        alt: "Room 202 view 1",
    },
    {
        src: "/images/room-202/room_202_view.webp",
        alt: "Room 202 view 2",
    },
    {
        src: "/images/room-202/suite_202_corner_view.webp",
        alt: "Room 202 view 3",
    },
]

const SUITE_BATHROOM_IMAGES = [
    {
        src: "/images/suite_bathroom/bathoroom_204.webp",
        alt: "Bathroom view 1",
    },
    {
        src: "/images/suite_bathroom/bathroom_202.webp",
        alt: "Bathroom view 2",
    },
    {
        src: "/images/suite_bathroom/bathroom.webp",
        alt: "Bathroom view 3",
    },
    {
        src: "/images/suite_bathroom/Bathtub.webp",
        alt: "Bathroom view 4",
    },
    {
        src: "/images/suite_bathroom/room_204_bathroom.webp",
        alt: "Bathroom view 5",
    },
]

export const metadata: Metadata = {
    title: "Suite Room",
    description: "Explore the Suite Room at Dekyil Guest House",
    keywords:
        "Dekyil Guest House, Suite Room, Hotel in Bumthang, Bumthang, Bhutan, Chamkhar Valley",
    alternates: {
        canonical: "/rooms/suite",
    },
}
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
                    title="The Suite Room"
                    description={<PriceInfo className="mt-6" price="6500" />}
                    className="mb-12"
                />
                <p className="px-4 text-center text-muted-foreground">
                    Dekyil Guest House&apos;s suite room provides a luxurious
                    experience to your stay in Bumthang. The large window panes
                    offer an expansive view of the Chamkhar valley and also make
                    for a great workplace. The floor heating systems in the
                    bathroom also make for a delightful surprise in the freezing
                    winters of Bumthang.
                </p>
                <ImageGrid images={ROOM_203_IMAGES} title="Room 203" />
                <ImageGrid images={ROOM_202_IMAGES} title="Room 202" />
                <ImageGrid images={SUITE_BATHROOM_IMAGES} title="Bathroom" />
            </section>
        </main>
    )
}
