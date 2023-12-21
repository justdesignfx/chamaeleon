import s from "./loading-screen.module.scss"

import { usePageTransitionState } from "@madeinhaus/nextjs-page-transition"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { PageTransitionPhase } from "@/constants"
import { useLenisStore } from "@/lib/store/lenis"

const LoadingScreen = () => {
  const { phase } = usePageTransitionState()

  const lenisStore = useLenisStore()

  useIsomorphicLayoutEffect(() => {
    console.log("phase", phase)

    // document.body.style.pointerEvents = "none"
    function scrollToTop() {
      lenisStore.setReset(true)

      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0 })
        window.scroll(0, 0)
      }
    }

    if (phase === PageTransitionPhase.IDLE) {
      document.body.style.pointerEvents = "auto"
    } else {
      document.body.style.pointerEvents = "none"
    }

    if (phase === PageTransitionPhase.APPEAR) {
      scrollToTop()
    }
  }, [phase])

  return (
    <div
      className={cn(s.loadingScreen, "flex-center", {
        [s.in]: phase === PageTransitionPhase.IN,
        [s.out]: phase === PageTransitionPhase.OUT,
        [s.idle]: phase === PageTransitionPhase.IDLE,
        [s.appear]: phase === PageTransitionPhase.APPEAR,
      })}
    ></div>
  )
}

export { LoadingScreen }
