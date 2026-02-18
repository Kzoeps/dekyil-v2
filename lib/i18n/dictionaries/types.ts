import type { Locale } from "../config"

// ---------------------------------------------------------------------------
// Nav
// ---------------------------------------------------------------------------
export interface NavRoomItem {
    title: string
    description: string
}

export interface NavDictionary {
    home: string
    rooms: string
    roomItems: {
        deluxe: NavRoomItem
        suite: NavRoomItem
    }
    conferenceHall: string
    gallery: string
    aboutUs: string
    contact: string
    openMenu: string
    closeMenu: string
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
export interface FooterDictionary {
    aboutUs: {
        heading: string
        body: string
    }
    quickMenu: {
        heading: string
        links: {
            home: string
            rooms: string
            contact: string
            aboutUs: string
            gallery: string
        }
    }
    contactUs: {
        heading: string
        phoneLabel: string
        emailLabel: string
    }
    followUs: {
        heading: string
        facebookSrOnly: string
        instagramSrOnly: string
    }
    copyright: string
}

// ---------------------------------------------------------------------------
// Home page
// ---------------------------------------------------------------------------
export interface HomeDictionary {
    meta: {
        title: string
        description: string
        keywords: string
    }
    hero: {
        title: string
        description: string
        imageAlt: string
        imageTitle: string
    }
    partnerBadge: {
        label: string
        drukairAlt: string
        drukairTitle: string
    }
    rooms: {
        sectionTitle: string
        sectionDescription: string
    }
    howToFindUs: {
        heading: string
        videoTitle: string
    }
}

// ---------------------------------------------------------------------------
// About Us page
// ---------------------------------------------------------------------------
export interface AboutUsDictionary {
    meta: {
        title: string
        description: string
        keywords: string
    }
    hero: {
        title: string
        description: string
        imageAlt: string
        imageTitle: string
    }
    section: {
        heading: string
        body1: string
        body2: string
        body3: string
        flowersAlt: string
        flowersTitle: string
        motherDaughterAlt: string
        motherDaughterTitle: string
    }
}

// ---------------------------------------------------------------------------
// Rooms listing page
// ---------------------------------------------------------------------------
export interface RoomsDictionary {
    meta: {
        title: string
        description: string
        keywords: string
    }
    hero: {
        title: string
        description: string
        imageAlt: string
        imageTitle: string
    }
    sectionTitle: string
    sectionDescription: string
}

// ---------------------------------------------------------------------------
// Deluxe room page
// ---------------------------------------------------------------------------
export interface DeluxeRoomDictionary {
    meta: {
        title: string
        description: string
        keywords: string
    }
    hero: {
        title: string
        description: string
        imageAlt: string
        imageTitle: string
    }
    sectionTitle: string
    sectionDescription: string
    room205Title: string
    room206Title: string
    room207Title: string
}

// ---------------------------------------------------------------------------
// Suite room page
// ---------------------------------------------------------------------------
export interface SuiteRoomDictionary {
    meta: {
        title: string
        description: string
        keywords: string
    }
    hero: {
        title: string
        description: string
        imageAlt: string
        imageTitle: string
    }
    sectionTitle: string
    sectionDescription: string
    room204Title: string
    room203Title: string
    room202Title: string
    bathroomTitle: string
}

// ---------------------------------------------------------------------------
// Conference Hall page
// ---------------------------------------------------------------------------
export interface ConferenceHallDictionary {
    meta: {
        title: string
        description: string
        keywords: string
    }
    hero: {
        title: string
        description: string
        imageAlt: string
        imageTitle: string
    }
    sectionTitle: string
    sectionDescription: string
    videoTitle: string
}

// ---------------------------------------------------------------------------
// Gallery page
// ---------------------------------------------------------------------------
export interface GalleryDictionary {
    meta: {
        title: string
        description: string
        keywords: string
    }
    hero: {
        title: string
        description: string
        imageAlt: string
        imageTitle: string
    }
    sectionTitle: string
    sectionDescription: string
    images: {
        nightShot: { alt: string; title: string }
        flowers: { alt: string; title: string }
        conference: { alt: string; title: string }
        view: { alt: string; title: string }
        teaCup: { alt: string; title: string }
        sceneWire: { alt: string; title: string }
        jakarDzong: { alt: string; title: string }
        glassHouse: { alt: string; title: string }
    }
}

// ---------------------------------------------------------------------------
// Contact page
// ---------------------------------------------------------------------------
export interface ContactDictionary {
    meta: {
        title: string
        description: string
        keywords: string
    }
    hero: {
        title: string
        description: string
        imageAlt: string
        imageTitle: string
    }
    pageHeading: string
    contactInfo: {
        heading: string
        checkInOut: string
    }
    location: {
        heading: string
        mapTitle: string
    }
    aboutLocation: {
        heading: string
        body1: string
        body2: string
    }
    scenicViews: {
        heading: string
        imageAlt: string
        imageTitle: string
        body: string
    }
}

// ---------------------------------------------------------------------------
// Shared / Price info
// ---------------------------------------------------------------------------
export interface PriceDictionary {
    perNight: string
    taxesNotIncluded: string
    peakSeasonNote: string
}

// ---------------------------------------------------------------------------
// Room card
// ---------------------------------------------------------------------------
export interface RoomCardDictionary {
    exploreCta: string
}

// ---------------------------------------------------------------------------
// TripAdvisor widget
// ---------------------------------------------------------------------------
export interface TripAdvisorDictionary {
    guestReviews: string
}

// ---------------------------------------------------------------------------
// Top-level Dictionary contract
// ---------------------------------------------------------------------------
export interface Dictionary {
    locale: Locale
    nav: NavDictionary
    footer: FooterDictionary
    home: HomeDictionary
    aboutUs: AboutUsDictionary
    rooms: RoomsDictionary
    deluxeRoom: DeluxeRoomDictionary
    suiteRoom: SuiteRoomDictionary
    conferenceHall: ConferenceHallDictionary
    gallery: GalleryDictionary
    contact: ContactDictionary
    price: PriceDictionary
    roomCard: RoomCardDictionary
    tripAdvisor: TripAdvisorDictionary
}
