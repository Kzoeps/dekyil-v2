import Image from "next/image"
import DroneImage from "@/public/images/deluxe.webp"
import AnotherImage from "@/public/images/flowers.webp"

export default function AboutSection() {
    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="relative h-[300px] md:h-[380px] w-full">
                    {/* Main larger image */}
                    <div className="absolute left-0 top-0 w-[85%] h-full">
                        <Image
                            src={DroneImage}
                            alt="Hotel room interior with wooden walls and pendant lighting"
                            className="shadow-lg object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    {/* Smaller overlapping image */}
                    <div className="absolute right-0 border-white border-4 -bottom-1/4 md:-bottom-8 w-[50%] h-[50%] md:h-[65%]">
                        <Image
                            src={AnotherImage}
                            alt="Another view of the hotel room"
                            className="shadow-lg object-cover"
                            fill
                            sizes="(max-width: 768px) 33vw, 20vw"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-4xl font-serif">About Us</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            DeKyi Guest House is a family owned and run hotel
                            located in the heart of Bumthang and features a
                            scenic view of the Bumthang valley and the Jakar
                            Dzong. It is ideally located within walking distance
                            of Chamkhar downtown area to indulge in souvenir
                            shopping or a stroll around town.
                        </p>
                        <p>
                            The rooms are equipped with modern amenities
                            including under-floor heating systems for the
                            bathrooms, combined with an exceptional experience
                            in Bhutanese hospitality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
