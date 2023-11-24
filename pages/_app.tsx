import CookiePopup from "@/components/cookie-popup"
import Modal from "@/components/modal"
import useSmoothScroll from "@/hooks/useSmoothScroll"
import { useModalStore } from "@/lib/store/modal"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
import "../styles/global.scss"

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
    console.log(localStorage.getItem("cookieAccepted"))

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
