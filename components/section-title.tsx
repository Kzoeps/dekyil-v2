import { cn } from '@/lib/utils'
import * as React from 'react'

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
        <div className={cn('text-center', className)}>
            {title && (
                <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            )}
            {description && (
                <p className="mt-4 text-muted-foreground">{description}</p>
            )}
        </div>
    )
}
