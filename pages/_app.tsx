import type { AppProps } from "next/app"
import "../styles/global.scss"

// import { useRouter } from "next/router"
import { QueryClient, QueryClientProvider } from "react-query"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { CookiePopup } from "@/components/cookie-popup"
import { CustomHead } from "@/components/custom-head"
import { Header } from "@/components/header"
import { Modal } from "@/components/modal"

import CustomCursor from "@/components/custom-cursor"
import { ClientOnly } from "@/hocs/isomorphic"
import useSmoothScroll from "@/hooks/useSmoothScroll"
// import { useLenisStore } from "@/lib/store/lenis"
import { useModalStore } from "@/lib/store/modal"
import { ScrollTrigger, gsap } from "@/lib/gsap"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const modalStore = useModalStore()
  // const lenisStore = useLenisStore()
  // const router = useRouter()
  useSmoothScroll()

  useIsomorphicLayoutEffect(() => {
    ScrollTrigger.defaults({ markers: process.env.NEXT_PUBLIC_NODE_ENV === "development" })
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.clearScrollMemory()

    // reset scroll position
    window.scrollTo(0, 0)
    window.history.scrollRestoration = "manual"
  })

  useIsomorphicLayoutEffect(() => {
    if (localStorage.getItem("cookieAccepted")) return
    modalStore.setContent(<CookiePopup />)
  }, [])

  // useIsomorphicLayoutEffect(() => {
  //   router.events.on("routeChangeComplete", () => {
  //     lenisStore.lenis?.scrollTo({
  //       offset: 0,
  //       duration: 0,
  //     })
  //   })
  // }, [])

  return (
    <>
      <CustomHead
        canonical={"https://chamaeleon.vc"}
        title="Chamaeleon"
        description="Data-driven Silicon Valley  based venture capital firm investing globally in early stage startups"
        keywords={["venture capital", "startup", "investment", "chamaeleon", "silicon walley", "finance", "technology"]}
      />
      <QueryClientProvider client={queryClient}>
        {/* <ClientOnly>
          <FadeInOut durationIn={1} durationOut={1} delay={1}>
            <div></div>
          </FadeInOut>
        </ClientOnly> */}

        <Header />
        <Component {...pageProps} />
        <Modal />
        <ClientOnly>
          <CustomCursor />
        </ClientOnly>
      </QueryClientProvider>
    </>
  )
}
