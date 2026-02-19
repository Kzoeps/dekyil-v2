import type { MetadataRoute } from "next"

import { buildSitemapUrl } from "@/lib/seo/site"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: buildSitemapUrl(),
    }
}
