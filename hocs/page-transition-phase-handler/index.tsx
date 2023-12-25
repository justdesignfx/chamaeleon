import React, { ReactNode } from "react"

import { usePageTransitionState } from "@madeinhaus/nextjs-page-transition"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
import { useRouter } from "next/router"
import { gsap } from "@/lib/gsap"

type Props = {
  children: ReactNode
}

const PageTransitionPhaseHandler = ({ children }: Props) => {
  const router = useRouter()
  const { phase } = usePageTransitionState()

  useIsomorphicLayoutEffect(() => {
    function disableBodyClick() {
      gsap.set("body", {
        pointerEvents: "none",
      })
    }

    function enableBodyClick() {
      gsap.set("body", {
        pointerEvents: "auto",
      })
    }

    router.events.on("routeChangeStart", disableBodyClick)

    if (phase === "IDLE" && gsap.getProperty("body", "pointerEvents") === "none") {
      enableBodyClick()
    }

    return () => {
      router.events.off
    }
  }, [phase])

  return <>{children}</>
}

export { PageTransitionPhaseHandler }
