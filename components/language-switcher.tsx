"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { locales, type Locale } from "@/lib/i18n/config"
import { cn } from "@/lib/utils"

interface LanguageSwitcherProps {
    currentLocale: Locale
}

/**
 * Swaps the locale segment in the current pathname.
 * e.g. /en/rooms/suite -> /de/rooms/suite
 */
function swapLocale(pathname: string, targetLocale: Locale): string {
    const segments = pathname.split("/")
    // segments[0] is '' for absolute paths, segments[1] is the locale
    if (segments.length >= 2) {
        segments[1] = targetLocale
    }
    return segments.join("/") || "/"
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
    const pathname = usePathname()

    return (
        <div className="flex items-center gap-1" aria-label="Language switcher">
            {locales.map((locale) => {
                const isActive = locale === currentLocale
                const href = swapLocale(pathname, locale)
                return (
                    <Link
                        key={locale}
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                            "px-2 py-1 text-sm font-medium uppercase rounded transition-colors",
                            isActive
                                ? "text-white bg-white/30 cursor-default pointer-events-none"
                                : "text-white/70 hover:text-white hover:bg-white/20"
                        )}
                    >
                        {locale}
                    </Link>
                )
            })}
        </div>
    )
}
