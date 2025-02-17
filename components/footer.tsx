import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Dekyl Guest House</h3>
            <p className="text-sm text-muted-foreground">
              Experience luxury and comfort in the heart of Bumthang valley. Our guest house offers a perfect blend of
              traditional charm and modern amenities.
            </p>
          </div>

          {/* Quick Menu Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:underline">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:underline">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Dekyl Guest House</li>
              <li>Jakar, Bumthang, Bhutan</li>
              <li>Phone: +975 3 631304</li>
              <li>Email: info@dekylguesthouse.bt</li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dekyl Guest House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

