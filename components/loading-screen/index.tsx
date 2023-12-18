import s from "./loading-screen.module.scss"

import { usePageTransitionState } from "@madeinhaus/nextjs-page-transition"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { PageTransitionPhase } from "@/constants"
import { useLenisStore } from "@/lib/store/lenis"

const LoadingScreen = () => {
  const { phase } = usePageTransitionState()
  const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js

  const lenisStore = useLenisStore()

  useIsomorphicLayoutEffect(() => {
    function scrollToTop() {
      lenisStore.setReset(true)

      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0 })
      }
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
