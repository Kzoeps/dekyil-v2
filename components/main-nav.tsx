"use client"

import * as React from "react"
import Link from "next/link"
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
import { LanguageSwitcher } from "@/components/language-switcher"
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
    const prefix = locale ? `/${locale}` : ""
    const isOpenRef = React.useRef(false)

    const ROOMS = [
        {
            title: dict.roomItems.deluxe.title,
            href: `${prefix}/rooms/deluxe`,
            description: dict.roomItems.deluxe.description,
        },
        {
            title: dict.roomItems.suite.title,
            href: `${prefix}/rooms/suite`,
            description: dict.roomItems.suite.description,
        },
    ]

    const OTHER_LINKS = [
        { title: dict.conferenceHall, href: `${prefix}/conference-hall` },
        { title: dict.gallery, href: `${prefix}/gallery` },
        { title: dict.aboutUs, href: `${prefix}/about-us` },
        { title: dict.contact, href: `${prefix}/contact` },
    ]

    React.useEffect(() => {
        isOpenRef.current = isOpen
    }, [isOpen])

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
        <header className="fixed top-0 z-50 w-full bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <nav className="flex h-16 items-center justify-between">
                    <Link
                        title="Home"
                        href={`${prefix}/`}
                        className="text-xl md:text-base lg:text-xl text-nowrap font-playfair font-semibold text-white"
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
                    <div className="hidden md:flex items-center gap-2 font-worksans font-normal text-base">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            title={dict.home}
                                            href={`${prefix}/`}
                                            className={cn(
                                                "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-white transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                            )}
                                        >
                                            {dict.home}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-white text-base bg-transparent hover:bg-white/20">
                                        {dict.rooms}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                                            {ROOMS.map((room) => (
                                                <li key={room.title}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            title={room.title}
                                                            href={room.href}
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                        >
                                                            <div className="text-base font-medium leading-none">
                                                                {room.title}
                                                            </div>
                                                            <p className="line-clamp-2 mt-1 text-sm leading-snug text-muted-foreground">
                                                                {
                                                                    room.description
                                                                }
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {OTHER_LINKS.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                title={item.title}
                                                href={item.href}
                                                className={cn(
                                                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-white transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                                )}
                                            >
                                                {item.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                        {locale && (
                            <LanguageSwitcher
                                currentLocale={locale}
                                labels={dict.languageSwitcher}
                            />
                        )}
                    </div>
                </nav>

                {/* Mobile menu */}
                {isOpen && (
                    <div
                        id="mobile-menu"
                        className="md:hidden font-worksans font-normal"
                    >
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link
                                title={dict.home}
                                href={`${prefix}/`}
                                className="block rounded-md px-3 py-2 text-base text-white hover:bg-white/20"
                                onClick={() => setIsOpen(false)}
                            >
                                {dict.home}
                            </Link>

                            <div className="pt-2 pb-1">
                                <p className="px-3 text-sm font-medium text-gray-300">
                                    {dict.rooms}
                                </p>
                            </div>

                            {ROOMS.map((room) => (
                                <Link
                                    title={room.title}
                                    key={room.title}
                                    href={room.href}
                                    className="block rounded-md px-3 py-2 text-base text-white hover:bg-white/20 pl-6"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {room.title}
                                </Link>
                            ))}

                            {OTHER_LINKS.map((item) => (
                                <Link
                                    title={item.title}
                                    key={item.title}
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base text-white hover:bg-white/20"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ))}

                            {locale && (
                                <div className="pt-2 pb-1 px-3">
                                    <LanguageSwitcher
                                        currentLocale={locale}
                                        labels={dict.languageSwitcher}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
