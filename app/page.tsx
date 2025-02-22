import Image from "next/image"
import DroneImage from "@/public/images/drone.webp"
import Suite from "@/public/images/suite.webp"
import Deluxe from "@/public/images/deluxe.webp"
import DrukAir from "@/public/images/drukair_logo.webp"
import { RoomCard } from "@/components/room-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"

const rooms = [
    {
        title: "Suite Room",
        price: "Nu.6500+ / per night",
        image: Suite,
        href: "/rooms/suite",
    },
    {
        title: "Deluxe Room",
        price: "Nu.4500+ / per night",
        image: Deluxe,
        href: "/rooms/deluxe",
    },
]
export default function Home() {
    return (
        <main className="relative min-h-screen">
            <HeroSection
                image={DroneImage}
                title="Enjoy Bumthang"
                description="Live with a scenic view of the Bumthang valley"
            />

            <section className="container mx-auto py-4 bg-gray-50">
                <Card className="border-none shadow-none bg-gray-50">
                    <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <p className="text-sm font-normal tracking-tight text-muted-foreground">
                            Official hotel partner of
                        </p>
                        <Image
                            src={DrukAir}
                            alt="Drukair - Royal Bhutan Airlines"
                            width={160}
                            className="dark:brightness-200"
                        />
                    </CardContent>
                </Card>
            </section>
            <section className="container mx-auto px-4 py-16">
                <SectionTitle
                    className="mb-12"
                    title="Our Rooms"
                    description="Choose from our carefully designed rooms"
                />
                <div className="flex flex-col sm:flex-row w-full justify-center gap-8 sm:gap-12">
                    {rooms.map((room) => (
                        <RoomCard key={room.title} {...room} />
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <Card className="rounded-none">
                    <CardHeader>
                        <CardTitle className="text-center font-playfair text-2xl font-bold">
                            How to Find Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/3KrwGtUJSm8?si=K6MMH4NgVLt_uO-j"
                                title="Directions to Dekyl Guest House"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </main>
    )
}
