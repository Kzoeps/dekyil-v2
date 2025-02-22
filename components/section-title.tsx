import { cn } from "@/lib/utils"
import * as React from "react"

export interface SectionTitleProps {
    title?: string
    description?: string
    className?: string
}

export default function SectionTitle({
    title,
    description,
    className,
}: SectionTitleProps) {
    return (
        <div className={cn("text-center", className)}>
            {title && (
                <h2 className="text-4xl font-bold font-playfair tracking-tight">
                    {title}
                </h2>
            )}
            {title && <hr className="mt-3 mx-auto w-1/3 bg-slate-500" />}
            {description && (
                <p className="mt-4 text-muted-foreground">{description}</p>
            )}
        </div>
    )
}
