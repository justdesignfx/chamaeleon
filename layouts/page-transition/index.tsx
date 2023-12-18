import { ReactNode } from "react"

import { LoadingScreen } from "@/components/loading-screen"

type Props = {
  children: ReactNode
}

const PageTransitionLayout = ({ children }: Props) => {
  return (
    <>
      <LoadingScreen />
      {children}
    </>
  )
}

export { PageTransitionLayout }
