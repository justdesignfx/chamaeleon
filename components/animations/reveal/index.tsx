import { ReactNode, useRef } from "react"

import { gsap, ScrollTrigger } from "@/lib/gsap"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

type Props = {
  children: ReactNode
}

const Reveal = ({ children }: Props) => {
  const ref = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".transform", {
        autoAlpha: 0,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
        rotateX: 20,
      })

      tl.current.to(".transform", {
        duration: 1,
        ease: "back.out",
        autoAlpha: 1,
        rotateX: 0,
      })

      ScrollTrigger.create({
        once: true,
        animation: tl.current,
        id: "reveal",
        markers: false,
        trigger: ref.current,
        start: "top center+=35%",
      })
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={ref} style={{ width: "inherit", height: "inherit" }}>
      <div className="transform">{children}</div>
    </div>
  )
}

export default Reveal
