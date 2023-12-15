import { ReactNode } from "react"

import useSmoothScroll from "@/hooks/useSmoothScroll"
import { useLenisStore } from "@/lib/store/lenis"
import { useRouter } from "next/router"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

type Props = {
  children: ReactNode
}

const SmoothLayout = ({ children }: Props) => {
  useSmoothScroll()
  const lenisStore = useLenisStore()
  const router = useRouter()

  useIsomorphicLayoutEffect(() => {
    router.events.on("routeChangeComplete", () => {
      lenisStore.lenis?.scrollTo({
        offset: 0,
        duration: 0,
      })
    })
  }, [])

  return <div>{children}</div>
}

export default SmoothLayout
