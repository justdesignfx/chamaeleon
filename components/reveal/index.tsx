import React, { ReactNode, useEffect, useRef } from "react"

import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

type Props = {
  children: ReactNode
}

const Reveal = ({ children }: Props) => {
  const ref = useRef(null)

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.set(ref.current, {
        autoAlpha: 0,
      })

      gsap.to(ref.current, {
        autoAlpha: 1,
        scrollTrigger: {
          id: "reveal",
          markers: true,
          trigger: ref.current,
          start: "center center+=25%",
        },
      })
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={ref} style={{ width: "inherit", height: "inherit" }}>
      {children}
    </div>
  )
}

export default Reveal
