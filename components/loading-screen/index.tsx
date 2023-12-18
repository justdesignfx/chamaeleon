import s from "./loading-screen.module.scss"

import { usePageTransitionState } from "@madeinhaus/nextjs-page-transition"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { PageTransitionPhase } from "@/constants"
import { useLenisStore } from "@/lib/store/lenis"
import { ScrollTrigger } from "@/lib/gsap"

const LoadingScreen = () => {
  const { phase } = usePageTransitionState()

  const lenisStore = useLenisStore()

  useIsomorphicLayoutEffect(() => {
    function scrollToTop() {
      lenisStore.setReset(true)
    }

    if (phase === PageTransitionPhase.APPEAR) {
      scrollToTop()
    }

    if (phase === PageTransitionPhase.IDLE) {
      ScrollTrigger.refresh()
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
