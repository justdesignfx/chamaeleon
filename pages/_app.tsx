import type { AppProps } from "next/app"
import "../styles/global.scss"

import { QueryClient, QueryClientProvider } from "react-query"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { CookiePopup } from "@/components/cookie-popup"
import { Modal } from "@/components/modal"

import useSmoothScroll from "@/hooks/useSmoothScroll"
import { useModalStore } from "@/lib/store/modal"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const modalStore = useModalStore()
  // const router = useRouter()
  useSmoothScroll()

  // const [loading, setLoading] = useState(false)

  useIsomorphicLayoutEffect(() => {
    if (localStorage.getItem("cookieAccepted")) return
    modalStore.setContent(<CookiePopup />)
  }, [])

  // useIsomorphicLayoutEffect(() => {
  //   router.events.on("routeChangeStart", () => {
  //     setLoading(true)
  //   })
  // }, [])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Modal />
        {/* <LoadingScreen loading={loading} setLoading={setLoading} /> */}
      </QueryClientProvider>
    </>
  )
}
