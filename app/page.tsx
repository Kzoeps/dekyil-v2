import { buildAlternateLanguages } from "@/lib/i18n/alternates"
import { buildLocalizedUrl } from "@/lib/seo/site"
import type { Metadata } from "next"
import { permanentRedirect } from "next/navigation"

export const metadata: Metadata = {
    alternates: {
        canonical: buildLocalizedUrl("en", ""),
        languages: buildAlternateLanguages(""),
    },
}

export default function Home() {
    permanentRedirect("/en")
}
