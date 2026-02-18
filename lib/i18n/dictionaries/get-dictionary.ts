import type { Locale } from "../config"
import type { Dictionary } from "./types"
import { en } from "./en"
import { de } from "./de"

/**
 * Server-side dictionary loader.
 * Returns the typed Dictionary for the given locale.
 *
 * @param locale - A valid Locale value ("en" | "de")
 * @returns A Promise resolving to the Dictionary for that locale
 */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
    switch (locale) {
        case "de":
            return de
        case "en":
        default:
            return en
    }
}
