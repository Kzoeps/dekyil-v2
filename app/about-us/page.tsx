import AboutSection from "@/components/about-section"
import HeroSection from "@/components/hero-section"
import FrontImage from "@/public/images/sceneWire.webp"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us",
    description: "A women-owned, operated, family-run hotel in Bumthang",
    keywords:
        "Dekyil Guest House, Bumthang, Bhutan, family-run hotel, women-owned",
    alternates: {
        canonical: "/about-us",
    },
}

export default function AboutUsPage() {
    return (
        <main className="relative min-h-screen">
            <HeroSection
                image={FrontImage}
                title="About Us"
                description="Get to know us"
            />
            <AboutSection />
        </main>
    )
}
