import HeroSection from "@/components/hero-section"
import ImageGrid from "@/components/image-grid"
import SectionTitle from "@/components/section-title"
import SuiteShot from "@/public/images/suite.webp"
import NightShot from "@/public/images/night-shot.webp"
import FlowersShot from "@/public/images/flowers.webp"
import ConfShot from "@/public/images/conf.webp"
import ViewShot from "@/public/images/view.webp"
import TeaCupShot from "@/public/images/cupView.webp"
import SceneWithWireShot from "@/public/images/sceneWire.webp"

const GALLERY_IMAGES = [
    {
        src: NightShot,
        alt: "Night view of Dekyil Hotel",
    },
    {
        src: FlowersShot,
        alt: "Flowers in Dekyil Hotel",
    },
    {
        src: ConfShot,
        alt: "Conference room at Dekyil Hotel",
    },
    {
        src: ViewShot,
        alt: "View from Dekyil Hotel",
    },
    {
        src: TeaCupShot,
        alt: "Tea cup view from Dekyil Hotel",
    },
    {
        src: SceneWithWireShot,
        alt: "Scene with wire at Dekyil Hotel",
    },
]

export default function GalleryPage() {
    return (
        <main className="relative min-h-screen">
            <HeroSection
                image={SuiteShot}
                title="Enjoy Bumthang"
                description="Live with a scenic view of the Bumthang valley"
            />
            <section>
                <SectionTitle
                    title="The Gallery"
                    description="a picture collection of all things Dekyil"
                    className="mb-12 py-8"
                />
                <ImageGrid images={GALLERY_IMAGES} />
            </section>
        </main>
    )
}
