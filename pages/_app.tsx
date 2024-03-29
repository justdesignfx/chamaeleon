import type { AppProps } from "next/app"
import "../styles/global.scss"

import { QueryClient, QueryClientProvider } from "react-query"

import { CookiePopup } from "@/components/cookie-popup"
import { CustomCursor } from "@/components/custom-cursor"
import { CustomHead } from "@/components/custom-head"
import { Header } from "@/components/header"
import { Modal } from "@/components/modal"

import { ClientOnly } from "@/hocs/isomorphic"
import { SmoothLayout } from "@/layouts/smooth"
import { ScrollTrigger } from "@/lib/gsap"

const queryClient = new QueryClient()

if (typeof window !== "undefined") {
  ScrollTrigger.clearScrollMemory()
  window.history.scrollRestoration = "manual"
}

export default function App({ Component, pageProps }: AppProps) {
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
