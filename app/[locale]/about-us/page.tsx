import AboutSection from "@/components/about-section"
import HeroSection from "@/components/hero-section"
import InjectStructuredData from "@/components/inject-structured-data"
import { buildAlternateLanguages } from "@/lib/i18n/alternates"
import { isValidLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries/get-dictionary"
import { buildAboutUsSchema } from "@/lib/schema"
import FrontImage from "@/public/images/sceneWire.webp"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface LocaleAboutUsPageProps {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({
    params,
}: LocaleAboutUsPageProps): Promise<Metadata> {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        return {}
    }

    const dict = await getDictionary(locale as Locale)
    const { title, description, keywords } = dict.aboutUs.meta

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `https://www.dekyilguesthouse.com/${locale}/about-us`,
            languages: buildAlternateLanguages("/about-us"),
        },
    }
}

export default async function LocaleAboutUsPage({
    params,
}: LocaleAboutUsPageProps) {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        notFound()
    }

    const validLocale = locale as Locale
    const dict = await getDictionary(validLocale)

    const aboutUsSchema = buildAboutUsSchema()

    return (
        <>
            <InjectStructuredData data={aboutUsSchema} />
            <main className="relative min-h-screen">
                <HeroSection
                    imageAlt={dict.aboutUs.hero.imageAlt}
                    imageTitle={dict.aboutUs.hero.imageTitle}
                    image={FrontImage}
                    title={dict.aboutUs.hero.title}
                    description={dict.aboutUs.hero.description}
                />
                <AboutSection dict={dict.aboutUs.section} />
            </main>
        </>
    )
}
