import HeroSection from "@/components/hero-section"
import PriceInfo from "@/components/price-info"
import { RoomCard } from "@/components/room-card"
import SectionTitle from "@/components/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LiteYoutube from "@/components/ui/lite-youtube"
import { ROOMS } from "@/lib/constants"
import DroneImage from "@/public/images/drone.webp"
import DrukAir from "@/public/images/drukair_logo.webp"
import Image from "next/image"

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <HeroSection
                image={DroneImage}
                title="Enjoy Bumthang"
                description="Live with a scenic view of the Bumthang valley"
            />

            <section className="w-full pt-2 pb-4 bg-gray-50">
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
                    {ROOMS.map((room) => (
                        <RoomCard
                            key={room.title}
                            price={<PriceInfo price={room.price} />}
                            title={room.title}
                            image={room.image}
                            href={room.href}
                        />
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-16 max-w-[700px]">
                <Card className="rounded-none">
                    <CardHeader>
                        <CardTitle className="text-center font-playfair text-2xl font-bold">
                            How to Find Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                            <LiteYoutube videoId="3KrwGtUJSm8" />
                        </div>
                    </CardContent>
                </Card>
            </section>
        </main>
    )
}
