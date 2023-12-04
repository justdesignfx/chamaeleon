import type { AppProps } from "next/app"
import "../styles/global.scss"

import { QueryClient, QueryClientProvider } from "react-query"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import useSmoothScroll from "@/hooks/useSmoothScroll"
import { useModalStore } from "@/lib/store/modal"

import { CookiePopup } from "@/components/cookie-popup"
import { LoadingScreen } from "@/components/loading-screen"
import { Modal } from "@/components/modal"
import { CustomEase, ScrollTrigger, gsap } from "@/lib/gsap"
import { useRouter } from "next/router"
import { useState } from "react"

const queryClient = new QueryClient()

if (typeof window !== "undefined") {
  // reset scroll position
  window.scrollTo(0, 0)
  window.history.scrollRestoration = "manual"
}

export default function App({ Component, pageProps }: AppProps) {
  const modalStore = useModalStore()
  const router = useRouter()
  useSmoothScroll()

  const [loading, setLoading] = useState(false)

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CustomEase)
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (localStorage.getItem("cookieAccepted")) return
    modalStore.setContent(<CookiePopup />)
  }, [])

  useIsomorphicLayoutEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true)
    })
  }, [])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Modal />
        <LoadingScreen loading={loading} setLoading={setLoading} />
      </QueryClientProvider>
    </>
  )
}
