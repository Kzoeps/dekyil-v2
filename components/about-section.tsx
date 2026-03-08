import FlowersImage from "@/public/images/flowers.webp"
import MotherDaughterImage from "@/public/images/mother-daughter-duo.webp"
import Image from "next/image"
import type { AboutUsDictionary } from "@/lib/i18n/dictionaries/types"

interface AboutSectionProps {
    dict: AboutUsDictionary["section"]
}

export default function AboutSection({ dict }: AboutSectionProps) {
    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="relative h-[300px] md:h-[380px] w-full">
                    {/* Main larger image */}
                    <div className="absolute left-0 top-0 w-[85%] h-full">
                        <Image
                            src={FlowersImage}
                            alt={dict.flowersAlt}
                            title={dict.flowersTitle}
                            className="shadow-lg object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    {/* Smaller overlapping image */}
                    <div className="absolute right-0 border-white border-4 -bottom-1/4 md:-bottom-8 w-[50%] h-[50%] md:h-[65%]">
                        <Image
                            src={MotherDaughterImage}
                            alt={dict.motherDaughterAlt}
                            title={dict.motherDaughterTitle}
                            className="shadow-lg object-cover"
                            fill
                            sizes="(max-width: 768px) 33vw, 20vw"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="inline-block">
                        <h2 className="text-4xl font-bold font-playfair tracking-tight ">
                            {dict.heading}
                        </h2>
                        <hr className="mt-3 w-full bg-slate-500" />
                    </div>

                    <div className="space-y-4 text-muted-foreground">
                        <p>{dict.body1}</p>
                        <p>{dict.body2}</p>
                        <p>{dict.body3}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
