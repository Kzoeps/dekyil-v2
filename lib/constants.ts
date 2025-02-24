import Suite from "@/public/images/suite.webp"
import Deluxe from "@/public/images/deluxe.webp"

export enum DekyilInformation {
    PHONE_ACHI = "+975-17-55-41-52",
    PHONE_AMA = "+975-17-86-41-19",
    EMAIL = "dekyilguesthouse@gmail.com",
    ADDRESS = "Chamkhar, Chhokhor, Bumthang, 32001, Bhutan",
    DEKYIL = "Dekyil Guest House",
    FACEBOOK = "https://www.facebook.com/DekyilGuestHouse/",
    INSTAGRAM = "https://www.instagram.com/dekyilguesthouse3/",
}

export const ROOMS = [
    {
        title: "Suite Room",
        price: "6500",
        image: Suite,
        href: "/rooms/suite",
    },
    {
        title: "Deluxe Room",
        price: "4500",
        image: Deluxe,
        href: "/rooms/deluxe",
    },
]
