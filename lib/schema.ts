import type { Locale } from "@/lib/i18n/config"
import { buildAbsoluteUrl, buildLocalizedUrl } from "@/lib/seo/site"
import DroneImage from "@/public/images/drone.webp"
import LogoImage from "@/public/images/logo.webp"
import {
    BreadcrumbList,
    Hotel,
    HotelRoom,
    LocalBusiness,
    PostalAddress,
    WithContext,
} from "schema-dts"

// ---------------------------------------------------------------------------
// Shared factual data (locale-independent)
// ---------------------------------------------------------------------------

const HOTEL_ADDRESS: PostalAddress = {
    "@type": "PostalAddress",
    streetAddress: "Chamkhar",
    addressLocality: "Chhokhor",
    addressRegion: "Bumthang",
    addressCountry: "BT",
    postalCode: "32001",
}

const GEO_COORDINATES = {
    "@type": "GeoCoordinates" as const,
    latitude: 27.546484,
    longitude: 90.753263,
}

// ---------------------------------------------------------------------------
// Locale-aware text maps
// ---------------------------------------------------------------------------

const SUITE_ROOM_NAMES: Record<Locale, string> = {
    en: "Suite Room",
    de: "Suite-Zimmer",
}

const SUITE_ROOM_DESCRIPTIONS: Record<Locale, string> = {
    en: "Suite rooms available with twin or double beds. Packed with all amenities from underfloor heating, dental kits and heaters",
    de: "Suite-Zimmer mit Einzel- oder Doppelbetten. Ausgestattet mit allen Annehmlichkeiten wie Fußbodenheizung, Zahnpflegeset und Heizung",
}

const DELUXE_ROOM_NAMES: Record<Locale, string> = {
    en: "Deluxe Room",
    de: "Deluxe-Zimmer",
}

const DELUXE_ROOM_DESCRIPTIONS: Record<Locale, string> = {
    en: "Deluxe rooms available with twin or double beds. Packed with all amenities from underfloor heating, dental kits and heaters",
    de: "Deluxe-Zimmer mit Einzel- oder Doppelbetten. Ausgestattet mit allen Annehmlichkeiten wie Fußbodenheizung, Zahnpflegeset und Heizung",
}

const HOTEL_SLOGANS: Record<Locale, string> = {
    en: "Hospitality is our speciality",
    de: "Gastfreundschaft ist unsere Spezialität",
}

const HOTEL_KEYWORDS: Record<Locale, string> = {
    en: "hotels in bumthang, dekyil guest house, chamkhar, bumthang, bhutan, guest house in bumthang",
    de: "Hotels in Bumthang, Dekyil Guest House, Chamkhar, Bumthang, Bhutan, Gästehaus in Bumthang",
}

const STAR_RATING_EXPLANATIONS: Record<Locale, string> = {
    en: "Tourism Council of Bhutan accredits hotels every 2 years. Dekyil Guest House was accredited a 3 star hotel in 2024",
    de: "Der Tourismusrat von Bhutan akkreditiert Hotels alle 2 Jahre. Das Dekyil Guest House wurde 2024 als 3-Sterne-Hotel akkreditiert",
}

const AMENITY_NAMES: Record<string, Record<Locale, string>> = {
    "Bathroom Floor Heating": {
        en: "Bathroom Floor Heating",
        de: "Fußbodenheizung im Badezimmer",
    },
    "Free WiFi": {
        en: "Free WiFi",
        de: "Kostenloses WLAN",
    },
    "Hot Water": {
        en: "Hot Water",
        de: "Warmwasser",
    },
    "Complimentary Tea/Coffee Station": {
        en: "Complimentary Tea/Coffee Station",
        de: "Kostenlose Tee-/Kaffeestation",
    },
    "Complimentary Toilet Kit": {
        en: "Complimentary Toilet Kit",
        de: "Kostenloses Toilettenset",
    },
    Parking: {
        en: "Parking",
        de: "Parkplatz",
    },
    Restaurant: {
        en: "Restaurant",
        de: "Restaurant",
    },
    "Laundry Service": {
        en: "Laundry Service",
        de: "Wäscheservice",
    },
}

const ROOMS_BREADCRUMB_NAMES: Record<Locale, string> = {
    en: "Rooms",
    de: "Zimmer",
}

const DELUXE_BREADCRUMB_NAMES: Record<Locale, string> = {
    en: "Deluxe Room",
    de: "Deluxe-Zimmer",
}

const SUITE_BREADCRUMB_NAMES: Record<Locale, string> = {
    en: "Suite Room",
    de: "Suite-Zimmer",
}

// ---------------------------------------------------------------------------
// Schema builders
// ---------------------------------------------------------------------------

export function buildAboutUsSchema(
    locale: Locale = "en",
    urlPath?: string
): WithContext<LocalBusiness> {
    const url = urlPath
        ? buildAbsoluteUrl(urlPath)
        : buildLocalizedUrl(locale, "/about-us")
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        currenciesAccepted: "EUR, USD, BTN, INR",
        name: "Dekyil Guest House",
        url,
        address: HOTEL_ADDRESS,
        contactPoint: {
            "@type": "ContactPoint",
            email: "dekyilguesthouse@gmail.com",
            telephone: "+975-17554152",
        },
        founder: {
            "@type": "Person",
            name: "Karma",
        },
        logo: buildAbsoluteUrl(LogoImage.src),
    }
}

export function buildSuiteRoomSchema(
    locale: Locale = "en"
): WithContext<HotelRoom> {
    return {
        "@context": "https://schema.org",
        "@type": "HotelRoom",
        name: SUITE_ROOM_NAMES[locale],
        description: SUITE_ROOM_DESCRIPTIONS[locale],
        url: buildLocalizedUrl(locale, "/rooms/suite"),
        bed: [
            {
                "@type": "BedDetails",
                numberOfBeds: 2,
                typeOfBed: "Twin XL",
            },
            {
                "@type": "BedDetails",
                numberOfBeds: 1,
                typeOfBed: "King-Size",
            },
        ],
        occupancy: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
        },
        amenityFeature: [
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Bathroom Floor Heating"][locale],
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Free WiFi"][locale],
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Hot Water"][locale],
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Complimentary Tea/Coffee Station"][locale],
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Complimentary Toilet Kit"][locale],
                value: true,
            },
        ],
        address: HOTEL_ADDRESS,
        geo: GEO_COORDINATES,
        smokingAllowed: false,
        numberOfFullBathrooms: 1,
        containedInPlace: {
            "@type": "Place",
            name: "Dekyil Guest House",
            address: HOTEL_ADDRESS,
            geo: GEO_COORDINATES,
        },
    }
}

export function buildDeluxeRoomSchema(
    locale: Locale = "en"
): WithContext<HotelRoom> {
    return {
        "@context": "https://schema.org",
        "@type": "HotelRoom",
        name: DELUXE_ROOM_NAMES[locale],
        description: DELUXE_ROOM_DESCRIPTIONS[locale],
        url: buildLocalizedUrl(locale, "/rooms/deluxe"),
        bed: [
            {
                "@type": "BedDetails",
                numberOfBeds: 2,
                typeOfBed: "Twin XL",
            },
            {
                "@type": "BedDetails",
                numberOfBeds: 1,
                typeOfBed: "Queen",
            },
        ],
        occupancy: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
        },
        amenityFeature: [
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Bathroom Floor Heating"][locale],
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Free WiFi"][locale],
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Hot Water"][locale],
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Complimentary Tea/Coffee Station"][locale],
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Complimentary Toilet Kit"][locale],
                value: true,
            },
        ],
        address: HOTEL_ADDRESS,
        geo: GEO_COORDINATES,
        smokingAllowed: false,
        numberOfFullBathrooms: 1,
        containedInPlace: {
            "@type": "Place",
            name: "Dekyil Guest House",
            address: HOTEL_ADDRESS,
            geo: GEO_COORDINATES,
        },
    }
}

export function buildDeluxeBreadCrumb(
    locale: Locale = "en"
): WithContext<BreadcrumbList> {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: ROOMS_BREADCRUMB_NAMES[locale],
                item: buildLocalizedUrl(locale, "/rooms"),
            },
            {
                "@type": "ListItem",
                position: 2,
                name: DELUXE_BREADCRUMB_NAMES[locale],
                item: buildLocalizedUrl(locale, "/rooms/deluxe"),
            },
        ],
    }
}

export function buildSuiteBreadCrumb(
    locale: Locale = "en"
): WithContext<BreadcrumbList> {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: ROOMS_BREADCRUMB_NAMES[locale],
                item: buildLocalizedUrl(locale, "/rooms"),
            },
            {
                "@type": "ListItem",
                position: 2,
                name: SUITE_BREADCRUMB_NAMES[locale],
                item: buildLocalizedUrl(locale, "/rooms/suite"),
            },
        ],
    }
}

export function buildHotelSchema(locale: Locale = "en"): WithContext<Hotel> {
    return {
        "@context": "https://schema.org",
        "@type": "Hotel",
        name: "Dekyil Guest House",
        url: buildLocalizedUrl(locale, ""),
        address: HOTEL_ADDRESS,
        geo: GEO_COORDINATES,
        telephone: "+975-17554152",
        email: "dekyilguesthouse@gmail.com",
        starRating: {
            "@type": "Rating",
            ratingValue: 3,
            ratingExplanation: STAR_RATING_EXPLANATIONS[locale],
            author: {
                "@type": "Organization",
                name: "Tourism Council Of Bhutan",
                url: "https://tourism.gov.bt",
            },
        },
        numberOfRooms: 13,
        checkinTime: "11:00",
        checkoutTime: "13:00",
        availableLanguage: "en, dz, hi, ne",
        petsAllowed: false,
        currenciesAccepted: "EUR, USD, INR, BTN",
        paymentAccepted: "Cash, Credit Card",
        openingHours: "Mo Tu We Th Fr Sa Su 07:00-18:00",
        priceRange: "$50 - $100",
        amenityFeature: [
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Free WiFi"][locale],
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Parking"][locale],
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Restaurant"][locale],
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Laundry Service"][locale],
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: AMENITY_NAMES["Bathroom Floor Heating"][locale],
                value: true,
            },
        ],
        review: [
            {
                "@type": "Review",
                author: {
                    "@type": "Person",
                    name: "Ranveer Singh",
                },
                datePublished: "2025-03-03",
                reviewBody:
                    "I stayed at Dekyil Guest House in early January 2025 while exploring Central Bhutan. I was lucky enough to be the only guest here at that time. It was a unique experience. The room was really comfortable and cosy.I feel like I got the best one as I was able to over look the valley while still enjoying the view of Jakar Dzong The food was amazing.I really loved having the homemade jam, honey and buckwheat pancakes.Kinley and the staff were incredibly helpful.Kinley would sit by the wood burner and have conversations after dinner and dinner.I found that very thoughtful and I learnt a lot from her too. Thank you for the wonderful stay",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: 5,
                    bestRating: 5,
                },
            },
            {
                "@type": "Review",
                author: {
                    "@type": "Person",
                    name: "Cheryl Battan",
                },
                datePublished: "2022-12-09",
                reviewBody:
                    "On your trip to Bhutan, don't miss this wonderful guest house in Bumthang. The room was very cozy and well-appointed. The hostess Kinley Gyem was absolutely wonderful and made sure we had everything we needed. The food was excellent and authentic; it was some of the best food we had during our 12 days touring throughout Bhutan.",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: 5,
                    bestRating: 5,
                },
            },
            {
                "@type": "Review",
                author: {
                    "@type": "Person",
                    name: "tingdiver",
                },
                datePublished: "2024-10-02",
                reviewBody:
                    "So far the best accommodations I've had in Bhutan. The guesthouse itself is small, simple but has a lovely, authentic looking design made of wood and sits on a small hill overlooking the valley. Inside the rooms are fully equipped with clean, comfortable amenities such as heaters, hot shower and even their own brand of toiletries. The staff demonstrated typical Bhutanese hospitality- showing extreme attentiveness and service especially during meal times. The owners also make it a point to chat to you during breakfast and when I was shown my room, the owner herself gave me a simple briefing of how things worked. Such personal attention cannot be taken for granted and it really enhances the guest experience.I highly recommend this place and will stay here again when I come back to Bumthang and assuming they have space... cuz apparently they're very popular!",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: 5,
                },
            },
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "47",
            author: {
                "@type": "Organization",
                name: "TripAdvisor",
                url: "https://www.tripadvisor.com/",
            },
        },
        contactPoint: {
            "@type": "ContactPoint",
            name: "Kinley Gyem",
            email: "dekyilguesthouse@gmail.com",
            telephone: "+975-17554152",
        },
        location: HOTEL_ADDRESS,
        keywords: HOTEL_KEYWORDS[locale],
        slogan: HOTEL_SLOGANS[locale],
        image: buildAbsoluteUrl(DroneImage.src),
        logo: buildAbsoluteUrl(LogoImage.src),
    }
}

// ---------------------------------------------------------------------------
// Backwards-compatible English-default exports (for non-locale pages)
// ---------------------------------------------------------------------------

export const AboutUsSchema = buildAboutUsSchema("en", "/about-us")
export const SuiteRoomSchema = buildSuiteRoomSchema("en")
export const DeluxeRoomSchema = buildDeluxeRoomSchema("en")
export const DeluxeBreadCrumb = buildDeluxeBreadCrumb("en")
export const SuiteBreadCrumb = buildSuiteBreadCrumb("en")
export const HotelSchema = buildHotelSchema("en")
