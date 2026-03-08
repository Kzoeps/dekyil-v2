import { buildAlternateLanguages } from "@/lib/i18n/alternates"
import { buildLocalizedUrl } from "@/lib/seo/site"
import type { Metadata } from "next"
import { permanentRedirect } from "next/navigation"

export const metadata: Metadata = {
    alternates: {
        canonical: buildLocalizedUrl("en", "/about-us"),
        languages: buildAlternateLanguages("/about-us"),
    },
}

export default function AboutUsPage() {
    permanentRedirect("/en/about-us")
}
