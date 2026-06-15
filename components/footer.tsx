import { LanguageSwitcher } from "@/components/language-switcher"
import { DekyilInformation } from "@/lib/constants"
import type { Locale } from "@/lib/i18n/config"
import type {
    FooterDictionary,
    NavDictionary,
} from "@/lib/i18n/dictionaries/types"
import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

interface FooterProps {
    dict?: FooterDictionary
    locale?: Locale
    languageSwitcherLabels?: NavDictionary["languageSwitcher"]
}

const DEFAULT_LANGUAGE_SWITCHER_LABELS: NavDictionary["languageSwitcher"] = {
    label: "Language",
    optionLabels: {
        en: "English",
        de: "German",
    },
    switchTo: {
        en: "Switch language to English",
        de: "Switch language to German",
    },
}

const DEFAULT_DICT: FooterDictionary = {
    aboutUs: {
        heading: "About Us",
        body: "Experience luxury and comfort in the heart of Bumthang valley. Our guest house offers a perfect blend of traditional charm and modern amenities.",
    },
    quickMenu: {
        heading: "Quick Menu",
        links: {
            home: "Home",
            rooms: "Rooms",
            contact: "Contact",
            aboutUs: "About Us",
            gallery: "Gallery",
            bhutanTravelPolicy: "Bhutan Travel Policy",
        },
    },
    contactUs: {
        heading: "Contact Us",
        phoneLabel: "Phone",
        emailLabel: "Email",
    },
    followUs: {
        heading: "Follow Us",
        facebookSrOnly: "Facebook",
        instagramSrOnly: "Instagram",
    },
    copyright: "All rights reserved.",
}

export function Footer({
    dict = DEFAULT_DICT,
    locale,
    languageSwitcherLabels = DEFAULT_LANGUAGE_SWITCHER_LABELS,
}: FooterProps) {
    const prefix = locale ? `/${locale}` : ""

    const MENU_LINKS: Array<{
        title: string
        href: string
        target?: "_blank"
        rel?: string
    }> = [
        { title: dict.quickMenu.links.home, href: `${prefix}/` },
        { title: dict.quickMenu.links.rooms, href: `${prefix}/rooms` },
        { title: dict.quickMenu.links.contact, href: `${prefix}/contact` },
        { title: dict.quickMenu.links.aboutUs, href: `${prefix}/about-us` },
        { title: dict.quickMenu.links.gallery, href: `${prefix}/gallery` },
        {
            title: dict.quickMenu.links.bhutanTravelPolicy,
            href: "https://bhutan.travel/faqs",
            target: "_blank",
            rel: "noopener noreferrer",
        },
    ]

    return (
        <footer className="bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-16">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    {/* About Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-playfair font-semibold">
                            {dict.aboutUs.heading}
                        </h3>
                        <p className="text-sm tracking-tight ">
                            {dict.aboutUs.body}
                        </p>
                    </div>

                    {/* Quick Menu Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-playfair font-semibold">
                            {dict.quickMenu.heading}
                        </h3>

                        <ul className="space-y-2 text-sm font-worksans tracking-tight ">
                            {MENU_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        title={link.title}
                                        target={link.target}
                                        rel={link.rel}
                                        className="hover:underline transition-all duration-500 ease-in-out"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold font-playfair">
                            {dict.contactUs.heading}
                        </h3>
                        <ul className="space-y-2 text-sm  font-worksans tracking-tight">
                            <li>{DekyilInformation.DEKYIL}</li>
                            <li>
                                {dict.contactUs.phoneLabel}:{" "}
                                {DekyilInformation.PHONE_ACHI}/
                                {DekyilInformation.PHONE_AMA}
                            </li>
                            <li>
                                <Link
                                    title="Email Dekyil"
                                    className="hover:text-red-400 transition-all duration-300 ease-in-out"
                                    href={`mailto:${DekyilInformation.EMAIL}`}
                                >
                                    {dict.contactUs.emailLabel}:{" "}
                                    {DekyilInformation.EMAIL}
                                </Link>
                            </li>
                            <li>{DekyilInformation.ADDRESS}</li>
                        </ul>
                    </div>

                    {/* Social Media Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold font-playfair">
                            {dict.followUs.heading}
                        </h3>
                        <div className="flex space-x-4 ">
                            <Link
                                href={DekyilInformation.FACEBOOK}
                                target="_blank"
                                title="Dekyil on Facebook"
                                rel="noopener noreferrer"
                                className=" hover:text-red-400 transition-all duration-300 ease-in-out "
                            >
                                <Facebook className="h-6 w-6" />
                                <span className="sr-only">
                                    {dict.followUs.facebookSrOnly}
                                </span>
                            </Link>
                            <Link
                                href={DekyilInformation.INSTAGRAM}
                                target="_blank"
                                title="Dekyil on Instragram"
                                rel="noopener noreferrer"
                                className=" hover:text-red-400 transition-all duration-300 ease-in-out "
                            >
                                <Instagram className="h-6 w-6" />
                                <span className="sr-only">
                                    {dict.followUs.instagramSrOnly}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
                        <p>
                            &copy; {new Date().getFullYear()} Dekyil Guest
                            House. {dict.copyright}
                        </p>
                        {locale && (
                            <Suspense fallback={null}>
                                <LanguageSwitcher
                                    currentLocale={locale}
                                    labels={languageSwitcherLabels}
                                    variant="footer"
                                />
                            </Suspense>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    )
}
