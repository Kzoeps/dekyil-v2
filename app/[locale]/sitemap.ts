import { isValidLocale, locales, type Locale } from "@/lib/i18n/config"
import { MetadataRoute } from "next"

const BASE_URL = "https://dekyilguesthouse.com"

const PUBLIC_ROUTES = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/about-us", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/rooms", changeFrequency: "monthly" as const, priority: 0.7 },
    {
        path: "/rooms/suite",
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        path: "/rooms/deluxe",
        changeFrequency: "weekly" as const,
        priority: 0.8,
    },
    { path: "/contact", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/gallery", changeFrequency: "monthly" as const, priority: 0.7 },
    {
        path: "/conference-hall",
        changeFrequency: "monthly" as const,
        priority: 0.7,
    },
]

export function generateSitemaps() {
    return locales.map((locale) => ({ id: locale }))
}

export default function sitemap({ id }: { id: string }): MetadataRoute.Sitemap {
    const locale: Locale = isValidLocale(id) ? id : "en"

    return PUBLIC_ROUTES.map((route) => ({
        url: `${BASE_URL}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))
}
