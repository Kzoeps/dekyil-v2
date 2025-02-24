"use client"
import dynamic from "next/dynamic"
import "lite-youtube-embed/src/lite-yt-embed.css"
import { useEffect } from "react"
function LiteYoutube({ videoId, title }: { videoId: string; title?: string }) {
    useEffect(() => {
        // @ts-expect-error since this is webcomopnent without typings gives issues
        import("lite-youtube-embed")
    }, [])

    return (
        // @ts-expect-error same reasoning as above
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
    )
}

export default dynamic(() => Promise.resolve(LiteYoutube), { ssr: false })
