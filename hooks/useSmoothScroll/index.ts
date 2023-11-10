import { useLenisStore } from "@/lib/store"
import Lenis from "@studio-freight/lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useRef, useState } from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
gsap.registerPlugin(ScrollTrigger)

const useSmoothScroll = () => {
  const [lenis, setLenis] = useState<Lenis | null>()
  const lenisStore = useLenisStore()

  const reqIdRef = useRef<ReturnType<typeof requestAnimationFrame>>()

  useIsomorphicLayoutEffect(() => {
    const animate = (time: DOMHighResTimeStamp) => {
      lenis?.raf(time)
      lenis?.on("scroll", () => ScrollTrigger.update())
      reqIdRef.current = requestAnimationFrame(animate)
    }
    reqIdRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(reqIdRef.current as number)
  }, [lenis])

  useIsomorphicLayoutEffect(() => {
    const lenis = new Lenis({
      // duration: 2, //change scroll speed
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // orientation: "vertical",
      // gestureOrientation: "vertical",
      // smoothWheel: true,
      // smoothTouch: false,
      // touchMultiplier: 2,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    })
    setLenis(lenis)

    // lenis.on('scroll', () => ScrollTrigger.update())

    return () => {
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (lenisStore.isStopped) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [lenisStore.isStopped])
}

export default useSmoothScroll
