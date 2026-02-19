import { defaultLocale, isValidLocale, type Locale } from "./config"

/**
 * Parses the locale segment from a pathname.
 * Returns the locale if the first segment is a valid locale, otherwise null.
 *
 * Examples:
 *   parseLocaleFromPathname('/en/rooms') => 'en'
 *   parseLocaleFromPathname('/de')       => 'de'
 *   parseLocaleFromPathname('/rooms')    => null
 */
export function parseLocaleFromPathname(pathname: string): Locale | null {
    const segments = pathname.split("/")
    // segments[0] is always '' for absolute paths
    const firstSegment = segments[1]
    if (firstSegment && isValidLocale(firstSegment)) {
        return firstSegment
    }
    return null
}

/**
 * Returns true if the pathname already has a valid locale prefix.
 */
export function hasLocalePrefix(pathname: string): boolean {
    return parseLocaleFromPathname(pathname) !== null
}

/**
 * Builds a localized pathname by prepending the locale to the given path.
 *
 * Examples:
 *   withLocale('en', '/')        => '/en'
 *   withLocale('de', '/rooms')   => '/de/rooms'
 */
export function withLocale(locale: Locale, pathname: string): string {
    const normalized = pathname === "/" ? "" : pathname
    return `/${locale}${normalized}`
}

/**
 * Swaps the locale segment in a pathname or prepends one if missing.
 */
export function swapLocaleInPathname(
    pathname: string,
    targetLocale: Locale
): string {
    const segments = pathname.split("/")
    const firstSegment = segments[1]
    if (firstSegment && isValidLocale(firstSegment)) {
        segments[1] = targetLocale
        return segments.join("/")
    }
    return withLocale(targetLocale, pathname)
}

/**
 * Returns the default locale.
 */
export function getDefaultLocale(): Locale {
    return defaultLocale
}
