import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'

import 'swiper/css'

export const Carousel = (props: SwiperProps) => (
  <Swiper
    {...props}
    className={`w-[100%] h-[100%] z-0 ${props.className}`}
  />
)

export const CarouselItem = SwiperSlide
