import { ReactNode, useCallback, useRef, useState } from "react"
import s from "./footer-reveal.module.scss"

import { gsap, ScrollTrigger } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

type Props = {
  children: ReactNode
}

const FooterReveal = ({ children }: Props) => {
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)
  const tl = useRef(gsap.timeline({ paused: true }))
  const [height, setHeight] = useState(0)

  const refElement = useCallback((node: any) => {
    if (node === null) return
    setHeight(node.getBoundingClientRect().height)
  }, [])

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current
        .to(
          ".wrapper",
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
        start: "top bottom",
        end: () => `top bottom-=${height}`,
        scrub: true,
        markers: true,
      })
    }, ref)

    return () => ctx.revert()
  }, [height, q])

  return (
    <div className={s.footerReveal} ref={ref}>
      <div className={cn(s.wrapper, "wrapper")} ref={(node) => refElement(node)}>
        {children}
      </div>
      <div className={cn(s.overlay, "overlay")}></div>
    </div>
  )
}

export default FooterReveal
