import type { AppProps } from "next/app"
import "../styles/global.scss"

import { QueryClient, QueryClientProvider } from "react-query"

import { CookiePopup } from "@/components/cookie-popup"
import { CustomCursor } from "@/components/custom-cursor"
import { CustomHead } from "@/components/custom-head"
import { Header } from "@/components/header"
import { Modal } from "@/components/modal"

import { ClientOnly } from "@/hocs/isomorphic"
import SmoothLayout from "@/layouts/smooth"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  // useIsomorphicLayoutEffect(() => {
  //   // gsap.registerPlugin(ScrollTrigger)
  //   // ScrollTrigger.clearScrollMemory()
  //   // reset scroll position
  //   window.scrollTo(0, 0)
  //   window.history.scrollRestoration = "manual"
  // }, [])

  return (
    <>
      <CustomHead
        canonical={"https://chamaeleon.vc"}
        title="Chamaeleon"
        description="Data-driven Silicon Valley  based venture capital firm investing globally in early stage startups"
        keywords={[
          "venture capital",
          "startup",
          "investment",
          "chamaeleon",
          "silicon walley",
          "finance",
          "technology",
          "wholistic",
        ]}
      />
      <QueryClientProvider client={queryClient}>
        <SmoothLayout>
          <Header />
          <Component {...pageProps} />
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
