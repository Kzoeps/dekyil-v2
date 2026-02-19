import HeroSection from "@/components/hero-section"
import PriceInfo from "@/components/price-info"
import { RoomCard } from "@/components/room-card"
import SectionTitle from "@/components/section-title"
import { ROOMS } from "@/lib/constants"
import { buildAlternateLanguages } from "@/lib/i18n/alternates"
import { isValidLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries/get-dictionary"
import { buildLocalizedUrl } from "@/lib/seo/site"
import RoomImage from "@/public/images/deluxe.webp"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface LocaleRoomsPageProps {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({
    params,
}: LocaleRoomsPageProps): Promise<Metadata> {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        return {}
    }

    const dict = await getDictionary(locale as Locale)
    const { title, description, keywords } = dict.rooms.meta

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: buildLocalizedUrl(locale, "/rooms"),
            languages: buildAlternateLanguages("/rooms"),
        },
    }
}

export default async function LocaleRoomsPage({
    params,
}: LocaleRoomsPageProps) {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        notFound()
    }

    const validLocale = locale as Locale
    const dict = await getDictionary(validLocale)

    return (
        <main className="relative min-h-screen">
            <HeroSection
                imageAlt={dict.rooms.hero.imageAlt}
                imageTitle={dict.rooms.hero.imageTitle}
                image={RoomImage}
                title={dict.rooms.hero.title}
                description={dict.rooms.hero.description}
            />

            <section className="bg-gray-50 w-full py-12">
                <div className="mx-auto container px-4">
                    <SectionTitle
                        title={dict.rooms.sectionTitle}
                        description={dict.rooms.sectionDescription}
                    />
                    <div className="flex flex-col py-12 sm:flex-row w-full justify-center gap-8 sm:gap-12">
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
                </div>
            </section>
        </main>
    )
}
