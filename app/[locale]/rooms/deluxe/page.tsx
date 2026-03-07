import HeroSection from "@/components/hero-section"
import InjectStructuredData from "@/components/inject-structured-data"
import PriceInfo from "@/components/price-info"
import SectionTitle from "@/components/section-title"
import { buildAlternateLanguages } from "@/lib/i18n/alternates"
import { isValidLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries/get-dictionary"
import { buildLocalizedUrl } from "@/lib/seo/site"
import {
    getRoom205Images,
    getRoom206Images,
    getRoom207Images,
} from "@/lib/image_constants"
import { buildDeluxeBreadCrumb, buildDeluxeRoomSchema } from "@/lib/schema"
import DeluxeMainImage from "@/public/images/room-205/deluxe-205-main.webp"
import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"

const DeferredImageGrid = dynamic(() => import("@/components/image-grid"), {
    loading: () => <ImageGridFallback />,
})

const ImageGridFallback = () => (
    <div className="container mx-auto px-4 pt-8">
        <div className="h-48 w-full rounded-lg bg-muted/40 animate-pulse" />
    </div>
)

interface DeluxePageProps {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({
    params,
}: DeluxePageProps): Promise<Metadata> {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        return {}
    }

    const dict = await getDictionary(locale as Locale)
    const { title, description, keywords } = dict.deluxeRoom.meta

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: buildLocalizedUrl(locale, "/rooms/deluxe"),
            languages: buildAlternateLanguages("/rooms/deluxe"),
        },
    }
}

export default async function LocaleDeluxePage({ params }: DeluxePageProps) {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        notFound()
    }

    const validLocale = locale as Locale
    const dict = await getDictionary(validLocale)
    const deluxeRoomSchema = buildDeluxeRoomSchema(validLocale)
    const deluxeBreadCrumb = buildDeluxeBreadCrumb(validLocale)

    const room205Images = getRoom205Images(validLocale)
    const room206Images = getRoom206Images(validLocale)
    const room207Images = getRoom207Images(validLocale)

    return (
        <>
            <InjectStructuredData data={[deluxeRoomSchema, deluxeBreadCrumb]} />
            <main className="relative min-h-screen">
                <HeroSection
                    imageAlt={dict.deluxeRoom.hero.imageAlt}
                    imageTitle={dict.deluxeRoom.hero.imageTitle}
                    image={DeluxeMainImage}
                    title={dict.deluxeRoom.hero.title}
                    description={dict.deluxeRoom.hero.description}
                />
                <section className="mx-auto py-16 max-w-[1440px] px-4">
                    <SectionTitle
                        title={dict.deluxeRoom.sectionTitle}
                        description={dict.deluxeRoom.sectionDescription}
                        className="mb-12 flex flex-col gap-12"
                    />
                </section>
                <section className="mx-auto py-16 max-w-[1440px]">
                    <SectionTitle
                        title={dict.deluxeRoom.room205Title}
                        description={
                            <PriceInfo price="4500" dict={dict.price} />
                        }
                        className="mb-12 flex flex-col gap-4"
                    />
                    <DeferredImageGrid images={room205Images} />
                </section>
                <section className="mx-auto py-16 max-w-[1440px]">
                    <SectionTitle
                        title={dict.deluxeRoom.room206Title}
                        className="mb-12 flex flex-col gap-4"
                        description={
                            <PriceInfo price="4500" dict={dict.price} />
                        }
                    />
                    <DeferredImageGrid images={room206Images} />
                </section>
                <section className="mx-auto py-16 max-w-[1440px]">
                    <SectionTitle
                        title={dict.deluxeRoom.room207Title}
                        className="mb-12 flex flex-col gap-4"
                        description={
                            <PriceInfo price="4500" dict={dict.price} />
                        }
                    />
                    <DeferredImageGrid images={room207Images} />
                </section>
            </main>
        </>
    )
}
