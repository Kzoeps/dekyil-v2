"use client"
import dynamic from "next/dynamic"
import "lite-youtube-embed/src/lite-yt-embed.css"
import { useEffect, useRef, useState } from "react"
function LiteYoutube({ videoId, title }: { videoId: string; title?: string }) {
    const rootRef = useRef<HTMLDivElement | null>(null)
    const [shouldInitialize, setShouldInitialize] = useState(false)
    const intersectionRootMargin = "200px"

    useEffect(() => {
        if (shouldInitialize) {
            return
        }

        const node = rootRef.current
        if (!node) {
            return
        }

        if (typeof IntersectionObserver === "undefined") {
            setShouldInitialize(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setShouldInitialize(true)
                    observer.disconnect()
                }
            },
            { rootMargin: intersectionRootMargin }
        )

        observer.observe(node)

        return () => observer.disconnect()
    }, [shouldInitialize])

    useEffect(() => {
        if (!shouldInitialize) {
            return
        }

        // @ts-expect-error since this is webcomopnent without typings gives issues
        import("lite-youtube-embed")
    }, [shouldInitialize])

    return (
        <div ref={rootRef} className="h-full w-full">
            {/* @ts-expect-error same reasoning as above */}
            <lite-youtube
                videoId={videoId}
                style={{
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url('https://i.ytimg.com/vi/${videoId}/hqdefault.jpg')`,
                }}
            >
                <a
                    href="https://youtube.com/watch?v=goiWrNiaT0I"
                    className="lyt-playbtn"
                    title={title || "Play Youtube Video"}
                ></a>
                {/* @ts-expect-error same reasoning as above */}
            </lite-youtube>
        </div>
    )
}

export default dynamic(() => Promise.resolve(LiteYoutube), { ssr: false })
