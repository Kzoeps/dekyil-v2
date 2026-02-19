import Suite from "@/public/images/suite.webp"
import Deluxe from "@/public/images/deluxe.webp"
import { Metadata } from "next"

export enum DekyilInformation {
    PHONE_ACHI = "+975-17-55-41-52",
    PHONE_AMA = "+975-17-86-41-19",
    EMAIL = "dekyilguesthouse@gmail.com",
    ADDRESS = "Chamkhar, Chhokhor, Bumthang, 32001, Bhutan",
    DEKYIL = "Dekyil Guest House",
    FACEBOOK = "https://www.facebook.com/DekyilGuestHouse/",
    INSTAGRAM = "https://www.instagram.com/dekyilguesthouse3/",
}

export const PIPE_DEKYIL = "| Dekyil Guest House"

export const DEFAULT_OPENGRAPH_IMAGE = {
    url: "/opengraph-image.jpg",
    width: 1200,
    height: 630,
    alt: "Dekyil Guest House",
}

export const DEFAULT_TWITTER_IMAGE = "/twitter-image.jpg"

export const ROOMS = [
    {
        roomKey: "suite" as const,
        title: "Suite Room",
        alt: "Picture of the suite room",
        price: "6500",
        image: Suite,
        /** Base path — locale pages must prepend the active locale, e.g. `/${locale}${room.href}` */
        href: "/rooms/suite",
    },
    {
        roomKey: "deluxe" as const,
        title: "Deluxe Room",
        alt: "Picture of the deluxe room",
        price: "4500",
        image: Deluxe,
        /** Base path — locale pages must prepend the active locale, e.g. `/${locale}${room.href}` */
        href: "/rooms/deluxe",
    },
]

export const DEFAULT_METADATA: Metadata = {
    authors: [{ name: "Karma Yoezer", url: "https://www.kzoeps.com" }],
    publisher: "dekyilguesthouse.com",
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
    category: "accommodations",
}
