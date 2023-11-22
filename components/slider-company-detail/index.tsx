import React, { ReactNode } from "react"
import s from "./slider-company-detail.module.scss"

import EmblaCarousel from "@/components/embla-carousel"
import IconArrow from "@/components/icons/icon-arrow"

type Props = {
  currentSlide?: number | null
  slides: ReactNode[]
}
const SliderCompanyDetail = (props: Props) => {
  return (
    <div className={s.sliderCompanyDetail}>
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

export default SliderCompanyDetail
