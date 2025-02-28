import { Footer } from "@/components/footer"
import { MainNav } from "@/components/main-nav"
import type { Metadata } from "next"
import { Playfair_Display, Work_Sans } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
})

const workSans = Work_Sans({
    variable: "--font-work-sans",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Dekyil Guest House | Family-Run Hotel in Bumthang with Scenic Valley Views",
    description:
        "Experience the charm of Dekyil Guest House, offering scenic valley views and authentic Bhutanese cuisine.",
    keywords:
        "Dekyil Guest House, family-run hotel, Bumthang accommodations, Chakhar valley views, Bhutanese cuisine",
    openGraph: {
        title: "Dekyil Guest House",
        description: "Dekyil Guest House is a family-run hotel in Bumthang.",
    },
    twitter: {
        title: "Dekyil Guest House",
        description: "Dekyil Guest House is a family-run hotel in Bumthang.",
    },
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
            </body>
        </html>
    )
}
