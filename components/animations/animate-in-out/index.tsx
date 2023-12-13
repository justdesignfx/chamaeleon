import React, { ReactNode, useRef } from "react"

import { useIsomorphicLayoutEffect } from "usehooks-ts"
import { gsap } from "@/lib/gsap"

import { usePageTransitionStore } from "@/lib/store/page-transition"

type Props = {
  children: ReactNode
  from: gsap.TweenVars
  to: gsap.TweenVars
  durationIn: number
  durationOut: number
  delay?: number
  delayOut?: number
  set?: gsap.TweenVars
  skipOutro?: boolean
}

const AnimateInOut = ({
  children,
  durationIn = 0,
  durationOut = 0,
  delay = 0,
  delayOut = 0,
  set,
  skipOutro = false,
  to,
  from,
}: Props) => {
  const { timeline } = usePageTransitionStore()
  const el = useRef(null)

  useIsomorphicLayoutEffect(() => {
    // intro animation
    if (set) {
      console.log("set")

      gsap.set(el.current, { ...set })
    }

    gsap.to(el.current, {
      ...to,
      delay: delay,
      duration: durationIn,
    })

    // outro animation
    if (!skipOutro) {
      console.log("outro")

      timeline?.add(
        gsap.to(el.current, {
          ...from,
          delay: delayOut,
          duration: durationOut,
        }),
        0
      )
    }
  }, [])

  return (
    <div
      ref={el}
      style={
        {
          position: "fixed",
          top: "0",
          right: "0",
          left: "0",
          bottom: "0",
          background: "var(--forested-juniper)",
          zIndex: "6000",
          pointerEvents: "none",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}

export default React.memo(AnimateInOut)
