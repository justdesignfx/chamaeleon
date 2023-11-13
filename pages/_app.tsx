import Modal from "@/components/modal"
import useSmoothScroll from "@/hooks/useSmoothScroll"

import type { AppProps } from "next/app"
import "../styles/global.scss"

export default function App({ Component, pageProps }: AppProps) {
  useSmoothScroll()

  return (
    <>
      <Component {...pageProps} />
      <Modal />
    </>
  )
}
