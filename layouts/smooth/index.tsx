import { ReactNode } from "react"

import useSmoothScroll from "@/hooks/useSmoothScroll"

type Props = {
  children: ReactNode
}

const SmoothLayout = ({ children }: Props) => {
  useSmoothScroll()
  //   const lenisStore = useLenisStore()
  //   const router = useRouter()

  //   useIsomorphicLayoutEffect(() => {
  //     router.events.on("routeChangeComplete", () => {
  //       lenisStore.lenis?.scrollTo({
  //         offset: 0,
  //         duration: 0,
  //       })
  //     })
  //   }, [])

  return <div>{children}</div>
}

export default SmoothLayout
