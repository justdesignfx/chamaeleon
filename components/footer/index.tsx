import { useRef } from "react"
import s from "./footer.module.scss"

import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
import { useMeasure } from "@uidotdev/usehooks"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

import { CustomLink } from "@/components/custom-link"
import { routes } from "@/global"
import CustomImage from "@/components/custom-image"

const Footer = () => {
  const ref = useRef<any>(null)
  const [footerMeasureRef, { height: footerHeight }] = useMeasure()
  const tl = useRef<gsap.core.Timeline | null>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true })

      tl.current
        .to(
          ".wrapper",
          {
            yPercent: 0,
          },
          "s"
        )
        .to(
          ".overlay",
          {
            opacity: 1,
          },
          "s"
        )

      ScrollTrigger.create({
        animation: tl.current,
        id: "footer",
        trigger: ref.current,
        start: "center bottom",
        end: () => `center bottom-=${footerHeight}`,
        scrub: true,
        markers: true,
      })
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [footerHeight])

  //   useIsomorphicLayoutEffect(() => {
  //     ScrollTrigger.refresh()
  //   }, [footerHeight])

  return (
    <footer
      className={s.footer}
      ref={(node) => {
        ref.current = node
        footerMeasureRef(node)
      }}
    >
      <div className={cn(s.wrapper, "wrapper")}>
        <nav>
          {Object.values(routes).map((value) => {
            return (
              <CustomLink className={cn(s.navItem, "cursor-pointer")} key={value.name} href={`/${value.path}`}>
                {value.ui}
              </CustomLink>
            )
          })}
        </nav>
        <div className={s.copyright}>
          <small>Headquarters in Bay Area (US)</small>
          <small>Terms & Conditions</small>
          <small>All rights reserved © Chamaeleon LLC 2021</small>
        </div>
        <h6 className={s.punch}>
          LOOKING FOR INVESTMENT<span>?</span>
        </h6>
        <div className={s.social}></div>
        <div className={s.imgC}>
          <CustomImage src="/img/coin-stack.png" alt="Coin Stack" />
        </div>
        <div className={cn(s.overlay, "overlay")}></div>
      </div>
    </footer>
  )
}

export default Footer
