"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { NavDictionary } from "@/lib/i18n/dictionaries/types"
import type { Locale } from "@/lib/i18n/config"

interface MainNavProps {
    dict?: NavDictionary
    locale?: Locale
}

const DEFAULT_DICT: NavDictionary = {
    home: "Home",
    rooms: "Rooms",
    roomItems: {
        deluxe: {
            title: "Deluxe Room",
            description: "Experience luxury in our spacious deluxe rooms",
        },
        suite: {
            title: "Suite Room",
            description: "Indulge in the ultimate comfort of our suite rooms",
        },
    },
    conferenceHall: "Conference Hall",
    gallery: "Gallery",
    aboutUs: "About us",
    contact: "Contact",
    languageSwitcher: {
        label: "Language",
        optionLabels: {
            en: "English",
            de: "German",
        },
        switchTo: {
            en: "Switch language to English",
            de: "Switch language to German",
        },
    },
    openMenu: "Open menu",
    closeMenu: "Close menu",
}

export function MainNav({ dict = DEFAULT_DICT, locale }: MainNavProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname() ?? ""
    const prefix = locale ? `/${locale}` : ""
    const isOpenRef = React.useRef(false)

    const ROOMS = React.useMemo(
        () => [
            {
                title: dict.roomItems.deluxe.title,
                href: `${prefix}/rooms/deluxe`,
                path: "/rooms/deluxe",
                description: dict.roomItems.deluxe.description,
            },
            {
                title: dict.roomItems.suite.title,
                href: `${prefix}/rooms/suite`,
                path: "/rooms/suite",
                description: dict.roomItems.suite.description,
            },
        ],
        [dict, prefix]
    )

    const OTHER_LINKS = React.useMemo(
        () => [
            {
                title: dict.conferenceHall,
                href: `${prefix}/conference-hall`,
                path: "/conference-hall",
            },
            {
                title: dict.gallery,
                href: `${prefix}/gallery`,
                path: "/gallery",
            },
            {
                title: dict.aboutUs,
                href: `${prefix}/about-us`,
                path: "/about-us",
            },
            {
                title: dict.contact,
                href: `${prefix}/contact`,
                path: "/contact",
            },
        ],
        [dict, prefix]
    )

    const normalizedPath = React.useMemo(() => {
        if (!pathname) return "/"
        if (prefix && pathname.startsWith(prefix)) {
            const stripped = pathname.slice(prefix.length)
            return stripped === "" ? "/" : stripped
        }
        return pathname
    }, [pathname, prefix])

    const isRoomsPath =
        normalizedPath === "/rooms" || normalizedPath.startsWith("/rooms/")
    const isHomePath = normalizedPath === "/"
    const isLinkActive = (path: string) => normalizedPath === path

    const desktopLinkBaseClassName =
        "group inline-flex h-9 w-max items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50"
    const desktopLinkActiveClassName = "bg-white/20 text-white border-white/30"
    const desktopLinkInactiveClassName = "hover:bg-white/12 hover:text-white"
    const desktopTriggerBaseClassName =
        "h-9 border border-white/10 bg-white/5 text-base text-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 data-[state=open]:bg-white/15"
    const desktopTriggerActiveClassName =
        "bg-white/20 text-white border-white/30"
    const desktopTriggerInactiveClassName = "hover:bg-white/12 hover:text-white"
    const desktopSubLinkBaseClassName =
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
    const desktopSubLinkActiveClassName = "bg-accent text-accent-foreground"
    const desktopSubLinkInactiveClassName =
        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    const mobileLinkBaseClassName =
        "flex min-h-[44px] items-center rounded-xl px-4 py-3 text-base transition-colors"
    const mobileLinkActiveClassName = "bg-white/20 text-white"
    const mobileLinkInactiveClassName = "text-white hover:bg-white/15"

    React.useEffect(() => {
        isOpenRef.current = isOpen
    }, [isOpen])

    React.useEffect(() => {
        const threshold = 24
        let ticking = false

        const updateScrollState = () => {
            setIsScrolled(window.scrollY > threshold)
            ticking = false
        }

        const handleScroll = () => {
            if (!ticking) {
                ticking = true
                window.requestAnimationFrame(updateScrollState)
            }
        }

        updateScrollState()

        const scrollOptions: AddEventListenerOptions = { passive: true }
        window.addEventListener("scroll", handleScroll, scrollOptions)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu when window is resized to desktop view
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isOpenRef.current) {
                setIsOpen(false)
            }
        }

        const resizeOptions: AddEventListenerOptions = { passive: true }
        window.addEventListener("resize", handleResize, resizeOptions)
        return () =>
            window.removeEventListener("resize", handleResize, resizeOptions)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full border-b border-white/10 transition-colors transition-shadow duration-300 ease-out",
                isScrolled
                    ? "bg-black/70 shadow-lg shadow-black/25 backdrop-blur-md border-white/20"
                    : "bg-black/20 backdrop-blur-md"
            )}
        >
            <div className="container mx-auto px-4">
                <nav className="flex h-16 items-center justify-between">
                    <Link
                        title="Home"
                        href={`${prefix}/`}
                        className="text-xl md:text-base lg:text-xl text-nowrap font-playfair font-semibold text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        Dekyil Guest House
                    </Link>

                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        aria-label={isOpen ? dict.closeMenu : dict.openMenu}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center gap-2.5 font-worksans font-normal text-base">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            title={dict.home}
                                            href={`${prefix}/`}
                                            className={cn(
                                                desktopLinkBaseClassName,
                                                isHomePath
                                                    ? desktopLinkActiveClassName
                                                    : desktopLinkInactiveClassName
                                            )}
                                            aria-current={
                                                isHomePath ? "page" : undefined
                                            }
                                        >
                                            {dict.home}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        className={cn(
                                            desktopTriggerBaseClassName,
                                            isRoomsPath
                                                ? desktopTriggerActiveClassName
                                                : desktopTriggerInactiveClassName
                                        )}
                                    >
                                        {dict.rooms}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                                            {ROOMS.map((room) => {
                                                const isActive = isLinkActive(
                                                    room.path
                                                )
                                                return (
                                                    <li key={room.title}>
                                                        <NavigationMenuLink
                                                            asChild
                                                        >
                                                            <Link
                                                                title={
                                                                    room.title
                                                                }
                                                                href={room.href}
                                                                className={cn(
                                                                    desktopSubLinkBaseClassName,
                                                                    isActive
                                                                        ? desktopSubLinkActiveClassName
                                                                        : desktopSubLinkInactiveClassName
                                                                )}
                                                                aria-current={
                                                                    isActive
                                                                        ? "page"
                                                                        : undefined
                                                                }
                                                            >
                                                                <div className="text-base font-semibold leading-none text-foreground">
                                                                    {room.title}
                                                                </div>
                                                                <p className="line-clamp-2 mt-1 text-sm leading-snug text-foreground/70">
                                                                    {
                                                                        room.description
                                                                    }
                                                                </p>
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {OTHER_LINKS.map((item) => {
                                    const isActive = isLinkActive(item.path)
                                    return (
                                        <NavigationMenuItem key={item.title}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    title={item.title}
                                                    href={item.href}
                                                    className={cn(
                                                        desktopLinkBaseClassName,
                                                        isActive
                                                            ? desktopLinkActiveClassName
                                                            : desktopLinkInactiveClassName
                                                    )}
                                                    aria-current={
                                                        isActive
                                                            ? "page"
                                                            : undefined
                                                    }
                                                >
                                                    {item.title}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )
                                })}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </nav>

                {/* Mobile menu */}
                {isOpen && (
                    <div
                        id="mobile-menu"
                        className="md:hidden font-worksans font-normal"
                    >
                        <div className="mt-3 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-white/10 bg-black/75 px-3 pb-4 pt-3 shadow-lg shadow-black/30 backdrop-blur-md">
                            <Link
                                title={dict.home}
                                href={`${prefix}/`}
                                className={cn(
                                    mobileLinkBaseClassName,
                                    isHomePath
                                        ? mobileLinkActiveClassName
                                        : mobileLinkInactiveClassName
                                )}
                                aria-current={isHomePath ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                            >
                                {dict.home}
                            </Link>

                            <div className="pt-3">
                                <p
                                    className={cn(
                                        "px-4 text-xs font-semibold uppercase tracking-[0.18em]",
                                        isRoomsPath
                                            ? "text-white/85"
                                            : "text-white/60"
                                    )}
                                >
                                    {dict.rooms}
                                </p>
                            </div>

                            {ROOMS.map((room) => {
                                const isActive = isLinkActive(room.path)
                                return (
                                    <Link
                                        title={room.title}
                                        key={room.title}
                                        href={room.href}
                                        className={cn(
                                            mobileLinkBaseClassName,
                                            "pl-7",
                                            isActive
                                                ? mobileLinkActiveClassName
                                                : mobileLinkInactiveClassName
                                        )}
                                        aria-current={
                                            isActive ? "page" : undefined
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {room.title}
                                    </Link>
                                )
                            })}

                            {OTHER_LINKS.map((item) => {
                                const isActive = isLinkActive(item.path)
                                return (
                                    <Link
                                        title={item.title}
                                        key={item.title}
                                        href={item.href}
                                        className={cn(
                                            mobileLinkBaseClassName,
                                            isActive
                                                ? mobileLinkActiveClassName
                                                : mobileLinkInactiveClassName
                                        )}
                                        aria-current={
                                            isActive ? "page" : undefined
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
