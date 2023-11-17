import { useCallback, useRef, useState } from "react"
import s from "./footer.module.scss"

import cn from "clsx"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import CustomImage from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"
import { routes } from "@/constants"

const Footer = () => {
  const ref = useRef<any>(null)
  const tl = useRef(gsap.timeline({ paused: true }))
  const [height, setHeight] = useState(0)

  const refElement = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      console.log(self)

      tl.current
        .to(
          ref.current,
          {
            ease: "none",
            yPercent: 0,
          },
          "s"
        )
        .to(
          ".overlay",
          {
            ease: "none",
            opacity: 0,
          },
          "s"
        )

      ScrollTrigger.create({
        animation: tl.current,
        id: "footer",
        trigger: ref.current,
        start: "center bottom",
        end: () => `center bottom-=${height}`,
        scrub: true,
        markers: true,
      })
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [height])

  useIsomorphicLayoutEffect(() => {
    ScrollTrigger.refresh()
  })

  return (
    <footer
      className={s.footer}
      ref={(node) => {
        ref.current = node
        refElement(node)
      }}
    >
      <div className={cn(s.wrapper, "wrapper")}>
        <nav>
          {Object.values(routes).map((value) => {
            if (value.name === "home") {
              return
            }
            return (
              <CustomLink className={cn(s.navItem, "cursor-pointer")} key={value.name} href={`/${value.path}`}>
                {value.ui}
              </CustomLink>
            )
          })}
        </nav>
        <div className={s.copyright}>
          <small>
            Headquarters in Bay Area (US) <br />
            Offices in Europe
          </small>
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
