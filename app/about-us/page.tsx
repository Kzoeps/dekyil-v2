import AboutSection from "@/components/about-section"
import HeroSection from "@/components/hero-section"
import InjectStructuredData from "@/components/inject-structured-data"
import { AboutUsSchema } from "@/lib/schema"
import FrontImage from "@/public/images/sceneWire.webp"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "A women-owned, operated, family-run hotel in Bumthang",
  keywords:
    "Discover the story of Dekyil Guest House, a family-owned, women-led hotel in Bumthang. Run by a mother and daughter, we offer warm Bhutanese hospitality, scenic valley views, and modern comforts for a memorable stay.",
  alternates: {
    canonical: "/about-us",
  },
}

export default function AboutUsPage() {
  return (
    <>
      <InjectStructuredData data={AboutUsSchema} />
      <main className="relative min-h-screen">
        <HeroSection
          image={FrontImage}
          title="About Us"
          description="Get to know us"
        />
        <AboutSection />
      </main>
    </>
  )
}
