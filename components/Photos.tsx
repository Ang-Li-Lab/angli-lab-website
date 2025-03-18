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
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-3xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {photosData.map((photo, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image className="self-center flex-shrink-0 -mt-12 bg-center bg-cover bg-gray-500 fill shadow-md" src={photo.imageUrl} alt="" />
                </CardContent>
                <CardFooter className="flex justify-center">
                  <p>{photo.description}</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}