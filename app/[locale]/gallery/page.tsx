import HeroSection from "@/components/hero-section"
import ImageGrid from "@/components/image-grid"
import SectionTitle from "@/components/section-title"
import SuiteShot from "@/public/images/suite.webp"
import NightShot from "@/public/images/night-shot.webp"
import FlowersShot from "@/public/images/flowers.webp"
import ConfShot from "@/public/images/conf.webp"
import ViewShot from "@/public/images/view.webp"
import TeaCupShot from "@/public/images/cupView.webp"
import SceneWithWireShot from "@/public/images/sceneWire.webp"
import JakarDzong from "@/public/images/jakar_dzong_from_206.webp"
import GlassHouseView from "@/public/images/glass_house.webp"
import { buildAlternateLanguages } from "@/lib/i18n/alternates"
import { isValidLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries/get-dictionary"
import { buildLocalizedUrl } from "@/lib/seo/site"
import { type Metadata } from "next"
import { notFound } from "next/navigation"

interface GalleryPageProps {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({
    params,
}: GalleryPageProps): Promise<Metadata> {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        return {}
    }

    const dict = await getDictionary(locale as Locale)
    const { title, description, keywords } = dict.gallery.meta

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: buildLocalizedUrl(locale, "/gallery"),
            languages: buildAlternateLanguages("/gallery"),
        },
    }
}

export default async function LocaleGalleryPage({ params }: GalleryPageProps) {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        notFound()
    }

    const validLocale = locale as Locale
    const dict = await getDictionary(validLocale)
    const { hero, sectionTitle, sectionDescription, images } = dict.gallery

    const GALLERY_IMAGES = [
        {
            src: NightShot,
            alt: images.nightShot.alt,
            title: images.nightShot.title,
        },
        {
            src: FlowersShot,
            alt: images.flowers.alt,
            title: images.flowers.title,
        },
        {
            src: ConfShot,
            alt: images.conference.alt,
            title: images.conference.title,
        },
        {
            src: ViewShot,
            alt: images.view.alt,
            title: images.view.title,
        },
        {
            src: TeaCupShot,
            alt: images.teaCup.alt,
            title: images.teaCup.title,
        },
        {
            src: SceneWithWireShot,
            alt: images.sceneWire.alt,
            title: images.sceneWire.title,
        },
        {
            src: JakarDzong,
            alt: images.jakarDzong.alt,
            title: images.jakarDzong.title,
        },
        {
            src: GlassHouseView,
            alt: images.glassHouse.alt,
            title: images.glassHouse.title,
        },
    ]

    return (
        <main className="relative min-h-screen">
            <HeroSection
                image={SuiteShot}
                imageAlt={hero.imageAlt}
                imageTitle={hero.imageTitle}
                title={hero.title}
                description={hero.description}
            />
            <section className="pb-8">
                <SectionTitle
                    title={sectionTitle}
                    description={
                        <p className="text-muted-foreground mt-6">
                            {sectionDescription}
                        </p>
                    }
                    className="mb-6 py-8"
                />
                <ImageGrid images={GALLERY_IMAGES} />
            </section>
        </main>
    )
}
