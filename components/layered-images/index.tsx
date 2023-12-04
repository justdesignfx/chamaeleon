import { useRef } from "react"
import s from "./layered-images.module.scss"

import { gsap, ScrollTrigger } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { CustomImage } from "@/components/custom-image"

import curtain from "@/public/img/kin-curtain.png"
import lunch from "@/public/img/kin-lunch.png"
import trip from "@/public/img/kin-trip.jpg"

const LayeredImages = () => {
  const layeredImagesRef = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))

  // layered images animation
  useIsomorphicLayoutEffect(() => {
    if (!layeredImagesRef.current) return

    const ctx = gsap.context((self) => {
      const selector = self.selector
      if (!selector) return

      selector(".layer").map((item: HTMLElement, i: number) => {
        if (i === 0) return
        gsap.set(item, {
          yPercent: 150 + i * 10,
          scale: 1 + i * 0.025,
        })
      })

      selector(".scale").map((item: HTMLElement, i: number) => {
        if (i === 0) return

        gsap.set(item, {
          scale: 2,
        })
      })

      tl.current = gsap.timeline({ paused: true })

      tl.current
        .to(
          selector(".layer")[1],
          {
            yPercent: 0,
            scale: 1,
          },
          "b"
        )
        .to(
          selector(".scale")[1],
          {
            scale: 1,
          },
          "b"
        )
        .to(
          selector(".layer")[2],
          {
            yPercent: 0,
            scale: 1,
          },
          "c"
        )
        .to(
          selector(".scale")[2],
          {
            scale: 1,
          },
          "c"
        )

      ScrollTrigger.create({
        id: "layered-images",
        animation: tl.current,
        start: "center center",
        end: "bottom+=2000px top",
        trigger: layeredImagesRef.current,
        scrub: true,
        pin: true,

        markers: false,
      })
    }, layeredImagesRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={s.layeredImages} ref={layeredImagesRef}>
      <div className={cn(s.layerC, "layer-c")}>
        <div className={cn(s.imgC, "layer")}>
          <div className={cn(s.scale, "scale", "inherit-dims")}>
            <CustomImage src={trip} alt="People Hanging Out" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
      <div className={cn(s.layerC, "layer-c")}>
        <div className={cn(s.imgC, "layer")}>
          <div className={cn(s.scale, "scale", "inherit-dims")}>
            <CustomImage src={curtain} alt="People Hanging Out" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
      <div className={cn(s.layerC, "layer-c")}>
        <div className={cn(s.imgC, "layer")}>
          <div className={cn(s.scale, "scale", "inherit-dims")}>
            <CustomImage src={lunch} alt="People Hanging Out" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { LayeredImages }
