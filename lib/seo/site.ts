export const SITE_HOSTNAME = "www.dekyilguesthouse.com"
export const SITE_ORIGIN = `https://${SITE_HOSTNAME}`
export const SITEMAP_PATH = "/sitemap.xml"

export const SITEMAP_LAST_MODIFIED = new Date("2024-01-01")

export const PUBLIC_SITEMAP_ROUTES = [
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
] as const

const normalizePath = (path: string) => {
    if (!path) {
        return ""
    }

    return path.startsWith("/") ? path : `/${path}`
}

export const buildAbsoluteUrl = (path: string) => {
    return `${SITE_ORIGIN}${normalizePath(path)}`
}

export const buildSitemapUrl = () => {
    return buildAbsoluteUrl(SITEMAP_PATH)
}

export const buildLocalizedUrl = (locale: string, path: string) => {
    return buildAbsoluteUrl(`/${locale}${normalizePath(path)}`)
}

export const buildHreflangAlternates = (path: string) => {
    return {
        en: buildLocalizedUrl("en", path),
        de: buildLocalizedUrl("de", path),
        "x-default": buildLocalizedUrl("en", path),
    }
}
