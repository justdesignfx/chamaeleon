import { ReactNode } from "react"

import useSmoothScroll from "@/hooks/useSmoothScroll"
import { useLenisStore } from "@/lib/store/lenis"
import { useRouter } from "next/router"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

type Props = {
  children: ReactNode
}

const SmoothLayout = ({ children }: Props) => {
  console.log("lol")

  useSmoothScroll()
  const lenisStore = useLenisStore()
  const router = useRouter()

  useIsomorphicLayoutEffect(() => {
    function scrollToTop() {
      lenisStore.setReset(true)
    }

    router.events.on("routeChangeComplete", scrollToTop)

    return () => {
      router.events.off("routeChangeComplete", scrollToTop)
    }
  }, [])

  return <div>{children}</div>
}

export default SmoothLayout
