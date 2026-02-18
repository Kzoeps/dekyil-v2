import HeroSection from "@/components/hero-section"
import InjectStructuredData from "@/components/inject-structured-data"
import PriceInfo from "@/components/price-info"
import { RoomCard } from "@/components/room-card"
import SectionTitle from "@/components/section-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LiteYoutube from "@/components/ui/lite-youtube"
import { ROOMS } from "@/lib/constants"
import { buildAlternateLanguages } from "@/lib/i18n/alternates"
import { isValidLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries/get-dictionary"
import { buildHotelSchema } from "@/lib/schema"
import DroneImage from "@/public/images/drone.webp"
import DrukAir from "@/public/images/drukair_logo.webp"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

interface LocalePageProps {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({
    params,
}: LocalePageProps): Promise<Metadata> {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        return {}
    }

    const dict = await getDictionary(locale as Locale)
    const { title, description, keywords } = dict.home.meta

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `https://www.dekyilguesthouse.com/${locale}`,
            languages: buildAlternateLanguages(""),
        },
    }
}

export default async function LocaleHome({ params }: LocalePageProps) {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        notFound()
    }

    const validLocale = locale as Locale
    const dict = await getDictionary(validLocale)
    const hotelSchema = buildHotelSchema(validLocale)

    return (
        <>
            <InjectStructuredData data={hotelSchema} />
            <main className="relative min-h-screen">
                <HeroSection
                    image={DroneImage}
                    imageAlt={dict.home.hero.imageAlt}
                    imageTitle={dict.home.hero.imageTitle}
                    title={dict.home.hero.title}
                    description={dict.home.hero.description}
                />

                <section className="w-full pt-2 pb-4 bg-gray-50">
                    <Card className="border-none shadow-none bg-gray-50">
                        <CardContent className="flex flex-col items-center space-y-4 p-6">
                            <p className="text-sm font-normal tracking-tight text-muted-foreground">
                                {dict.home.partnerBadge.label}
                            </p>
                            <Image
                                src={DrukAir}
                                title={dict.home.partnerBadge.drukairTitle}
                                alt={dict.home.partnerBadge.drukairAlt}
                                width={160}
                                className="dark:brightness-200"
                            />
                        </CardContent>
                    </Card>
                </section>
                <section className="container mx-auto px-4 py-16">
                    <SectionTitle
                        className="mb-12"
                        title={dict.home.rooms.sectionTitle}
                        description={dict.home.rooms.sectionDescription}
                    />
                    <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-8 sm:gap-12">
                        {ROOMS.map((room) => (
                            <RoomCard
                                key={room.roomKey}
                                alt={
                                    room.roomKey === "suite"
                                        ? dict.roomCard.suiteAlt
                                        : dict.roomCard.deluxeAlt
                                }
                                price={
                                    <PriceInfo
                                        price={room.price}
                                        dict={dict.price}
                                    />
                                }
                                title={dict.nav.roomItems[room.roomKey].title}
                                image={room.image}
                                href={`/${validLocale}${room.href}`}
                                exploreCta={dict.roomCard.exploreCta}
                            />
                        ))}
                    </div>
                </section>

                <section className="container mx-auto px-4 py-16 max-w-[700px]">
                    <Card className="rounded-none">
                        <CardHeader className="py-2 md:p-6">
                            <CardTitle className="text-center font-playfair text-2xl font-bold">
                                {dict.home.howToFindUs.heading}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-2 md:p-6">
                            <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                                <LiteYoutube
                                    videoId="3KrwGtUJSm8"
                                    title={dict.home.howToFindUs.videoTitle}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </>
    )
}
