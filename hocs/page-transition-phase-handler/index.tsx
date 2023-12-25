import React, { ReactNode } from "react"

import { usePageTransitionState } from "@madeinhaus/nextjs-page-transition"

type Props = {
  children: ReactNode
}

const PageTransitionPhaseHandler = ({ children }: Props) => {
  const { phase } = usePageTransitionState()

  console.log(phase)

  return <>{children}</>
}

export { PageTransitionPhaseHandler }
