import { PageTransitionPhaseHandler } from "@/hocs/page-transition-phase-handler"
import PageTransition, { PageTransitionContext, useAsPathWithoutHash } from "@madeinhaus/nextjs-page-transition"
import { NextComponentType, NextPageContext } from "next"

import "@madeinhaus/nextjs-page-transition/dist/index.css"

type Props = {
  Component: NextComponentType<NextPageContext, any, any>
  pageProps: any
}

const PageTransitionLayout = ({ Component, pageProps }: Props) => {
  const key = useAsPathWithoutHash()

  return (
    <PageTransitionContext>
      <PageTransition inPhaseDuration={800} outPhaseDuration={800}>
        <Component {...pageProps} key={key} />
      </PageTransition>
    </PageTransitionContext>
  )
}

export { PageTransitionLayout }
