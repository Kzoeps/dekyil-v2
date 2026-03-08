"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import { locales, type Locale } from "@/lib/i18n/config"
import { swapLocaleInPathname } from "@/lib/i18n/locale"
import { cn } from "@/lib/utils"
import type { NavDictionary } from "@/lib/i18n/dictionaries/types"

type LanguageSwitcherVariant = "default" | "footer"

interface LanguageSwitcherProps {
    currentLocale: Locale
    labels: NavDictionary["languageSwitcher"]
    variant?: LanguageSwitcherVariant
}

export function LanguageSwitcher({
    currentLocale,
    labels,
    variant = "default",
}: LanguageSwitcherProps) {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [hash, setHash] = useState("")

    const isFooter = variant === "footer"
    const containerClassName = cn(
        "flex items-center",
        isFooter ? "gap-3" : "gap-1"
    )
    const baseLinkClassName = cn(
        "transition-colors",
        isFooter
            ? "px-0 py-0 text-xs font-semibold uppercase tracking-wide"
            : "px-2 py-1 text-sm font-medium uppercase rounded"
    )
    const activeLinkClassName = isFooter
        ? "text-white/90 underline underline-offset-4 cursor-default pointer-events-none"
        : "text-white bg-white/30 cursor-default pointer-events-none"
    const inactiveLinkClassName = isFooter
        ? "text-white/60 hover:text-white/90"
        : "text-white/70 hover:text-white hover:bg-white/20"

    useEffect(() => {
        const updateHash = () => setHash(window.location.hash)
        updateHash()
        window.addEventListener("hashchange", updateHash)
        return () => window.removeEventListener("hashchange", updateHash)
    }, [pathname, searchParams])

    return (
        <div className={containerClassName} aria-label={labels.label}>
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
                        aria-disabled={isActive || undefined}
                        aria-label={actionLabel}
                        title={actionLabel}
                        tabIndex={isActive ? -1 : undefined}
                        className={cn(
                            baseLinkClassName,
                            isActive
                                ? activeLinkClassName
                                : inactiveLinkClassName
                        )}
                    >
                        {locale}
                    </Link>
                )
            })}
        </div>
    )
}
