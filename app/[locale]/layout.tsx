import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import { isValidLocale, type Locale } from "@/lib/i18n/config"
import type { Metadata } from "next"
import { Playfair_Display, Work_Sans } from "next/font/google"
import { notFound } from "next/navigation"
import Script from "next/script"
import "../globals.css"
import { DEFAULT_METADATA } from "@/lib/constants"

const playfair = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
})

const workSans = Work_Sans({
    variable: "--font-work-sans",
    subsets: ["latin"],
})

const DESCRIPTION =
    "Experience warm Bhutanese hospitality at Dekyil Guest House, a family-owned, women-led hotel in Bumthang. Enjoy scenic valley views, modern amenities, and a prime location near Chamkhar town. Book your stay for a cozy and memorable retreat!"

export const metadata: Metadata = {
    title: {
        template: "%s | Dekyil Guest House",
        default: "Dekyil Guest House",
    },
    description: DESCRIPTION,
    keywords:
        "Dekyil Guest House, family-run hotel, women-led hotel, Bumthang accommodations, Chakhar valley views, Bhutanese cuisine",
    openGraph: {
        title: "Dekyil Guest House",
        description: DESCRIPTION,
        type: "website",
        siteName: "Dekyil Guest House",
    },
    twitter: {
        title: "Dekyil Guest House",
        description: DESCRIPTION,
        creator: "@kzoeps",
        card: "summary_large_image",
    },
    ...DEFAULT_METADATA,
}

interface LocaleLayoutProps {
    children: React.ReactNode
    params: Promise<{ locale: string }>
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

    return (
        <html lang={validLocale}>
            <body
                className={`${playfair.variable} ${workSans.variable} antialiased`}
            >
                <MainNav />
                {children}
                <Footer />
                <Script
                    strategy="lazyOnload"
                    src="https://cloud.umami.is/script.js"
                    data-website-id="8ae11a5f-9215-4721-94c6-4c4b86a88394"
                />
                <Script
                    strategy="lazyOnload"
                    src="https://www.googletagmanager.com/gtag/js?id=AW-734334045"
                />
                <Script strategy="lazyOnload" src="/scrips/google-tag.js" />
            </body>
        </html>
    )
}
