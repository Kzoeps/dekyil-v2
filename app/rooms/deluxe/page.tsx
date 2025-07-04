import HeroSection from "@/components/hero-section"
import ImageGrid from "@/components/image-grid"
import InjectStructuredData from "@/components/inject-structured-data"
import PriceInfo from "@/components/price-info"
import SectionTitle from "@/components/section-title"
import { DeluxeBreadCrumb, DeluxeRoomSchema } from "@/lib/schema"
import DeluxeMainImage from "@/public/images/room-205/deluxe-205-main.webp"
import { Metadata } from "next"
import { ROOM_205_IMAGES, ROOM_206_IMAGES, ROOM_207_IMAGES } from "@/lib/image_constants"

const DELUXE_DESC =
  "The deluxe room at Dekyil offers a comfortable and cosy experience. The rooms feature a backdrop of the Jakar Dzong and also modern amenities such as floor heating in the bathroom, double glazed windows and more to make sure your stay at Dekyil feels just like home."

export const metadata: Metadata = {
  title: "Deluxe Rooms",
  description: "Explore the Deluxe Rooms at Dekyil Guest House",
  keywords:
    "Dekyil Guest House, Deluxe Rooms, Hotel in Bumthang, Bumthang, Bhutan, Chamkhar Valley",
  alternates: {
    canonical: "/rooms/deluxe",
  },
}

export default function Deluxe() {
  return (
    <>
      <InjectStructuredData data={[DeluxeRoomSchema, DeluxeBreadCrumb]} />
      <main className="relative min-h-screen">
        <HeroSection
          imageAlt="A shot of twin deluxe bed room with Jakar Dzong in the background"
          imageTitle="Dekyil Deluxe"
          image={DeluxeMainImage}
          title="Deluxe Room"
          description="Our hotel rooms"
        />
        <section className="mx-auto py-16 max-w-[1440px] px-4">
          <SectionTitle
            title="The Deluxe Room"
            description={DELUXE_DESC}
            className="mb-12 flex flex-col gap-12"
          />
        </section>
        <section className="mx-auto py-16 max-w-[1440px]">
          <SectionTitle
            title="Room 205"
            description={<PriceInfo price="4500" />}
            className="mb-12 flex flex-col gap-4"
          />
          <ImageGrid images={ROOM_205_IMAGES} />
        </section>
        <section className="mx-auto py-16 max-w-[1440px]">
          <SectionTitle
            title="Room 206"
            className="mb-12 flex flex-col gap-4"
            description={<PriceInfo price="4500" />}
          />
          <ImageGrid images={ROOM_206_IMAGES} />
        </section>
        <section className="mx-auto py-16 max-w-[1440px]">
          <SectionTitle
            title="Room 207"
            className="mb-12 flex flex-col gap-4"
            description={<PriceInfo price="4500" />}
          />
          <ImageGrid images={ROOM_207_IMAGES} />
        </section>
      </main>
    </>
  )
}
