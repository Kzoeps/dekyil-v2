import type { Locale } from "@/lib/i18n/config"
import type { ImageGridImage } from "@/components/image-grid"

// ---------------------------------------------------------------------------
// Locale-aware alt/title text maps
// ---------------------------------------------------------------------------

const IMAGE_ALT_TITLES: Record<
    string,
    Record<Locale, { alt: string; title: string }>
> = {
    room205_corner: {
        en: {
            alt: "Dekyil Deluxe 205 corner view of the twin beds",
            title: "Room 205",
        },
        de: {
            alt: "Dekyil Deluxe 205 Eckansicht der Einzelbetten",
            title: "Zimmer 205",
        },
    },
    room205_jakar: {
        en: {
            alt: "Dekyil Deluxe 205 corner view of the twin beds with Jakar Dzong in the background",
            title: "Room 205",
        },
        de: {
            alt: "Dekyil Deluxe 205 Eckansicht der Einzelbetten mit dem Jakar Dzong im Hintergrund",
            title: "Zimmer 205",
        },
    },
    room205_upper: {
        en: {
            alt: "Dekyil Deluxe 205 upper shot of the twin beds",
            title: "Room 205",
        },
        de: {
            alt: "Dekyil Deluxe 205 Draufsicht der Einzelbetten",
            title: "Zimmer 205",
        },
    },
    room205_main: {
        en: {
            alt: "A sunny shot of room 205 with Jakar Dzong in the backdrop",
            title: "Room 205",
        },
        de: {
            alt: "Eine sonnige Aufnahme von Zimmer 205 mit dem Jakar Dzong im Hintergrund",
            title: "Zimmer 205",
        },
    },
    room206_bedroom: {
        en: { alt: "Bedroom view in Room 206", title: "Room 206" },
        de: { alt: "Schlafzimmerblick in Zimmer 206", title: "Zimmer 206" },
    },
    room206_jakar: {
        en: {
            alt: "Room 206 with Jakar Dzong in the backdrop",
            title: "Room 206",
        },
        de: {
            alt: "Zimmer 206 mit dem Jakar Dzong im Hintergrund",
            title: "Zimmer 206",
        },
    },
    room206_bathroom: {
        en: { alt: "Bathroom in Room 206", title: "Room 206" },
        de: { alt: "Badezimmer in Zimmer 206", title: "Zimmer 206" },
    },
    room207_bed: {
        en: {
            alt: "A shot of the double bed from the bottom of the bed frame",
            title: "Room 207",
        },
        de: {
            alt: "Eine Aufnahme des Doppelbetts vom Fußende des Bettgestells",
            title: "Zimmer 207",
        },
    },
    room207_main: {
        en: {
            alt: "A shot of room 207 with double bed in the foreground and Jakar Dzong in the background",
            title: "Room 207",
        },
        de: {
            alt: "Eine Aufnahme von Zimmer 207 mit Doppelbett im Vordergrund und Jakar Dzong im Hintergrund",
            title: "Zimmer 207",
        },
    },
    room207_carpet: {
        en: {
            alt: "Close-up of the carpet next to the bed in Room 207",
            title: "Room 207",
        },
        de: {
            alt: "Nahaufnahme des Teppichs neben dem Bett in Zimmer 207",
            title: "Zimmer 207",
        },
    },
    room207_bedshot: {
        en: { alt: "A comfortable looking bed in Room 207", title: "Room 207" },
        de: {
            alt: "Ein komfortabel aussehendes Bett in Zimmer 207",
            title: "Zimmer 207",
        },
    },
    room207_bathroom: {
        en: {
            alt: "A shot of the bathroom in room 207 with pot and the sink",
            title: "Room 207",
        },
        de: {
            alt: "Eine Aufnahme des Badezimmers in Zimmer 207 mit Toilette und Waschbecken",
            title: "Zimmer 207",
        },
    },
    room207_shower: {
        en: {
            alt: "View of the shower area in Room 207 bathroom",
            title: "Room 207",
        },
        de: {
            alt: "Blick auf den Duschbereich im Badezimmer von Zimmer 207",
            title: "Zimmer 207",
        },
    },
    room203_pano: {
        en: {
            alt: "A fish eye shot of Room 203 featuring the twin beds and the sofa lounge area",
            title: "Room 203",
        },
        de: {
            alt: "Eine Weitwinkelaufnahme von Zimmer 203 mit den Einzelbetten und dem Sofabereich",
            title: "Zimmer 203",
        },
    },
    room203_outside: {
        en: {
            alt: "A shot of the divider between the room and lounge area featuring drukpa windows",
            title: "Room 203",
        },
        de: {
            alt: "Eine Aufnahme des Raumteilers zwischen Zimmer und Loungebereich mit Drukpa-Fenstern",
            title: "Zimmer 203",
        },
    },
    room203_twin: {
        en: {
            alt: "A shot from the corner featuring the twin beds and the reading lamps",
            title: "Room 203",
        },
        de: {
            alt: "Eine Eckaufnahme mit den Einzelbetten und den Leselampen",
            title: "Zimmer 203",
        },
    },
    room203_overview: {
        en: {
            alt: "A fish eye shot of Room 203 featuring the twin beds and the sofa lounge area",
            title: "Room 203",
        },
        de: {
            alt: "Eine Weitwinkelübersicht von Zimmer 203 mit den Einzelbetten und dem Sofabereich",
            title: "Zimmer 203",
        },
    },
    room203_front: {
        en: {
            alt: "A fish eye shot of Room 203 from the front featuring the twin beds, wardrobe and luggage area",
            title: "Room 203",
        },
        de: {
            alt: "Eine Weitwinkelaufnahme von Zimmer 203 von vorne mit Einzelbetten, Kleiderschrank und Gepäckbereich",
            title: "Zimmer 203",
        },
    },
    room203_corner: {
        en: {
            alt: "A corner shot of the bedroom in Room 203",
            title: "Room 203 Bedroom",
        },
        de: {
            alt: "Eine Eckaufnahme des Schlafzimmers in Zimmer 203",
            title: "Zimmer 203 Schlafzimmer",
        },
    },
    room203_lobby: {
        en: {
            alt: "A shot of the lobby area in Room 203",
            title: "Room 203 Lobby",
        },
        de: {
            alt: "Eine Aufnahme des Lobbybereichs in Zimmer 203",
            title: "Zimmer 203 Lobby",
        },
    },
    room203_bathroom: {
        en: {
            alt: "A shot of the bathroom in Room 203",
            title: "Room 203 Bathroom",
        },
        de: {
            alt: "Eine Aufnahme des Badezimmers in Zimmer 203",
            title: "Zimmer 203 Badezimmer",
        },
    },
    room202_scenery: {
        en: {
            alt: "A shot of the view from the bed of room 202, featuring the chamkhar valley in the background",
            title: "Room 202",
        },
        de: {
            alt: "Eine Aufnahme der Aussicht vom Bett in Zimmer 202 mit dem Chamkhar-Tal im Hintergrund",
            title: "Zimmer 202",
        },
    },
    room202_view: {
        en: {
            alt: "Shot of the Chamkhar valley from the lounge area in Room 202",
            title: "Room 202",
        },
        de: {
            alt: "Aufnahme des Chamkhar-Tals vom Loungebereich in Zimmer 202",
            title: "Zimmer 202",
        },
    },
    room202_corner: {
        en: {
            alt: "A shot of the queen sized bed and the lounge area in the background",
            title: "Room 202",
        },
        de: {
            alt: "Eine Aufnahme des Queensize-Betts mit dem Loungebereich im Hintergrund",
            title: "Zimmer 202",
        },
    },
    room202_bathroom: {
        en: {
            alt: "Bathroom in Room 202 featuring the sink and toilet pot",
            title: "Room 202",
        },
        de: {
            alt: "Badezimmer in Zimmer 202 mit Waschbecken und Toilette",
            title: "Zimmer 202",
        },
    },
    room202_carpet: {
        en: {
            alt: "Shot of bedroom and carpet view in room 202",
            title: "Room 202",
        },
        de: {
            alt: "Aufnahme des Schlafzimmers und Teppichblick in Zimmer 202",
            title: "Zimmer 202",
        },
    },
    room204_bed: {
        en: {
            alt: "A shot of the queen sized bed and the carpet in the foreground",
            title: "Room 204",
        },
        de: {
            alt: "Eine Aufnahme des Queensize-Betts mit dem Teppich im Vordergrund",
            title: "Zimmer 204",
        },
    },
    room204_lounge: {
        en: {
            alt: "A shot of the lounge area in 204 with the sofa in the foreground",
            title: "Room 204",
        },
        de: {
            alt: "Eine Aufnahme des Loungebereichs in Zimmer 204 mit dem Sofa im Vordergrund",
            title: "Zimmer 204",
        },
    },
    room204_bathroom: {
        en: {
            alt: "A fish eye shot of the bathroom featuring the bathtub and the sink",
            title: "Room 204",
        },
        de: {
            alt: "Eine Weitwinkelaufnahme des Badezimmers mit Badewanne und Waschbecken",
            title: "Zimmer 204",
        },
    },
    suite_bath1: {
        en: {
            alt: "A shot of the bathtub and the sink",
            title: "204 Bathroom",
        },
        de: {
            alt: "Eine Aufnahme der Badewanne und des Waschbeckens",
            title: "Zimmer 204 Badezimmer",
        },
    },
    suite_bath2: {
        en: {
            alt: "Shower area and the sink along with the toilet pot",
            title: "204 Bathroom",
        },
        de: {
            alt: "Duschbereich und Waschbecken sowie Toilette",
            title: "Zimmer 204 Badezimmer",
        },
    },
    suite_bath3: {
        en: {
            alt: "A shot of the sink and the pot with toiletries",
            title: "204 Bathroom",
        },
        de: {
            alt: "Eine Aufnahme des Waschbeckens und der Toilette mit Toilettenartikeln",
            title: "Zimmer 204 Badezimmer",
        },
    },
    suite_bath4: {
        en: {
            alt: "A shot of the bathtub and toilet pot",
            title: "204 Bathroom",
        },
        de: {
            alt: "Eine Aufnahme der Badewanne und der Toilette",
            title: "Zimmer 204 Badezimmer",
        },
    },
    suite_bath5: {
        en: {
            alt: "A mirror shot of the sink and the bathroom tiles",
            title: "204 Bathroom",
        },
        de: {
            alt: "Eine Spiegelaufnahme des Waschbeckens und der Badezimmerfliesen",
            title: "Zimmer 204 Badezimmer",
        },
    },
    suite_bath6: {
        en: {
            alt: "A shot of the faucet and the bathtub",
            title: "204 Bathroom",
        },
        de: {
            alt: "Eine Aufnahme des Wasserhahns und der Badewanne",
            title: "Zimmer 204 Badezimmer",
        },
    },
}

// ---------------------------------------------------------------------------
// Locale-aware image getters
// ---------------------------------------------------------------------------

function img(key: string, src: string, locale: Locale): ImageGridImage {
    const t = IMAGE_ALT_TITLES[key][locale]
    return { src, alt: t.alt, title: t.title }
}

function freezeImages(images: ImageGridImage[]): ImageGridImage[] {
    for (const image of images) {
        Object.freeze(image) as ImageGridImage
    }
    return Object.freeze(images) as ImageGridImage[]
}

const ROOM_205_IMAGES_BY_LOCALE: Partial<Record<Locale, ImageGridImage[]>> = {}
const ROOM_206_IMAGES_BY_LOCALE: Partial<Record<Locale, ImageGridImage[]>> = {}
const ROOM_207_IMAGES_BY_LOCALE: Partial<Record<Locale, ImageGridImage[]>> = {}
const ROOM_203_IMAGES_BY_LOCALE: Partial<Record<Locale, ImageGridImage[]>> = {}
const ROOM_202_IMAGES_BY_LOCALE: Partial<Record<Locale, ImageGridImage[]>> = {}
const ROOM_204_IMAGES_BY_LOCALE: Partial<Record<Locale, ImageGridImage[]>> = {}
const SUITE_BATHROOM_IMAGES_BY_LOCALE: Partial<
    Record<Locale, ImageGridImage[]>
> = {}

export function getRoom205Images(locale: Locale = "en"): ImageGridImage[] {
    const cached = ROOM_205_IMAGES_BY_LOCALE[locale]
    if (cached) {
        return cached
    }

    const images = freezeImages([
        img(
            "room205_corner",
            "/images/room-205/deluxe_205_corner_view.webp",
            locale
        ),
        img(
            "room205_jakar",
            "/images/room-205/deluxe_205_jakar_view.webp",
            locale
        ),
        img("room205_upper", "/images/room-205/deluxe_205.webp", locale),
        img("room205_main", "/images/room-205/deluxe-205-main.webp", locale),
    ])

    ROOM_205_IMAGES_BY_LOCALE[locale] = images
    return images
}

export function getRoom206Images(locale: Locale = "en"): ImageGridImage[] {
    const cached = ROOM_206_IMAGES_BY_LOCALE[locale]
    if (cached) {
        return cached
    }

    const images = freezeImages([
        img(
            "room206_bedroom",
            "/images/room-206/room_206_bedroom_view.webp",
            locale
        ),
        img(
            "room206_jakar",
            "/images/room-206/room_206_jakar_backdrop.webp",
            locale
        ),
        img(
            "room206_bathroom",
            "/images/room-206/room_206_bathroom.webp",
            locale
        ),
    ])

    ROOM_206_IMAGES_BY_LOCALE[locale] = images
    return images
}

export function getRoom207Images(locale: Locale = "en"): ImageGridImage[] {
    const cached = ROOM_207_IMAGES_BY_LOCALE[locale]
    if (cached) {
        return cached
    }

    const images = freezeImages([
        img("room207_bed", "/images/room-207/room_207_bed.webp", locale),
        img("room207_main", "/images/room-207/room_207.webp", locale),
        img(
            "room207_carpet",
            "/images/room-207/room_207_bed_carpet.webp",
            locale
        ),
        img(
            "room207_bedshot",
            "/images/room-207/room_207_bedshot.webp",
            locale
        ),
        img(
            "room207_bathroom",
            "/images/room-207/room_207_bathroom.webp",
            locale
        ),
        img(
            "room207_shower",
            "/images/room-207/room_207_bathroom_shower.webp",
            locale
        ),
    ])

    ROOM_207_IMAGES_BY_LOCALE[locale] = images
    return images
}

export function getRoom203Images(locale: Locale = "en"): ImageGridImage[] {
    const cached = ROOM_203_IMAGES_BY_LOCALE[locale]
    if (cached) {
        return cached
    }

    const images = freezeImages([
        img("room203_pano", "/images/room-203/suite_203_pano.webp", locale),
        img(
            "room203_outside",
            "/images/room-203/suite_203_outside.webp",
            locale
        ),
        img("room203_twin", "/images/room-203/suite_twin.webp", locale),
        img(
            "room203_overview",
            "/images/room-203/twin_suite_203_overview.webp",
            locale
        ),
        img("room203_front", "/images/room-203/twin_suite_203.webp", locale),
        img(
            "room203_corner",
            "/images/room-203/room_203_bedroom_corner_shot.webp",
            locale
        ),
        img(
            "room203_lobby",
            "/images/room-203/room_203_lobby_shot.webp",
            locale
        ),
        img(
            "room203_bathroom",
            "/images/room-203/room_203_bathroom_shot.webp",
            locale
        ),
    ])

    ROOM_203_IMAGES_BY_LOCALE[locale] = images
    return images
}

export function getRoom202Images(locale: Locale = "en"): ImageGridImage[] {
    const cached = ROOM_202_IMAGES_BY_LOCALE[locale]
    if (cached) {
        return cached
    }

    const images = freezeImages([
        img(
            "room202_scenery",
            "/images/room-202/room_202_scenery.webp",
            locale
        ),
        img("room202_view", "/images/room-202/room_202_view.webp", locale),
        img(
            "room202_corner",
            "/images/room-202/suite_202_corner_view.webp",
            locale
        ),
        img(
            "room202_bathroom",
            "/images/room-202/room_202_bathroom_sink_pot.webp",
            locale
        ),
        img(
            "room202_carpet",
            "/images/room-202/room_202_bedroom_carpet.webp",
            locale
        ),
    ])

    ROOM_202_IMAGES_BY_LOCALE[locale] = images
    return images
}

export function getRoom204Images(locale: Locale = "en"): ImageGridImage[] {
    const cached = ROOM_204_IMAGES_BY_LOCALE[locale]
    if (cached) {
        return cached
    }

    const images = freezeImages([
        img("room204_bed", "/images/room-204/room_204_bed.webp", locale),
        img("room204_lounge", "/images/room-204/room_204_lounge.webp", locale),
        img(
            "room204_bathroom",
            "/images/room-204/room_204_bathroom_fishey.webp",
            locale
        ),
    ])

    ROOM_204_IMAGES_BY_LOCALE[locale] = images
    return images
}

export function getSuiteBathroomImages(
    locale: Locale = "en"
): ImageGridImage[] {
    const cached = SUITE_BATHROOM_IMAGES_BY_LOCALE[locale]
    if (cached) {
        return cached
    }

    const images = freezeImages([
        img("suite_bath1", "/images/suite_bathroom/bathoroom_204.webp", locale),
        img("suite_bath2", "/images/suite_bathroom/bathroom_202.webp", locale),
        img("suite_bath3", "/images/suite_bathroom/bathroom.webp", locale),
        img("suite_bath4", "/images/suite_bathroom/Bathtub.webp", locale),
        img(
            "suite_bath5",
            "/images/suite_bathroom/room_204_bathroom.webp",
            locale
        ),
        img(
            "suite_bath6",
            "/images/suite_bathroom/room_204_bathroom_faucet.webp",
            locale
        ),
    ])

    SUITE_BATHROOM_IMAGES_BY_LOCALE[locale] = images
    return images
}

// ---------------------------------------------------------------------------
// Legacy English-only exports (kept for backwards compatibility)
// ---------------------------------------------------------------------------

export const ROOM_205_IMAGES = [
    {
        src: "/images/room-205/deluxe_205_corner_view.webp",
        alt: "Dekyil Deluxe 205 corner view of the twin beds",
        title: "Room 205",
    },
    {
        src: "/images/room-205/deluxe_205_jakar_view.webp",
        alt: "Dekyil Deluxe 205 corner view of the twin beds with Jakar Dzong in the background",
        title: "Room 205",
    },
    {
        src: "/images/room-205/deluxe_205.webp",
        alt: "Dekyil Deluxe 205 upper shot of the twin beds",
        title: "Room 205",
    },
    {
        src: "/images/room-205/deluxe-205-main.webp",
        alt: "A sunny shot of room 205 with Jakar Dzong in the backdrop",
        title: "Room 205",
    },
]

export const ROOM_206_IMAGES = [
    {
        src: "/images/room-206/room_206_bedroom_view.webp",
        alt: "Bedroom view in Room 206",
        title: "Room 206",
    },
    {
        src: "/images/room-206/room_206_jakar_backdrop.webp",
        alt: "Room 206 with Jakar Dzong in the backdrop",
        title: "Room 206",
    },
    {
        src: "/images/room-206/room_206_bathroom.webp",
        alt: "Bathroom in Room 206",
        title: "Room 206",
    },
]

export const ROOM_207_IMAGES = [
    {
        src: "/images/room-207/room_207_bed.webp",
        alt: "A shot of the double bed from the bottom of the bed frame",
        title: "Room 207",
    },
    {
        src: "/images/room-207/room_207.webp",
        alt: "A shot of room 207 with double bed in the foreground and Jakar Dzong in the background",
        title: "Room 207",
    },
    {
        src: "/images/room-207/room_207_bed_carpet.webp",
        alt: "Close-up of the carpet next to the bed in Room 207",
        title: "Room 207",
    },
    {
        src: "/images/room-207/room_207_bedshot.webp",
        alt: "A comfortable looking bed in Room 207",
        title: "Room 207",
    },
    {
        src: "/images/room-207/room_207_bathroom.webp",
        alt: "A shot of the bathroom in room 207 with pot and the sink",
        title: "Room 207",
    },
    {
        src: "/images/room-207/room_207_bathroom_shower.webp",
        alt: "View of the shower area in Room 207 bathroom",
        title: "Room 207",
    },
]
export const ROOM_203_IMAGES = [
    {
        src: "/images/room-203/suite_203_pano.webp",
        alt: "A fish eye shot of Room 203 featuring the twin beds and the sofa lounge area",
        title: "Room 203",
    },
    {
        src: "/images/room-203/suite_203_outside.webp",
        alt: "A shot of the divider between the room and lounge area featuring drukpa windows",
        title: "Room 203",
    },
    {
        src: "/images/room-203/suite_twin.webp",
        alt: "A shot from the corner featuring the twin beds and the reading lamps",
        title: "Room 203",
    },
    {
        src: "/images/room-203/twin_suite_203_overview.webp",
        alt: "A fish eye shot of Room 203 featuring the twin beds and the sofa lounge area",
        title: "Room 203",
    },
    {
        src: "/images/room-203/twin_suite_203.webp",
        alt: "A fish eye shot of Room 203 from the front featuring the twin beds, wardrobe and luggage area",
        title: "Room 203",
    },
    {
        src: "/images/room-203/room_203_bedroom_corner_shot.webp",
        alt: "A corner shot of the bedroom in Room 203",
        title: "Room 203 Bedroom",
    },
    {
        src: "/images/room-203/room_203_lobby_shot.webp",
        alt: "A shot of the lobby area in Room 203",
        title: "Room 203 Lobby",
    },
    {
        src: "/images/room-203/room_203_bathroom_shot.webp",
        alt: "A shot of the bathroom in Room 203",
        title: "Room 203 Bathroom",
    },
]
export const ROOM_202_IMAGES = [
    {
        src: "/images/room-202/room_202_scenery.webp",
        alt: "A shot of the view from the bed of room 202, featuring the chamkhar valley in the background",
        title: "Room 202",
    },
    {
        src: "/images/room-202/room_202_view.webp",
        alt: "Shot of the Chamkhar valley from the lounge area in Room 202",
        title: "Room 202",
    },
    {
        src: "/images/room-202/suite_202_corner_view.webp",
        alt: "A shot of the queen sized bed and the lounge area in the background",
        title: "Room 202",
    },
    {
        src: "/images/room-202/room_202_bathroom_sink_pot.webp",
        alt: "Bathroom in Room 202 featuring the sink and toilet pot",
        title: "Room 202",
    },
    {
        src: "/images/room-202/room_202_bedroom_carpet.webp",
        alt: "Shot of bedroom and carpet view in room 202",
        title: "Room 202",
    },
]
export const ROOM_204_IMAGES = [
    {
        src: "/images/room-204/room_204_bed.webp",
        alt: "A shot of the queen sized bed and the carpet in the foreground",
        title: "Room 204",
    },
    {
        src: "/images/room-204/room_204_lounge.webp",
        alt: "A shot of the lounge area in 204 with the sofa in the foreground",
        title: "Room 204",
    },
    {
        src: "/images/room-204/room_204_bathroom_fishey.webp",
        alt: "A fish eye shot of the bathroom featuring the bathtub and the sink",
        title: "Room 204",
    },
]
export const SUITE_BATHROOM_IMAGES = [
    {
        src: "/images/suite_bathroom/bathoroom_204.webp",
        alt: "A shot of the bathtub and the sink",
        title: "204 Bathroom",
    },
    {
        src: "/images/suite_bathroom/bathroom_202.webp",
        alt: "Shower area and the sink along with the toilet pot",
        title: "204 Bathroom",
    },
    {
        src: "/images/suite_bathroom/bathroom.webp",
        alt: "A shot of the sink and the pot with toiletries",
        title: "204 Bathroom",
    },
    {
        src: "/images/suite_bathroom/Bathtub.webp",
        alt: "A shot of the bathtub and toilet pot",
        title: "204 Bathroom",
    },
    {
        src: "/images/suite_bathroom/room_204_bathroom.webp",
        alt: "A mirror shot of the sink and the bathroom tiles",
        title: "204 Bathroom",
    },
    {
        src: "/images/suite_bathroom/room_204_bathroom_faucet.webp",
        alt: "A shot of the faucet and the bathtub",
        title: "204 Bathroom",
    },
]
