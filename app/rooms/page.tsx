import HeroSection from "@/components/hero-section"
import { RoomCard } from "@/components/room-card"
import SectionTitle from "@/components/section-title"
import { ROOMS } from "@/lib/constants"
import RoomImage from "@/public/images/deluxe.webp"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Rooms",
    description: "Explore the Dekyil Guest House Rooms",
    keywords:
        "Dekyil Guest House, Rooms, Hotel in Bumthang, Bumthang, Bhutan, Chamkhar Valley",
    alternates: {
        canonical: "/rooms",
    },
}

export default function RoomsPage() {
    return (
        <main className="relative min-h-screen">
            <HeroSection
                image={RoomImage}
                title="Hotel Rooms"
                description="tailored for a home away from home"
            />

            <section className="bg-gray-50 w-full py-12">
                <div className="mx-auto container px-4">
                    <SectionTitle
                        title="Our Rooms"
                        description="Choose from our carefully designed rooms"
                    />
                    <div className="flex flex-col py-12 sm:flex-row w-full justify-center gap-8 sm:gap-12">
                        {ROOMS.map((room) => (
                            <RoomCard key={room.title} {...room} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
