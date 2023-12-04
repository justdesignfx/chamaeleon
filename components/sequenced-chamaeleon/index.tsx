import { useRef, useState } from "react"
import s from "./sequence.module.scss"

import { ScrollTrigger, gsap } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { CustomImage } from "@/components/custom-image"

import b0 from "@/assets/img/sequence/bukalemun_1.png"
import b9 from "@/assets/img/sequence/bukalemun_10.png"
import b10 from "@/assets/img/sequence/bukalemun_11.png"
import b11 from "@/assets/img/sequence/bukalemun_12.png"
import b12 from "@/assets/img/sequence/bukalemun_13.png"
import b13 from "@/assets/img/sequence/bukalemun_14.png"
import b14 from "@/assets/img/sequence/bukalemun_15.png"
import b15 from "@/assets/img/sequence/bukalemun_16.png"
import b16 from "@/assets/img/sequence/bukalemun_17.png"
import b17 from "@/assets/img/sequence/bukalemun_18.png"
import b18 from "@/assets/img/sequence/bukalemun_19.png"
import b1 from "@/assets/img/sequence/bukalemun_2.png"
import b19 from "@/assets/img/sequence/bukalemun_20.png"
import b2 from "@/assets/img/sequence/bukalemun_3.png"
import b3 from "@/assets/img/sequence/bukalemun_4.png"
import b4 from "@/assets/img/sequence/bukalemun_5.png"
import b5 from "@/assets/img/sequence/bukalemun_6.png"
import b6 from "@/assets/img/sequence/bukalemun_7.png"
import b7 from "@/assets/img/sequence/bukalemun_8.png"
import b8 from "@/assets/img/sequence/bukalemun_9.png"

const bs = [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19]

const SequencedChamaeleon = () => {
  const ref = useRef(null)
  const [phase, setPhase] = useState(0)

  useIsomorphicLayoutEffect(() => {
    function setImgRecursively(progress: number, items: HTMLElement[], currentIndex: number) {
      const part = 1 / items.length

      if (currentIndex === items.length) {
        return
      }

      if (progress < part * (currentIndex + 1)) {
        setPhase(currentIndex)
      } else {
        setImgRecursively(progress, items, currentIndex + 1)
      }
    }

    const ctx = gsap.context((self) => {
      const selector = self.selector
      if (!selector) return

      ScrollTrigger.create({
        // once: true,
        id: "sequence",

        markers: false,
        scrub: true,
        start: `top+=25% center`,
        end: `bottom-=25% center`,
        trigger: ref.current,
        onUpdate: ({ progress }) => {
          setImgRecursively(progress, selector(".item"), phase)
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section className={cn(s.sequence, "boom")} ref={ref}>
      <div className={cn(s.container, "flex-center")}>
        {bs.map((item, i) => {
          return (
            <div className={cn(s.item, "item", { [s.active]: phase === i })} key={i}>
              <CustomImage src={item.src} alt="b" style={{ objectFit: "contain" }} height={1000} width={1000} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export { SequencedChamaeleon }
