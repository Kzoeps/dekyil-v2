export const SITE_HOSTNAME = "www.dekyilguesthouse.com"
export const SITE_ORIGIN = `https://${SITE_HOSTNAME}`

const normalizePath = (path: string) => {
    if (!path) {
        return ""
    }

    return path.startsWith("/") ? path : `/${path}`
}

export const buildAbsoluteUrl = (path: string) => {
    return `${SITE_ORIGIN}${normalizePath(path)}`
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
