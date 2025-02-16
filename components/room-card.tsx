import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface RoomCardProps {
  title: string
  price: string
  imageUrl: any
  href: string
}

export function RoomCard({ title, price, imageUrl, href }: RoomCardProps) {
  return (
    <Card className="group overflow-hidden border-none">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={600}
            height={450}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="mt-4 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-muted-foreground">{price}</p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button asChild variant="default" className="rounded-full bg-primary px-8 hover:bg-primary/90">
          <Link href={href}>Explore</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

