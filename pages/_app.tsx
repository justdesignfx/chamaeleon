import type { AppProps } from "next/app"
import "../styles/global.scss"

import { useRouter } from "next/router"
import { QueryClient, QueryClientProvider } from "react-query"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { CookiePopup } from "@/components/cookie-popup"
import { Modal } from "@/components/modal"
import { CustomHead } from "@/components/custom-head"

import useSmoothScroll from "@/hooks/useSmoothScroll"
import { useLenisStore } from "@/lib/store/lenis"
import { useModalStore } from "@/lib/store/modal"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  const modalStore = useModalStore()
  const lenisStore = useLenisStore()
  const router = useRouter()
  useSmoothScroll()

  // const [loading, setLoading] = useState(false)

  useIsomorphicLayoutEffect(() => {
    if (localStorage.getItem("cookieAccepted")) return
    modalStore.setContent(<CookiePopup />)
  }, [])

  useIsomorphicLayoutEffect(() => {
    router.events.on("routeChangeComplete", () => {
      lenisStore.lenis?.scrollTo({
        offset: 0,
        duration: 0,
      })
    })
  }, [])

  return (
    <>
      <CustomHead
        canonical={"https://chamaeleon.vc"}
        title="Chamaeleon"
        description="Data-driven Silicon Valley  based venture capital firm investing globally in early stage startups"
        keywords={["venture capital", "startup", "investment", "chamaeleon", "silicon walley", "finance", "technology"]}
      />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Modal />
        {/* <LoadingScreen loading={loading} setLoading={setLoading} /> */}
      </QueryClientProvider>
    </>
  )
}
