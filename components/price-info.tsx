export default function PriceInfo({ price }: {price: string}) {
    return (
        <div>
            <p className="mt-2 text-base">
                Nu {price}+ */per night
            </p>
            <p className="font-worksans text-xs text-muted-foreground">
                taxes not included
            </p>
            <p className="text-xs text-muted-foreground">
                * prices increase during peak season
            </p>
        </div>
    )
}