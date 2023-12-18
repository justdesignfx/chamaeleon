import { ReactNode } from "react"

import useSmoothScroll from "@/hooks/useSmoothScroll"

type Props = {
  children: ReactNode
}

const SmoothLayout = ({ children }: Props) => {
  useSmoothScroll()

  return <>{children}</>
}

export { SmoothLayout }
