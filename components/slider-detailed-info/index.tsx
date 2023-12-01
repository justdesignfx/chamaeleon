import { ReactNode } from "react"
import s from "./slider-detailed-info.module.scss"

import { EmblaCarousel } from "@/components/embla-carousel"
import IconArrow from "@/components/icons/icon-arrow"

type Props = {
  currentSlide?: number | null
  slides: ReactNode[]
}

const SliderDetailedInfo = (props: Props) => {
  return (
    <div className={s.sliderDetailedInfo}>
      <EmblaCarousel
        options={{
          startIndex: props.currentSlide ?? 0,
        }}
        scrollTo={props.currentSlide}
        slides={props.slides}
        prevButton={
          <div className={s.btn}>
            <IconArrow fill="var(--greening)" rotate={180} />
          </div>
        }
        nextButton={
          <div className={s.btn}>
            <IconArrow fill="var(--greening)" />
          </div>
        }
      />
    </div>
  )
}

export { SliderDetailedInfo }
