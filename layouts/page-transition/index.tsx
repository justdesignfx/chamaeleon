import "@madeinhaus/nextjs-page-transition/dist/index.css"

import PageTransition, { PageTransitionContext, useAsPathWithoutHash } from "@madeinhaus/nextjs-page-transition"
import { NextComponentType, NextPageContext } from "next"

type Props = {
  Component: NextComponentType<NextPageContext, any, any>
  pageProps: any
}

const PageTransitionLayout = ({ Component, pageProps }: Props) => {
  const key = useAsPathWithoutHash()

  return (
    <PageTransitionContext>
      <PageTransition as="div">
        <Component {...pageProps} key={key} />
      </PageTransition>
    </PageTransitionContext>
  )
}

export { PageTransitionLayout }
