import { isValidLocale, locales, type Locale } from "@/lib/i18n/config"
import {
    buildLocalizedUrl,
    PUBLIC_SITEMAP_ROUTES,
    SITEMAP_LAST_MODIFIED,
} from "@/lib/seo/site"
import { MetadataRoute } from "next"

export function generateSitemaps() {
    return locales.map((locale) => ({ id: locale }))
}

export default function sitemap({ id }: { id: string }): MetadataRoute.Sitemap {
    const locale: Locale = isValidLocale(id) ? id : "en"

    return PUBLIC_SITEMAP_ROUTES.map((route) => ({
        url: buildLocalizedUrl(locale, route.path),
        lastModified: SITEMAP_LAST_MODIFIED,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))
}
