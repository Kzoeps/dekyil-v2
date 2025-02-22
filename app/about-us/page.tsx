import AboutSection from "@/components/about-section"
import HeroSection from "@/components/hero-section"
import FrontImage from "@/public/images/sceneWire.webp"

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
