import Modal from "@/components/modal"
import useSmoothScroll from "@/hooks/useSmoothScroll"
import type { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import "../styles/global.scss"

const queryClient = new QueryClient()

if (typeof window !== "undefined") {
  // reset scroll position
  window.scrollTo(0, 0)
  window.history.scrollRestoration = "manual"
}

export default function App({ Component, pageProps }: AppProps) {
  useSmoothScroll()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Modal />
      </QueryClientProvider>
    </>
  )
}
