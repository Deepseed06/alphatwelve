'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {SliderImages} from "@/constants"


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SliderImages.length) % SliderImages.length)
  }



  return (
    <div className="relative w-lg max-w-4xl mx-auto overflow-hidden mt-4">
      
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SliderImages.map((slide, index) => {
          return (
            <div key={index} className="  flex-shrink-0">
              <div className="relative w-[612px] h-[220px]">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={375}
                  height={375}
                  objectFit="cover"
                  className='lg:h-[375px]'
                
                  priority={index === currentIndex}
                />
               <div className="absolute top-[60%] inset-0 bg-gradient-to-t from-black/60 to-transparent flex  p-4">
                <div className="text-left text-white max-w-2xl">
                  <h2 className="text-[16px] font-bold mb-2">{slide.title}</h2>
                  <p className="text-xs">{slide.description}</p>
                </div>
              </div>
              </div>
            </div>
          )})
        }
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white border-white hover:bg-white hover:text-black rounded-full"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white border-white hover:bg-white hover:text-black rounded-full"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {SliderImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel;