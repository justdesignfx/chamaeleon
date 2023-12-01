import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from "embla-carousel-react"
import React, { ReactNode, useCallback, useEffect, useState } from "react"
import s from "./embla.module.scss"

import { NextButton, PrevButton } from "./buttons"

type PropType = {
  scrollTo?: number | null
  slideSpacing?: number
  slides: ReactNode[]
  options?: EmblaOptionsType
  nextButton?: React.ReactNode
  prevButton?: React.ReactNode
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (props.scrollTo === null || props.scrollTo === undefined) return

    scrollTo(props.scrollTo)
  }, [props.scrollTo, scrollTo])

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div
      className={s.embla}
      style={
        {
          "--slide-spacing": `${props.slideSpacing}px`,
        } as React.CSSProperties
      }
    >
      <div className={s.emblaViewport} ref={emblaRef}>
        <div className={s.emblaContainer}>
          {slides.map((item, i) => (
            <div className={s.emblaSlide} key={i}>
              <div className={s.emblaSlideContent}>{item}</div>
            </div>
          ))}
        </div>
      </div>

      {props.prevButton && (
        <div className={s.emblaButtons}>
          <PrevButton className={s.prev} onClick={scrollPrev} disabled={prevBtnDisabled}>
            {props.prevButton}
          </PrevButton>
        </div>
      )}

      {props.nextButton && (
        <div className={s.emblaButtons}>
          <NextButton className={s.next} onClick={scrollNext} disabled={nextBtnDisabled}>
            {props.nextButton}
          </NextButton>
        </div>
      )}
    </div>
  )
}

export { EmblaCarousel }
