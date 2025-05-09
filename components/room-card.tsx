import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { isValidElement, ReactElement } from "react"

interface RoomCardProps {
  title: string
  alt: string
  price: string | ReactElement
  image: StaticImageData | string
  href: string
}

export function RoomCard({ title, alt, price, image, href }: RoomCardProps) {
  return (
    <Link
      href={href}
      title={`Explore ${title}`}
      className="max-w-[500px] w-full"
    >
      <Card className="group overflow-hidden border-none rounded-none max-w-[500px]">
        <CardHeader className="p-0">
          <div className="aspect-[4/3] relative max-h-[300px] overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              fill
              alt={alt}
              title={title}
              className="h-full w-full object-cover transition-[opacity,transform]  duration-300 group-hover:scale-105 hover:opacity-40"
            />
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <h3 className="mt-4 font-playfair text-xl font-semibold tracking-tight">
            {title}
          </h3>
          {isValidElement(price) ? (
            price
          ) : (
            <p className="mt-2 text-muted-foreground">{price}</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Button
            asChild
            variant="default"
            className="rounded-full bg-primary px-8 hover:bg-primary/90"
          >
            <p>Explore</p>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
