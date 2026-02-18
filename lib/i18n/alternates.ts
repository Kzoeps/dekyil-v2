const BASE_URL = "https://www.dekyilguesthouse.com"

/**
 * Builds the `alternates.languages` object for Next.js Metadata.
 *
 * @param path - The path after the locale segment, e.g. "" for home,
 *               "/about-us", "/rooms/deluxe", etc. Must start with "/" or be "".
 * @returns An object suitable for `alternates: { languages: ... }` in Metadata.
 *
 * @example
 * // Home page
 * buildAlternateLanguages("")
 * // => { en: "https://www.dekyilguesthouse.com/en", de: "...", "x-default": "..." }
 *
 * @example
 * // About-us page
 * buildAlternateLanguages("/about-us")
 */
export function buildAlternateLanguages(path: string): Record<string, string> {
    const normalizedPath = path.startsWith("/") ? path : path ? `/${path}` : ""
    return {
        en: `${BASE_URL}/en${normalizedPath}`,
        de: `${BASE_URL}/de${normalizedPath}`,
        "x-default": `${BASE_URL}/en${normalizedPath}`,
    }
}
