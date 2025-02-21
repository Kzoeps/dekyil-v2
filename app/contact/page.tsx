import HeroSection from "@/components/hero-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"
import DroneImage from "@/public/images/drone.webp"

export default function ContactPage() {
    return (
        <main className="relative min-h-screen">
            <HeroSection
                image={DroneImage}
                title="Enjoy Bumthang"
                description="Live with a scenic view of the Bumthang valley"
            />
            <div className="container mx-auto px-4 py-16">
                <h1 className="mb-12 text-center text-4xl font-bold tracking-tight">
                    Contact Us
                </h1>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <MapPin className="h-5 w-5 text-muted-foreground" />
                                    <p>Jakar, Bumthang, Bhutan</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Phone className="h-5 w-5 text-muted-foreground" />
                                    <p>+975 3 631304</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-5 w-5 text-muted-foreground" />
                                    <p>info@dekylguesthouse.bt</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock className="h-5 w-5 text-muted-foreground" />
                                    <p>
                                        Check-in: 2:00 PM, Check-out: 12:00 PM
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Location</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-video overflow-hidden rounded-md">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1436468724224!2d90.73772671503463!3d27.551160982850377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e19c1b7d0c9bef%3A0x7c6c0a1e15a2c3a3!2sDekyl%20Guest%20House!5e0!3m2!1sen!2sus!4v1645123456789!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>About Our Location</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                    Dekyl Guest House is nestled in the heart of
                                    Bumthang, offering a perfect blend of
                                    traditional Bhutanese hospitality and modern
                                    comfort. Our location provides easy access
                                    to local attractions and breathtaking views
                                    of the surrounding landscape.
                                </p>
                                <p>
                                    We&apos;re just a short walk from the Jakar
                                    Dzong and other cultural landmarks. Our
                                    friendly staff can provide recommendations
                                    for local experiences and arrange
                                    transportation for your adventures in
                                    Bumthang.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Scenic Views</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative aspect-video overflow-hidden rounded-md">
                                    <Image
                                        src="/placeholder.svg?height=400&width=600"
                                        alt="Scenic view from Dekyl Guest House"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="mt-4">
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
