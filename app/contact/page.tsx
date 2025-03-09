import HeroSection from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"
import View from "@/public/images/view.webp"
import { DekyilInformation } from "@/lib/constants"
import Link from "next/link"
import CupFlowerView from "@/public/images/cupFlowerView.webp"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dekyil Guest House for bookings and inquiries. Located in the heart of Bumthang, we offer warm hospitality and modern comforts. Contact us today for a memorable stay!",
  keywords:
    "Dekyil Guest House, contact, inquiries, bookings, hotel bookings, Bumthang",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <HeroSection
        image={View}
        imageAlt="A tea cup set in the foreground, with Chamkhar Valley in the background"
        imageTitle="Views from Dekyil"
        title="Get In Touch"
        description="Chat with us"
      />
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-4xl font-playfair font-bold tracking-tight">
          Contact Us
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <Card className="rounded-none">
              <CardHeader>
                <CardTitle className="font-playfair text-lg">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <p className="">
                    {DekyilInformation.PHONE_ACHI} /{" "}
                    {DekyilInformation.PHONE_AMA}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <p>{DekyilInformation.ADDRESS}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <Link
                    href={`mailto:${DekyilInformation.EMAIL}`}
                    className="hover:text-red-400 font-worksans tracking-tight"
                  >
                    {DekyilInformation.EMAIL}
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <p>
                    Check-in: 11:00 AM, Check-out: 01:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-none">
              <CardHeader>
                <CardTitle className="font-playfair text-lg">
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4357.405282767549!2d90.7534369!3d27.546586500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375ee337ee4e90d1%3A0xe616b3ddd24038f4!2zRGVreWlsIEd1ZXN0IEhvdXNlIOC9luC9keC9uuC8i-C9keC9gOC-seC9suC9o-C8i-C9mOC9guC-suC9vOC9k-C8i-C9geC-seC9suC9mOC8jQ!5e1!3m2!1sen!2sus!4v1740363878917!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Google Map pin for Dekyil"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="rounded-none">
              <CardHeader>
                <CardTitle className="font-playfair text-lg">
                  About Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 ">
                  Dekyl Guest House is nestled in the heart of
                  Chamkhar Town, Bumthang offering a perfect
                  blend of traditional Bhutanese hospitality
                  and modern comfort. Our location provides
                  easy access to local attractions and
                  breathtaking views of the surrounding
                  landscape.
                </p>
                <p className="">
                  We&apos;re just a short 5 minute walk from
                  the main town and placed conveniently in the
                  middle of all attractions. Our friendly
                  staff can provide recommendations for local
                  experiences and arrange transportation for
                  your adventures in Bumthang.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none">
              <CardHeader>
                <CardTitle className="font-playfair text-lg">
                  Scenic Views
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video overflow-hidden rounded-md">
                  <Image
                    src={CupFlowerView}
                    alt="Scenic view from Dekyl Guest House"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 ">
                  Wake up to stunning views of the Bumthang
                  valley and surrounding mountains. Our guest
                  house offers a tranquil retreat after a day
                  of exploring the beauty of Bhutan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
