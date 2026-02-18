import { NextRequest, NextResponse } from "next/server"
import { defaultLocale } from "./lib/i18n/config"
import { hasLocalePrefix, withLocale } from "./lib/i18n/locale"

/**
 * Returns true for paths that should be skipped by locale middleware:
 * - Next.js internals (/_next/*)
 * - API routes (/api/*)
 * - Files with extensions (e.g. .ico, .png, .jpg, .svg, .css, .js)
 * - favicon.ico
 */
function shouldSkip(pathname: string): boolean {
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api/") ||
        pathname === "/favicon.ico"
    ) {
        return true
    }

    // Skip paths that look like static files (have a file extension)
    const lastSegment = pathname.split("/").pop() ?? ""
    if (lastSegment.includes(".")) {
        return true
    }

    return false
}

export function middleware(request: NextRequest) {
    const { pathname, search } = request.nextUrl

    if (shouldSkip(pathname)) {
        return NextResponse.next()
    }

    if (hasLocalePrefix(pathname)) {
        return NextResponse.next()
    }

    // Redirect to the default locale prefix, preserving query params
    const localizedPath = withLocale(defaultLocale, pathname)
    const redirectUrl = new URL(localizedPath + search, request.url)
    return NextResponse.redirect(redirectUrl)
}

export const config = {
    // Run on all routes; the middleware function itself decides what to skip
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
