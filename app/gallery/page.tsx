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
import JakarDzong from "@/public/images/jakar_dzong_from_206.webp"
import GlassHouseView from "@/public/images/glass_house.webp"
import { Metadata } from "next"
import { PIPE_DEKYIL } from "@/lib/constants"

const GALLERY_IMAGES = [
  {
    src: NightShot,
    alt: "Night view of Dekyil Guest House",
    title: "Dekyil"
  },
  {
    src: FlowersShot,
    alt: "Flowers from Dekyil",
    title: "Dekyil Flowers"
  },
  {
    src: ConfShot,
    alt: "Conference room at Dekyil Hotel",
    title: "Dekyil Conference"
  },
  {
    src: ViewShot,
    alt: "View from Dekyil Hotel",
    title: "Dekyil"
  },
  {
    src: TeaCupShot,
    alt: "View of paddy fields from dekyil guest house with tea cups in the foreground",
    title: "Dekyil view"
  },
  {
    src: SceneWithWireShot,
    alt: "Front view from Dekyil Compounds of the paddy fields",
    title: "Dekyil view"
  },
  {
    src: JakarDzong,
    alt: "Jakar Dzong view from Room 206",
    title: "Dekyil view"
  },
  {
    src: GlassHouseView,
    alt: "Sitting area in the glass house and the view from the room",
    title: "Dekyil view"
  }
]

enum GalleryMetadata {
  Title = `Gallery ${PIPE_DEKYIL}`,
  Description = "A picture collection of all things Dekyil, Chamkhar, Bumthang & Bhutan",
}

export const metadata: Metadata = {
  title: "Gallery",
  description: GalleryMetadata.Description,
  keywords:
    "Dekyil Guest House, Gallery, Bumthang, Bhutan, Bumthang Pictures, Chamkhar Valley",
  alternates: {
    canonical: "/gallery",
  },
}

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen">
      <HeroSection
        image={SuiteShot}
        imageAlt="A fisheye shot of the twin suite room"
        imageTitle="Dekyil Suites"
        title="The Gallery"
        description="Food. rooms. scenes. dekyil."
      />
      <section className="pb-8">
        <SectionTitle
          title="The Gallery"
          description={
            <p className="text-muted-foreground mt-6">
              The Gallery is a picture collection of all things{" "}
              <br />
              <span className="font-bold italic text-blue-400">
                Dekyil.
              </span>
            </p>
          }
          className="mb-6 py-8"
        />
        <ImageGrid images={GALLERY_IMAGES} />
      </section>
    </main>
  )
}
