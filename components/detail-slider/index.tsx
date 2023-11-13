import { ReactNode } from "react"
import s from "./detail-slider.module.scss"

import EmblaCarousel from "@/components/embla-carousel"
import IconArrow from "@/components/icons/icon-arrow"

type Props = {
  currentSlide?: number | null
  slides: ReactNode[]
}

const DetailSlider = (props: Props) => {
  return (
    <div className={s.detailSlider}>
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

export default DetailSlider
