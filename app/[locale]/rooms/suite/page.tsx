import HeroSection from "@/components/hero-section"
import ImageGrid from "@/components/image-grid"
import InjectStructuredData from "@/components/inject-structured-data"
import PriceInfo from "@/components/price-info"
import SectionTitle from "@/components/section-title"
import { buildAlternateLanguages } from "@/lib/i18n/alternates"
import { isValidLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries/get-dictionary"
import {
    getRoom202Images,
    getRoom203Images,
    getRoom204Images,
    getSuiteBathroomImages,
} from "@/lib/image_constants"
import { buildSuiteBreadCrumb, buildSuiteRoomSchema } from "@/lib/schema"
import SuiteRoomPano from "@/public/images/room-203/suite_203_pano.webp"
import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { Suspense } from "react"

const DeferredImageGrid = dynamic(() => import("@/components/image-grid"), {
    ssr: false,
})

const ImageGridFallback = () => (
    <div className="container mx-auto px-4 pt-8">
        <div className="h-48 w-full rounded-lg bg-muted/40 animate-pulse" />
    </div>
)

interface SuitePageProps {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({
    params,
}: SuitePageProps): Promise<Metadata> {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        return {}
    }

    const dict = await getDictionary(locale as Locale)
    const { title, description, keywords } = dict.suiteRoom.meta

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `https://www.dekyilguesthouse.com/${locale}/rooms/suite`,
            languages: buildAlternateLanguages("/rooms/suite"),
        },
    }
}

export default async function LocaleSuitePage({ params }: SuitePageProps) {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        notFound()
    }

    const validLocale = locale as Locale
    const dict = await getDictionary(validLocale)
    const suiteRoomSchema = buildSuiteRoomSchema(validLocale)
    const suiteBreadCrumb = buildSuiteBreadCrumb(validLocale)

    const room204Images = getRoom204Images(validLocale)
    const room203Images = getRoom203Images(validLocale)
    const room202Images = getRoom202Images(validLocale)
    const suiteBathroomImages = getSuiteBathroomImages(validLocale)

    return (
        <>
            <InjectStructuredData data={[suiteRoomSchema, suiteBreadCrumb]} />
            <main className="relative min-h-screen">
                <HeroSection
                    imageAlt={dict.suiteRoom.hero.imageAlt}
                    imageTitle={dict.suiteRoom.hero.imageTitle}
                    image={SuiteRoomPano}
                    title={dict.suiteRoom.hero.title}
                    description={dict.suiteRoom.hero.description}
                />
                <section className="mx-auto py-16 max-w-[1440px]">
                    <SectionTitle
                        title={dict.suiteRoom.sectionTitle}
                        description={
                            <PriceInfo
                                className="mt-6"
                                price="6500"
                                dict={dict.price}
                            />
                        }
                        className="mb-12"
                    />
                    <p className="px-4 text-center text-muted-foreground">
                        {dict.suiteRoom.sectionDescription}
                    </p>
                    <ImageGrid
                        images={room204Images}
                        title={dict.suiteRoom.room204Title}
                    />
                    <Suspense fallback={<ImageGridFallback />}>
                        <DeferredImageGrid
                            images={room203Images}
                            title={dict.suiteRoom.room203Title}
                        />
                    </Suspense>
                    <Suspense fallback={<ImageGridFallback />}>
                        <DeferredImageGrid
                            images={room202Images}
                            title={dict.suiteRoom.room202Title}
                        />
                    </Suspense>
                    <Suspense fallback={<ImageGridFallback />}>
                        <DeferredImageGrid
                            images={suiteBathroomImages}
                            title={dict.suiteRoom.bathroomTitle}
                        />
                    </Suspense>
                </section>
            </main>
        </>
    )
}
