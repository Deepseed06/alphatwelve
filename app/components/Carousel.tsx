'use client'

import {SliderImages} from "@/constants"
import * as React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight, Pause, Play  } from "lucide-react"

import useEmblaCarousel from 'embla-carousel-react'

export default function Component() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [isPaused, setIsPaused] = React.useState(false)
  const [api, setApi] = React.useState<any>()

  
  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", onSelect)
  }, [api, onSelect])

  React.useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      if (api) {
        api.scrollNext()
      }
      
    }, 5000) 

    return () => clearInterval(timer)
  }, [api, isPaused])
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


  React.useEffect(() => {
    if (!emblaApi) return
  
    onSelect()
    emblaApi.on('select', onSelect)
    
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <Card className="w-full max-w-3xl mx-auto ">
      <CardContent className="p-0">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {SliderImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[3/2] h-64 w-full">
                  <Image
                    src={image.image}
                    alt={image.alt}
                    fill
                    className="object-cover"
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
                        className={`w-4 h-2 rounded-lg ${
                          idx === currentIndex ? 'bg-white' : 'bg-black'
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
        
      </CardContent>
    </Card>
  )
}