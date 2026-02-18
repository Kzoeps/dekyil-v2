import HeroSection from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"
import View from "@/public/images/view.webp"
import { DekyilInformation } from "@/lib/constants"
import Link from "next/link"
import CupFlowerView from "@/public/images/cupFlowerView.webp"
import { isValidLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries/get-dictionary"
import type { Metadata } from "next"
import Script from "next/script"
import { notFound } from "next/navigation"

interface LocaleContactPageProps {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({
    params,
}: LocaleContactPageProps): Promise<Metadata> {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        return {}
    }

    const dict = await getDictionary(locale as Locale)
    const { title, description, keywords } = dict.contact.meta

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `https://www.dekyilguesthouse.com/${locale}/contact`,
        },
    }
}

export default async function LocaleContactPage({
    params,
}: LocaleContactPageProps) {
    const { locale } = await params

    if (!isValidLocale(locale)) {
        notFound()
    }

    const validLocale = locale as Locale
    const dict = await getDictionary(validLocale)
    const c = dict.contact

    return (
        <>
            <main className="relative min-h-screen">
                <HeroSection
                    image={View}
                    imageAlt={c.hero.imageAlt}
                    imageTitle={c.hero.imageTitle}
                    title={c.hero.title}
                    description={c.hero.description}
                />
                <div className="container mx-auto px-4 py-16">
                    <h2 className="mb-12 text-center text-4xl font-playfair font-bold tracking-tight">
                        {c.pageHeading}
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="space-y-8">
                            <Card className="rounded-none">
                                <CardHeader>
                                    <CardTitle className="font-playfair text-lg">
                                        {c.contactInfo.heading}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Phone className="h-5 w-5 text-muted-foreground" />
                                        <p>
                                            {DekyilInformation.PHONE_ACHI} /{" "}
                                            {DekyilInformation.PHONE_AMA}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MapPin className="h-5 w-5 text-muted-foreground" />
                                        <p>{DekyilInformation.ADDRESS}</p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Mail className="h-5 w-5 text-muted-foreground" />
                                        <Link
                                            href={`mailto:${DekyilInformation.EMAIL}`}
                                            className="hover:text-red-400 font-worksans tracking-tight"
                                        >
                                            {DekyilInformation.EMAIL}
                                        </Link>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Clock className="h-5 w-5 text-muted-foreground" />
                                        <p>{c.contactInfo.checkInOut}</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="rounded-none">
                                <CardHeader>
                                    <CardTitle className="font-playfair text-lg">
                                        {c.location.heading}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video overflow-hidden rounded-md">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4357.405282767549!2d90.7534369!3d27.546586500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375ee337ee4e90d1%3A0xe616b3ddd24038f4!2zRGVreWlsIEd1ZXN0IEhvdXNlIOC9luC9keC9uuC8i-C9keC9gOC-seC9suC9o-C8i-C9mOC9guC-suC9vOC9k-C8i-C9geC-seC9suC9mOC8jQ!5e1!3m2!1sen!2sus!4v1740363878917!5m2!1sen!2sus"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            title={c.location.mapTitle}
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-8">
                            <Card className="rounded-none">
                                <CardHeader>
                                    <CardTitle className="font-playfair text-lg">
                                        {c.aboutLocation.heading}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">
                                        {c.aboutLocation.body1}
                                    </p>
                                    <p>{c.aboutLocation.body2}</p>
                                </CardContent>
                            </Card>

                            <Card className="rounded-none">
                                <CardHeader>
                                    <CardTitle className="font-playfair text-lg">
                                        {c.scenicViews.heading}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="relative aspect-video overflow-hidden rounded-md">
                                        <Image
                                            src={CupFlowerView}
                                            alt={c.scenicViews.imageAlt}
                                            title={c.scenicViews.imageTitle}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="mt-4">{c.scenicViews.body}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            <Script strategy="lazyOnload" src="/scripts/google-conversion.js" />
        </>
    )
}
