import { ReactNode } from "react"

import { LoadingScreen } from "@/components/loading-screen"
import { ClientOnly } from "@/hocs/isomorphic"

type Props = {
  children: ReactNode
}

const PageTransitionLayout = ({ children }: Props) => {
  return (
    <>
      <ClientOnly>
        <LoadingScreen />
      </ClientOnly>

      {children}
    </>
  )
}

export { PageTransitionLayout }
