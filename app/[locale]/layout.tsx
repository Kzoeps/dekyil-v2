import { Footer } from "@/components/footer"
import { LocaleHtmlLang } from "@/components/locale-html-lang"
import { MainNav } from "@/components/main-nav"
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries/get-dictionary"
import {
    DEFAULT_METADATA,
    DEFAULT_OPENGRAPH_IMAGE,
    DEFAULT_TWITTER_IMAGE,
} from "@/lib/constants"
import { SITE_ORIGIN } from "@/lib/seo/site"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

const DEFAULT_DESCRIPTION =
    "Experience warm Bhutanese hospitality at Dekyil Guest House, a family-owned, women-led hotel in Bumthang. Enjoy scenic valley views, modern amenities, and a prime location near Chamkhar town. Book your stay for a cozy and memorable retreat!"
const DEFAULT_KEYWORDS =
    "Dekyil Guest House, family-run hotel, women-led hotel, Bumthang accommodations, Chakhar valley views, Bhutanese cuisine"

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

interface LocaleLayoutProps {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        return {}
    }

    return {
        metadataBase: new URL(SITE_ORIGIN),
        title: {
            template: `%s | Dekyil Guest House`,
            default: "Dekyil Guest House",
        },
        description: DEFAULT_DESCRIPTION,
        keywords: DEFAULT_KEYWORDS,
        openGraph: {
            title: "Dekyil Guest House",
            description: DEFAULT_DESCRIPTION,
            type: "website",
            siteName: "Dekyil Guest House",
            url: new URL(`/${locale}`, SITE_ORIGIN).toString(),
            images: [DEFAULT_OPENGRAPH_IMAGE],
        },
        twitter: {
            title: "Dekyil Guest House",
            description: DEFAULT_DESCRIPTION,
            creator: "@kzoeps",
            card: "summary_large_image",
            images: [DEFAULT_TWITTER_IMAGE],
        },
        ...DEFAULT_METADATA,
    }
}

export default async function LocaleLayout({
    children,
    params,
}: LocaleLayoutProps) {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        notFound()
    }

    const validLocale = locale as Locale
    const dict = await getDictionary(validLocale)

    return (
        <>
            <LocaleHtmlLang locale={validLocale} />
            <MainNav dict={dict.nav} locale={validLocale} />
            {children}
            <Footer
                dict={dict.footer}
                locale={validLocale}
                languageSwitcherLabels={dict.nav.languageSwitcher}
            />
        </>
    )
}
