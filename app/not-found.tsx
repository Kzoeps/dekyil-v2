import Link from "next/link"

export default function NotFound() {
    return (
        <main className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
            <h1 className="text-3xl font-semibold text-foreground">
                Page not found
            </h1>
            <p className="mt-3 max-w-md text-muted-foreground">
                We could not find the page you were looking for. Try the
                homepage or check the URL.
            </p>
            <Link
                href="/en"
                className="mt-6 inline-flex items-center rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium transition hover:bg-foreground/5"
            >
                Go to homepage
            </Link>
        </main>
    )
}
