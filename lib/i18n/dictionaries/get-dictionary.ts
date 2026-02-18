import type { Locale } from "../config"
import type { Dictionary } from "./types"
import { en } from "./en"

/**
 * Server-side dictionary loader.
 * Returns the typed Dictionary for the given locale.
 * German translation content will be added in a subsequent task.
 *
 * @param locale - A valid Locale value ("en" | "de")
 * @returns A Promise resolving to the Dictionary for that locale
 */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
    switch (locale) {
        case "de":
            // German dictionary will be added in task dekyil-v2-p4w.4
            return en
        case "en":
        default:
            return en
    }
}
