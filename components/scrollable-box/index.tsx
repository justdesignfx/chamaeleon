// @ts-ignore
import { useFrame } from "@studio-freight/hamo"
import Lenis from "@studio-freight/lenis"
import cn from "clsx"
import { ReactNode, useEffect, useRef, useState } from "react"
import s from "./scrollable-box.module.scss"
import gsap from "gsap"

import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

type Props = {
  children: ReactNode
  className?: string
  infinite?: boolean
  reset?: boolean
}

export default function ScrollableBox({ children, className, infinite, reset }: Props) {
  const [lenis, setLenis] = useState<any>()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current) return
    if (!contentRef.current) return

    const lenis = new Lenis({
      wrapper: wrapperRef.current, // element which has overflow
      content: contentRef.current, // usually wrapper's direct child
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      infinite,
    })
    lenis.start()
    setLenis(lenis)

    // GSAP SCROLLTRIGGER INTEGRATION
    // lenis.on("scroll", ScrollTrigger.update)
    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000)
    // })
    // gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  useFrame((time: number) => {
    lenis?.raf(time)
  }, [])

  useEffect(() => {
    if (reset) {
      lenis?.scrollTo(0, { immediate: true })
    }
  }, [reset])

  return (
    <div className={s.wr}>
      <div className={cn(s.hi, className)} ref={wrapperRef}>
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  )
}
