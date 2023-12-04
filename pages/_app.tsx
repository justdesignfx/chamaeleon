import type { AppProps } from "next/app"
import "../styles/global.scss"

import { QueryClient, QueryClientProvider } from "react-query"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import useSmoothScroll from "@/hooks/useSmoothScroll"
import { useModalStore } from "@/lib/store/modal"

import { CookiePopup } from "@/components/cookie-popup"
import { Modal } from "@/components/modal"
import { CustomEase, ScrollTrigger, gsap } from "@/lib/gsap"

const queryClient = new QueryClient()

if (typeof window !== "undefined") {
  // reset scroll position
  window.scrollTo(0, 0)
  window.history.scrollRestoration = "manual"
}

export default function App({ Component, pageProps }: AppProps) {
  const modalStore = useModalStore()
  useSmoothScroll()

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CustomEase)
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (localStorage.getItem("cookieAccepted")) return
    modalStore.setContent(<CookiePopup />)
  }, [])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Modal />
      </QueryClientProvider>
    </>
  )
}
