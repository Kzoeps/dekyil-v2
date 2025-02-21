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

const rooms = [
    {
        title: "Deluxe Room",
        href: "/rooms/deluxe",
        description: "Experience luxury in our spacious deluxe rooms",
    },
    {
        title: "Suite Room",
        href: "/rooms/suite",
        description: "Indulge in the ultimate comfort of our suite rooms",
    },
]

const OTHER_LINKS = ["Conference Hall", "Gallery", "About us", "Contact"]

export function MainNav() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <nav className="fixed top-0 z-50 w-full bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        className="text-xl font-playfair font-semibold text-white"
                    >
                        Dekyil Guest House
                    </Link>

                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-white" />
                        ) : (
                            <Menu className="h-6 w-6 text-white" />
                        )}
                    </Button>
                    {/* Desktop menu */}
                    <div className="hidden md:block font-worksans font-normal text-base">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href="/" legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(
                                                "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2  text-white transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                            )}
                                        >
                                            Home
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-white text-base bg-none">
                                        Rooms
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                                            {rooms.map((room) => (
                                                <li key={room.title}>
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            href={room.href}
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                        >
                                                            <div className="leading-none">
                                                                {room.title}
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                {
                                                                    room.description
                                                                }
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                {OTHER_LINKS.map((item) => (
                                    <NavigationMenuItem key={item}>
                                        <Link
                                            href={`/${item.toLowerCase().replace(" ", "-")}`}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={cn(
                                                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2  text-white transition-colors hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                                )}
                                            >
                                                {item}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden font-worksans font-normal">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link
                                href="/"
                                className="block rounded-md px-3 py-2 text-base  text-white hover:bg-white/20"
                            >
                                Home
                            </Link>
                            {rooms.map((room) => (
                                <Link
                                    key={room.title}
                                    href={room.href}
                                    className="block rounded-md px-3 py-2 text-base  text-white hover:bg-white/20"
                                >
                                    {room.title}
                                </Link>
                            ))}
                            {OTHER_LINKS.map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                                    className="block rounded-md px-3 py-2 text-base  text-white hover:bg-white/20"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
