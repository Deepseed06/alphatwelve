'use client'

import * as React from 'react'
import Image from 'next/image'
import { SliderImages } from '@/constants'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from "lucide-react"



export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on('select', onSelect)
    
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  React.useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      } else {
        emblaApi.scrollTo(0)
      }
    }, 5000)

    return () => clearInterval(autoplay)
  }, [emblaApi])

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = React.useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-0">
        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {SliderImages.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative aspect-[3/2] w-full md:h-[275px]">
                  <Image
                    src={image.image}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={scrollPrev}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={scrollNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {SliderImages.map((_, idx) => (
              <button
                key={idx}
                className={`w-4 h-2 rounded-lg transition-colors ${
                  idx === currentIndex ? 'bg-primary' : 'bg-background/80'
                }`}
                onClick={() => scrollTo(idx)}
                aria-label={`Go to image ${idx + 1}`}
                aria-current={idx === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
        <div className="p-4 absolute -mt-36  ">
          <div className='pr-16'>
          <p className='text-white'>Latest News & Updates</p>
          <p className="text-left text-xs text-white " aria-live="polite">
          Turpis interdum nunc varius ornare dignissim pretium.
           Massa ornare quis aliquet sed vitae. Sed velit nisi, 
           fermentum erat. Fringilla purus, erat fringilla 
          tincidunt quisque non. Pellentesque in ut tellus.
          </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}