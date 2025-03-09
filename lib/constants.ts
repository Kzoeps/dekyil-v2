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

export const DEFAULT_METADATA: Metadata = {
  authors: [{ name: "Karma Yoezer", url: "https://www,kzoeps.com" }],
  publisher: "dekylguesthouse.com",
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



