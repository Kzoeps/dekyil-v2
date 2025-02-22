import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { DekyilInformation } from "@/lib/constants"

const MENU_LINKS = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Rooms",
        href: "/rooms",
    },
    {
        title: "Contact",
        href: "/contact",
    },
    {
        title: "About Us",
        href: "/about-us",
    },
    {
        title: "Gallery",
        href: "/gallery",
    },
]

export function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-16">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    {/* About Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-playfair font-semibold">
                            About Us
                        </h3>
                        <p className="text-sm tracking-tight text-muted-foreground">
                            Experience luxury and comfort in the heart of
                            Bumthang valley. Our guest house offers a perfect
                            blend of traditional charm and modern amenities.
                        </p>
                    </div>

                    {/* Quick Menu Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-playfair font-semibold">
                            Quick Menu
                        </h3>

                        <ul className="space-y-2 text-sm font-worksans tracking-tight text-muted-foreground">
                            {MENU_LINKS.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        title={link.title}
                                        className="hover:underline transition-all duration-500 ease-in-out"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold font-playfair">
                            Contact Us
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground font-worksans tracking-tight">
                            <li>{DekyilInformation.DEKYIL}</li>
                            <li>
                                Phone: {DekyilInformation.PHONE_ACHI}/
                                {DekyilInformation.PHONE_AMA}
                            </li>
                            <li>
                                <Link
                                    className="hover:text-red-400 transition-all duration-300 ease-in-out"
                                    href={`mailto:${DekyilInformation.EMAIL}`}
                                >
                                    Email: {DekyilInformation.EMAIL}
                                </Link>
                            </li>
                            <li>{DekyilInformation.ADDRESS}</li>
                        </ul>
                    </div>

                    {/* Social Media Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold font-playfair">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4 ">
                            <Link
                                href={DekyilInformation.FACEBOOK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-red-400 transition-all duration-300 ease-in-out "
                            >
                                <Facebook className="h-6 w-6" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href={DekyilInformation.INSTAGRAM}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-red-400 transition-all duration-300 ease-in-out "
                            >
                                <Instagram className="h-6 w-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} Dekyl Guest House. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
