import HeroSection from "@/components/hero-section"
import ImageGrid from "@/components/image-grid"
import SectionTitle from "@/components/section-title"
import ConferenceImage from "@/public/images/conference/conf-cover.webp"
import ConferenceFront from "@/public/images/conference/conf-outside.webp"
import ConferencePano from "@/public/images/conference/conf-pano-1.webp"
import ConferencePano2 from "@/public/images/conference/conf-pano-2.webp"
import ConferenceSingle from "@/public/images/conference/conf-single.webp"
import ConferenceSingle2 from "@/public/images/conference/conf-single-2.webp"
import ConferenceOutside2 from "@/public/images/conference/outside-2.webp"
import LiteYoutube from "@/components/ui/lite-youtube"
import { buildAlternateLanguages } from "@/lib/i18n/alternates"
import { isValidLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries/get-dictionary"
import { type Metadata } from "next"
import { notFound } from "next/navigation"

interface ConferenceHallPageProps {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({
    params,
}: ConferenceHallPageProps): Promise<Metadata> {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        return {}
    }

    const dict = await getDictionary(locale as Locale)
    const { title, description, keywords } = dict.conferenceHall.meta

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `https://www.dekyilguesthouse.com/${locale}/conference-hall`,
            languages: buildAlternateLanguages("/conference-hall"),
        },
    }
}

export default async function LocaleConferenceHallPage({
    params,
}: ConferenceHallPageProps) {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        notFound()
    }

    const validLocale = locale as Locale
    const dict = await getDictionary(validLocale)
    const { hero, sectionTitle, sectionDescription, videoTitle, images } =
        dict.conferenceHall

    const CONFERENCE_HALL_IMAGES = [
        {
            src: ConferenceFront,
            alt: images.outsideNight.alt,
            title: images.outsideNight.title,
        },
        {
            src: ConferencePano,
            alt: images.panoramicBack.alt,
            title: images.panoramicBack.title,
        },
        {
            src: ConferencePano2,
            alt: images.panoramicFront.alt,
            title: images.panoramicFront.title,
        },
        {
            src: ConferenceSingle,
            alt: images.singleView1.alt,
            title: images.singleView1.title,
        },
        {
            src: ConferenceSingle2,
            alt: images.singleView2.alt,
            title: images.singleView2.title,
        },
        {
            src: ConferenceOutside2,
            alt: images.outsideNight2.alt,
            title: images.outsideNight2.title,
        },
    ]

    return (
        <main className="relative min-h-screen">
            <HeroSection
                image={ConferenceImage}
                imageAlt={hero.imageAlt}
                imageTitle={hero.imageTitle}
                title={hero.title}
                description={hero.description}
            />
            <section className="container mx-auto px-4 py-16">
                <SectionTitle
                    title={sectionTitle}
                    className="mb-12"
                    description={sectionDescription}
                />
                <div className="aspect-video overflow-hidden rounded-none max-h-[550px] mx-auto bg-muted">
                    <LiteYoutube videoId="ot3gHkkRlPA" title={videoTitle} />
                </div>
            </section>
            <section className="w-full bg-gray-50 py-14">
                <div className="container mx-auto">
                    <ImageGrid images={CONFERENCE_HALL_IMAGES} />
                </div>
            </section>
        </main>
    )
}
