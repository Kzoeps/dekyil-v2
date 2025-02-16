import Image from "next/image";
import DroneImage from "@/public/drone.webp"
import Suite from "@/public/suite.webp"
import Delux from "@/public/deluxe.webp"
import DrukAir from "@/public/drukair_logo.webp"
import { RoomCard } from "@/components/room-card";
import { Card, CardContent } from "@/components/ui/card";

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
    image: Delux,
    href: "/rooms/deluxe",
  },
]
export default function Home() {
  return (

    <main className="relative min-h-screen">

      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={DroneImage}
            alt="Dekyl Guest House"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Enjoy Bumthang</h1>
          <p className="text-base uppercase tracking-wider text-muted-foreground sm:text-lg md:text-xl">
            Live with a scenic view of the Bumthang valley
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <Card className="border-none shadow-none">
          <CardContent className="flex flex-col items-center space-y-4 p-6">
            <p className="text-sm font-medium text-muted-foreground">Official hotel partner of</p>
            <Image
              src={DrukAir}
              alt="Drukair - Royal Bhutan Airlines"
              width={160}
              height={40}
              className="dark:brightness-200"
            />
          </CardContent>
        </Card>
      </section><section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Rooms</h2>
          <p className="mt-4 text-muted-foreground">Choose from our carefully designed rooms</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
          {rooms.map((room) => (
            <RoomCard key={room.title} {...room} />
          ))}
        </div>
      </section>    </main>);
}
