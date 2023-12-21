import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const PageTransitionLayout = ({ children }: Props) => {
  return (
    <>
      {/* <ClientOnly>
        <LoadingScreen />
      </ClientOnly> */}

      {children}
    </>
  )
}

export { PageTransitionLayout }
