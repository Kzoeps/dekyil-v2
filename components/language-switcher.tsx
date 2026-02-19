"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import { locales, type Locale } from "@/lib/i18n/config"
import { swapLocaleInPathname } from "@/lib/i18n/locale"
import { cn } from "@/lib/utils"
import type { NavDictionary } from "@/lib/i18n/dictionaries/types"

interface LanguageSwitcherProps {
    currentLocale: Locale
    labels: NavDictionary["languageSwitcher"]
}

export function LanguageSwitcher({
    currentLocale,
    labels,
}: LanguageSwitcherProps) {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [hash, setHash] = useState("")

    useEffect(() => {
        const updateHash = () => setHash(window.location.hash)
        updateHash()
        window.addEventListener("hashchange", updateHash)
        return () => window.removeEventListener("hashchange", updateHash)
    }, [pathname, searchParams])

    return (
        <div className="flex items-center gap-1" aria-label={labels.label}>
            {locales.map((locale) => {
                const isActive = locale === currentLocale
                const nextPath = swapLocaleInPathname(pathname, locale)
                const queryString = searchParams.toString()
                const href = `${nextPath}${queryString ? `?${queryString}` : ""}${hash}`
                const optionLabel = labels.optionLabels[locale]
                const actionLabel = isActive
                    ? optionLabel
                    : labels.switchTo[locale]
                return (
                    <Link
                        key={locale}
                        href={href}
                        aria-current={isActive ? "page" : undefined}
                        aria-label={actionLabel}
                        title={actionLabel}
                        className={cn(
                            "px-2 py-1 text-sm font-medium uppercase rounded transition-colors",
                            isActive
                                ? "text-white bg-white/30 cursor-default pointer-events-none"
                                : "text-white/70 hover:text-white hover:bg-white/20"
                        )}
                    >
                        {optionLabel}
                    </Link>
                )
            })}
        </div>
    )
}
