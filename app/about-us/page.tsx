import AboutSection from "@/components/about-section"
import HeroSection from "@/components/hero-section"
import DroneImage from "@/public/images/drone.webp"

export default function AboutUsPage() {
    return (
        <main className="relative min-h-screen">
            <HeroSection
                image={DroneImage}
                title="About Us"
                description="Get to know us"
            />
            <AboutSection/>
        </main>
    )
}
