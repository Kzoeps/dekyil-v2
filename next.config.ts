import type { NextConfig } from "next"

module.exports = {
    async redirects() {
        return [
            {
                source: "/index.html",
                destination: "/en",
                permanent: true,
            },
            {
                source: "/conference.html",
                destination: "/en/conference-hall",
                permanent: true,
            },
            {
                source: "/suite.html",
                destination: "/en/rooms/suite",
                permanent: true,
            },

            {
                source: "/deluxe.html",
                destination: "/en/rooms/deluxe",
                permanent: true,
            },

            {
                source: "/contact.html",
                destination: "/en/contact",
                permanent: true,
            },

            {
                source: "/rooms.html",
                destination: "/en/rooms",
                permanent: true,
            },

            {
                source: "/about.html",
                destination: "/en/about-us",
                permanent: true,
            },
            {
                source: "/gallery.html",
                destination: "/en/gallery",
                permanent: true,
            },
            {
                source: "/about",
                destination: "/en/about-us",
                permanent: true,
            },
        ]
    },
}

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        optimizePackageImports: ["lucide-react"],
    },
}

export default nextConfig
