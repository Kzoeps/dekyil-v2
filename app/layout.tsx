import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import type { Metadata } from "next"
import { Playfair_Display, Work_Sans } from "next/font/google"
import "./globals.css"
import { DEFAULT_METADATA } from "@/lib/constants"
import Script from "next/script"

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
})

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
})

const DESCRIPTION = "Experience warm Bhutanese hospitality at Dekyil Guest House, a family-owned, women-led hotel in Bumthang. Enjoy scenic valley views, modern amenities, and a prime location near Chamkhar town. Book your stay for a cozy and memorable retreat!"
export const metadata: Metadata = {
  title: {
    template: "%s | Dekyil Guest House",
    default: "Dekyil Guest House",
  },
  description: DESCRIPTION,
  keywords:
    "Dekyil Guest House, family-run hotel, Bumthang accommodations, Chakhar valley views, Bhutanese cuisine",
  openGraph: {
    title: "Dekyil Guest House",
    description: DESCRIPTION,
    type: "website",
    siteName: "Dekyil Guest House",
  },
  twitter: {
    title: "Dekyil Guest House",
    description: DESCRIPTION,
    creator: "@kzoeps",
    card: "summary_large_image",
  },
  ...DEFAULT_METADATA,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${workSans.variable} antialiased`}
      >
        <MainNav />
        {children}
        <Footer />
        <Script strategy="lazyOnload" src="https://cloud.umami.is/script.js" data-website-id="8ae11a5f-9215-4721-94c6-4c4b86a88394" />
      </body>
    </html>
  )
}
