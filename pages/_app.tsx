import type { AppProps } from "next/app"
import "../styles/global.scss"

import PageTransition, { PageTransitionContext, useAsPathWithoutHash } from "@madeinhaus/nextjs-page-transition"
import "@madeinhaus/nextjs-page-transition/dist/index.css"
import { QueryClient, QueryClientProvider } from "react-query"

import { CookiePopup } from "@/components/cookie-popup"
import { CustomCursor } from "@/components/custom-cursor"
import { CustomHead } from "@/components/custom-head"
import { Header } from "@/components/header"
import { Modal } from "@/components/modal"

import { ClientOnly } from "@/hocs/isomorphic"
import { SmoothLayout } from "@/layouts/smooth"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const key = useAsPathWithoutHash()

  return (
    <>
      <CustomHead
        canonical={"https://chamaeleon.vc"}
        title="Chamaeleon"
        description="Data-driven Silicon Valley  based venture capital firm investing globally in early stage startups"
        keywords={[
          "venture capital",
          "investment",
          "chamaeleon",
          "startup",
          "silicon walley",
          "finance",
          "technology",
          "wholistic investemnts",
          "mantis",
          "kin",
        ]}
      />
      <QueryClientProvider client={queryClient}>
        <SmoothLayout>
          <Header />
          <PageTransitionContext>
            <PageTransition as="div" outPhaseDuration={0}>
              <Component {...pageProps} key={key} />
            </PageTransition>
          </PageTransitionContext>
        </SmoothLayout>
        <CookiePopup />
        <Modal />
        <ClientOnly>
          <CustomCursor />
        </ClientOnly>
      </QueryClientProvider>
    </>
  )
}
