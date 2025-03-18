"use client"

import Image from "next/image"
import { StaticImageData } from "next/image";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
 import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface PhotosProps {
  photosData: {
    description: string,
    imageUrl: string | StaticImageData,
  }[];
}

export default function PhotosComp({ photosData }: PhotosProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {photosData.map((photo, index) => (
          <CarouselItem key={index}>
            <Card className="w-full">
              <CardContent className="relative w-full h-[50vh] mb-4 mt-4">
                <Image className="object-contain object-center" src={photo.imageUrl} fill alt="" />
              </CardContent>
              <CardFooter className="grid grid-cols-3 items-center text-center">
                <div />
                <p className="text-center">{photo.description}</p>
                <div className="justify-self-end">{index + 1} of {photosData.length}</div>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}