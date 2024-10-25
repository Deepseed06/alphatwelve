'use client'

import * as React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SliderImages } from '@/constants'




export default function Component() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [api, setApi] = React.useState<any>()

  const onSelect = React.useCallback((selectedIndex: number) => {
    console.log(selectedIndex)
    setCurrentIndex(Math.min(Math.max(selectedIndex, 0), SliderImages.length - 1))
  }, [])
 

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("selectedScrollSnap", onSelect)
  }, [api, onSelect])

  const handlePrevious = React.useCallback(() => {
    if (api) {
      api.scrollPrev()
    }
  }, [api])

  const handleNext = React.useCallback(() => {
    if (api) {
      api.scrollNext()
    }
  }, [api])

  const goToSlide = React.useCallback((index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }, [api])
console.log(currentIndex)
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-0">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {SliderImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[3/2] lg:h-[375px] h-[310px] w-full">
                  <Image
                    src={image.image}
                    alt={image.alt}
                    fill
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-background/80"
                      onClick={handlePrevious}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-background/80"
                      onClick={handleNext}
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {SliderImages.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-2 h-2 rounded-lg ${
                          idx === currentIndex ? 'bg-primary' : 'bg-background/80'
                        }`}
                        onClick={() => goToSlide(idx)}
                        aria-label={`Go to image ${idx + 1}`}
                        aria-current={idx === currentIndex ? 'true' : 'false'}
                      />
                      
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="p-4 absolute -mt-36 ">
          <p className='text-white'>Latest News & Updates</p>
          <p className="text-left text-xs text-white " aria-live="polite">
          Turpis interdum nunc varius ornare dignissim pretium.
           Massa ornare quis aliquet sed vitae. Sed velit nisi, 
           fermentum erat. Fringilla purus, erat fringilla 
          tincidunt quisque non. Pellentesque in ut tellus.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}