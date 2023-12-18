import { ReactNode, useRef, useState } from "react"

import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { LoadingScreen } from "@/components/loading-screen"

type Props = {
  children: ReactNode
}

function PageTransitionOverlay({ children }: Props) {
  const el = useRef(null)
  const [displayChildren, setDisplayChildren] = useState(children)
  const [active, setActive] = useState(false)

  useIsomorphicLayoutEffect(() => {
    console.log("transition start")

    let timeout: NodeJS.Timeout

    if (children !== displayChildren) {
      setActive(true)

      timeout = setTimeout(() => {
        setDisplayChildren(children)
        setActive(false)
        console.log("transition end")
      }, 1000)
    }

    return () => clearTimeout(timeout)
  }, [children])

  return (
    <div ref={el}>
      <LoadingScreen />
      {displayChildren}
    </div>
  )
}

export { PageTransitionOverlay }
