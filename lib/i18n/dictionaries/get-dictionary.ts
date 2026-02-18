import type { Locale } from "../config"
import type { Dictionary } from "./types"

/**
 * Server-side dictionary loader.
 * Returns the typed Dictionary for the given locale.
 * Translation content will be added in subsequent tasks.
 *
 * @param locale - A valid Locale value ("en" | "de")
 * @returns A Promise resolving to the Dictionary for that locale
 */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
    // Dictionary content will be populated in subsequent tasks.
    // For now, return a minimal valid Dictionary with the locale set.
    return {
        locale,
    }
}
