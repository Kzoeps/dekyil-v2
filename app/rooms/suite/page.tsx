import HeroSection from "@/components/hero-section"
import ImageGrid from "@/components/image-grid"
import InjectStructuredData from "@/components/inject-structured-data"
import PriceInfo from "@/components/price-info"
import SectionTitle from "@/components/section-title"
import { SuiteBreadCrumb, SuiteRoomSchema } from "@/lib/schema"
import SuiteRoomPano from "@/public/images/room-203/suite_203_pano.webp"
import { Metadata } from "next"
const ROOM_203_IMAGES = [
  {
    src: "/images/room-203/suite_203_pano.webp",
    alt: "A fish eye shot of Room 203 featuring the twin beds and the sofa lounge area",
    title: "Room 203"
  },
  {
    src: "/images/room-203/suite_203_outside.webp",
    alt: "A shot of the divider between the room and lounge area featuring drukpa windows",
    title: "Room 203"
  },
  {
    src: "/images/room-203/suite_twin.webp",
    alt: "A shot from the corner featuring the twin beds and the reading lamps",
    title: "Room 203"
  },
  {
    src: "/images/room-203/twin_suite_203_overview.webp",
    alt: "A fish eye shot of Room 203 featuring the twin beds and the sofa lounge area",
    title: "Room 203"
  },
  {
    src: "/images/room-203/twin_suite_203.webp",
    alt: "A fish eye shot of Room 203 from the front featuring the twin beds, wardrobe and luggage area",
    title: "Room 203"
  },
]

const ROOM_202_IMAGES = [
  {
    src: "/images/room-202/room_202_scenery.webp",
    alt: "A shot of the view from the bed of room 202, featuring the chamkhar valley in the background",
    title: "Room 202"
  },
  {
    src: "/images/room-202/room_202_view.webp",
    alt: "Shot of the chamkhar valley from the lounge area in 203",
    title: "Room 202"
  },
  {
    src: "/images/room-202/suite_202_corner_view.webp",
    alt: "A shot of the queen sized bed and the lounge area in the background",
    title: "Room 202"
  },
]

const SUITE_BATHROOM_IMAGES = [
  {
    src: "/images/suite_bathroom/bathoroom_204.webp",
    alt: "A shot of the bathtub and the sink",
    title: "204 Bathroom"
  },
  {
    src: "/images/suite_bathroom/bathroom_202.webp",
    alt: "Shower area and the sink along with the toilet pot",
    title: "204 Bathroom"
  },
  {
    src: "/images/suite_bathroom/bathroom.webp",
    alt: "A shot of the sink and the pot with toiletries",
    title: "204 Bathroom"
  },
  {
    src: "/images/suite_bathroom/Bathtub.webp",
    alt: "A shot of the bathtub and toilet pot",
    title: "204 Bathroom"
  },
  {
    src: "/images/suite_bathroom/room_204_bathroom.webp",
    alt: "A mirror shot of the sink and the bathroom tiles",
    title: "204 Bathroom"
  },
]

export const metadata: Metadata = {
  title: "Suite Room",
  description: "Stay in our Suite Rooms at Dekyil Guest House, a family-run, women-led hotel in Bumthang. Enjoy modern comforts, under-floor heated bathrooms, and stunning valley views—all within walking distance of Chamkhar town. Book your stay today!",
  keywords:
    "Dekyil Guest House, Suite Room, Hotel in Bumthang, Bumthang, Bhutan, Chamkhar Valley",
  alternates: {
    canonical: "/rooms/suite",
  },
}
export default function SuitePage() {
  return (
    <>
      <InjectStructuredData data={[SuiteRoomSchema, SuiteBreadCrumb]} />
      <main className="relative min-h-screen">
        <HeroSection
          imageAlt="A fish eye shot of the twin suite at Dekyil"
          imageTitle="Dekyil Suites"
          image={SuiteRoomPano}
          title="Our Suite Room"
          description="Dekyil Rooms"
        />
        <section className="mx-auto py-16 max-w-[1440px]">
          <SectionTitle
            title="The Suite Room"
            description={<PriceInfo className="mt-6" price="6500" />}
            className="mb-12"
          />
          <p className="px-4 text-center text-muted-foreground">
            Dekyil Guest House&apos;s suite room provides a luxurious
            experience to your stay in Bumthang. The large window panes
            offer an expansive view of the Chamkhar valley and also make
            for a great workplace. The floor heating systems in the
            bathroom also make for a delightful surprise in the freezing
            winters of Bumthang.
          </p>
          <ImageGrid images={ROOM_203_IMAGES} title="Room 203" />
          <ImageGrid images={ROOM_202_IMAGES} title="Room 202" />
          <ImageGrid images={SUITE_BATHROOM_IMAGES} title="Bathroom" />
        </section>
      </main>
    </>
  )
}
