import { buildAlternateLanguages } from "@/lib/i18n/alternates"
import { buildLocalizedUrl } from "@/lib/seo/site"
import type { Metadata } from "next"
import { permanentRedirect } from "next/navigation"

export const metadata: Metadata = {
    alternates: {
        canonical: buildLocalizedUrl("en", "/contact"),
        languages: buildAlternateLanguages("/contact"),
    },
}

export default function ContactPage() {
    permanentRedirect("/en/contact")
}
