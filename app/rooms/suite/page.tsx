import HeroSection from "@/components/hero-section"
import ImageGrid from "@/components/image-grid"
import InjectStructuredData from "@/components/inject-structured-data"
import PriceInfo from "@/components/price-info"
import SectionTitle from "@/components/section-title"
import { ROOM_204_IMAGES, ROOM_203_IMAGES, ROOM_202_IMAGES, SUITE_BATHROOM_IMAGES } from "@/lib/image_constants"
import { SuiteBreadCrumb, SuiteRoomSchema } from "@/lib/schema"
import SuiteRoomPano from "@/public/images/room-203/suite_203_pano.webp"
import { Metadata } from "next"
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
          <ImageGrid images={ROOM_204_IMAGES} title="Room 204" />
          <ImageGrid images={ROOM_203_IMAGES} title="Room 203" />
          <ImageGrid images={ROOM_202_IMAGES} title="Room 202" />
          <ImageGrid images={SUITE_BATHROOM_IMAGES} title="Bathroom" />
        </section>
      </main>
    </>
  )
}
