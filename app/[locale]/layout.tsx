import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries/get-dictionary"
import { DEFAULT_METADATA } from "@/lib/constants"
import type { Metadata } from "next"
import { Playfair_Display, Work_Sans } from "next/font/google"
import { notFound } from "next/navigation"
import "../globals.css"

const playfair = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
})

const workSans = Work_Sans({
    variable: "--font-work-sans",
    subsets: ["latin"],
})

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

    const dict = await getDictionary(locale as Locale)
    const { title, description, keywords } = dict.home.meta

    return {
        title: {
            template: `%s | Dekyil Guest House`,
            default: title,
        },
        description,
        keywords,
        openGraph: {
            title: "Dekyil Guest House",
            description,
            type: "website",
            siteName: "Dekyil Guest House",
        },
        twitter: {
            title: "Dekyil Guest House",
            description,
            creator: "@kzoeps",
            card: "summary_large_image",
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
        <html lang={validLocale}>
            <body
                className={`${playfair.variable} ${workSans.variable} antialiased`}
            >
                <MainNav dict={dict.nav} locale={validLocale} />
                {children}
                <Footer dict={dict.footer} locale={validLocale} />
            </body>
        </html>
    )
}
