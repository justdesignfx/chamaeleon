import { LoadingScreen } from "@/components/loading-screen"
import { ReactNode, memo, useRef, useState } from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

type Props = {
  children: ReactNode
}

function PageTransition({ children }: Props) {
  const el = useRef(null)
  const [displayChildren, setDisplayChildren] = useState(children)
  const [active, setActive] = useState(false)

  useIsomorphicLayoutEffect(() => {
    console.log(children)
    let timeout: NodeJS.Timeout

    if (children !== displayChildren) {
      setActive(true)

      timeout = setTimeout(() => {
        setDisplayChildren(children)
        setActive(false)
      }, 1000)
    }

    return () => clearTimeout(timeout)
  }, [children])

  return (
    <div ref={el}>
      <LoadingScreen loading={active} />
      {displayChildren}
    </div>
  )
}

export { PageTransition }
