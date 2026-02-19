import { locales } from "@/lib/i18n/config"
import {
    buildLocalizedUrl,
    PUBLIC_SITEMAP_ROUTES,
    SITEMAP_LAST_MODIFIED,
} from "@/lib/seo/site"
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = []

    for (const locale of locales) {
        for (const route of PUBLIC_SITEMAP_ROUTES) {
            entries.push({
                url: buildLocalizedUrl(locale, route.path),
                lastModified: SITEMAP_LAST_MODIFIED,
                changeFrequency: route.changeFrequency,
                priority: route.priority,
            })
        }
    }

    return entries
}
