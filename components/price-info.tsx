import type { PriceDictionary } from "@/lib/i18n/dictionaries/types"

const DEFAULT_PRICE_DICT: PriceDictionary = {
    perNight: "per night",
    taxesNotIncluded: "taxes not included",
    peakSeasonNote: "prices increase during peak season",
}

export default function PriceInfo({
    price,
    className,
    dict = DEFAULT_PRICE_DICT,
}: {
    price: string
    className?: string
    dict?: PriceDictionary
}) {
    return (
        <div className={className}>
            <p className="mt-2 text-base">
                Nu {price}+ */{dict.perNight}
            </p>
            <p className="font-worksans text-xs text-muted-foreground">
                {dict.taxesNotIncluded}
            </p>
            <p className="text-xs text-muted-foreground">
                * {dict.peakSeasonNote}
            </p>
        </div>
    )
}
