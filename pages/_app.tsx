import Modal from "@/components/modal"
import useSmoothScroll from "@/hooks/useSmoothScroll"

import type { AppProps } from "next/app"
import "../styles/global.scss"
import { gsap, ScrollTrigger } from "@/lib/gsap"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.defaults({ markers: process.env.NEXT_PUBLIC_NODE_ENV === "development" })

  // reset scroll position
  window.scrollTo(0, 0)
  window.history.scrollRestoration = "manual"
}

export default function App({ Component, pageProps }: AppProps) {
  useSmoothScroll()

  return (
    <>
      <Component {...pageProps} />
      <Modal />
    </>
  )
}
