import HeroSection from "@/components/hero-section"
import ImageGrid from "@/components/image-grid"
import SectionTitle from "@/components/section-title"
import ConferenceImage from "@/public/images/conference/conf-cover.webp"
import ConfereceFront from "@/public/images/conference/conf-outside.webp"
import ConferencePano from "@/public/images/conference/conf-pano-1.webp"
import ConferecePano2 from "@/public/images/conference/conf-pano-2.webp"
import ConferenceSingle from "@/public/images/conference/conf-single.webp"
import ConferenceSingle2 from "@/public/images/conference/conf-single-2.webp"
import ConferenceOutside2 from "@/public/images/conference/outside-2.webp"
import LiteYoutube from "@/components/ui/lite-youtube"
import { Metadata } from "next"

const CONFERENCE_HALL_IMAGES = [
  {
    src: ConfereceFront,
    alt: "Conference Hall From Outside Night Shot",
    title: "Dekyil Conference"
  },
  {
    src: ConferencePano,
    alt: "Conference Hall Panoramic Shot from the back",
    title: "Dekyil Conference"
  },
  {
    src: ConferecePano2,
    alt: "Conference Hall Panoramic Shot from the front",
    title: "Dekyil Conference"
  },
  {
    src: ConferenceSingle,
    alt: "Conference Hall View",
    title: "Dekyil Conference"
  },
  {
    src: ConferenceSingle2,
    alt: "Conference Hall View",
    title: "Dekyil Conference"
  },
  {
    src: ConferenceOutside2,
    alt: "Conference Hall and Hotel outside view night shot",
    title: "Dekyil Conference"
  },
]

export const metadata: Metadata = {
  title: "Conference Hall",
  description:
    "The conference hall at Dekyil is of comfortable and peaceful atmosphere that is perfect for meeting of any size and kind. We offer projector together with a pointer and a refreshment station for snacking up during your long arduous meet.",
  keywords:
    "Conference Hall, Dekyil Guest House, Bumthang, Bhutan, meeting space, projector, refreshment station",
  alternates: {
    canonical: "/conference-hall",
  },
}

export default function ConferenceHallPage() {
  return (
    <main className="relative min-h-screen ">
      <HeroSection
        image={ConferenceImage}
        imageAlt="Frontview of the conference hall at Dekyil"
        imageTitle="Conference Hall"
        title="Conference Hall"
        description="Meet and Discuss with ease and peace"
      />
      <section className="container mx-auto px-4 py-16">
        <SectionTitle
          title="Conference Hall"
          className="mb-12"
          description="The conference hall at Dekyil is of comfortable and peaceful atmosphere that is perfect for meeting of any size and kind. We offer projector together with a pointer and a refreshment station for snacking up during your long arduous meet."
        />
        <div className="aspect-video overflow-hidden rounded-none max-h-[550px] mx-auto bg-muted">
          <LiteYoutube
            videoId="ot3gHkkRlPA"
            title="Play video for dekyil conference hall"
          />
        </div>
      </section>
      <section className="w-full bg-gray-50 py-14">
        <div className="container mx-auto">
          <ImageGrid images={CONFERENCE_HALL_IMAGES} />
        </div>
      </section>
    </main>
  )
}
