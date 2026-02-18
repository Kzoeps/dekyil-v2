import type { Locale } from "../config"

/**
 * Top-level Dictionary contract.
 * Keys will be populated in subsequent tasks when translation text is added.
 * This interface enforces compile-time locale safety.
 */
export interface Dictionary {
    locale: Locale
    // Namespaces will be added in subsequent tasks
    // e.g. nav: NavDictionary
    // e.g. home: HomeDictionary
    // e.g. rooms: RoomsDictionary
}
