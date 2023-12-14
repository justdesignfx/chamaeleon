import { usePageTransitionStore } from "@/lib/store/page-transition"
import { ReactNode, useRef, useState } from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

type Props = {
  children: ReactNode
}

export default function TransitionLayout({ children }: Props) {
  const [displayChildren, setDisplayChildren] = useState(children)
  const { timeline } = usePageTransitionStore()
  const el = useRef(null)

  useIsomorphicLayoutEffect(() => {
    console.log("changed")

    if (children !== displayChildren) {
      console.log(timeline?.duration())

      if (timeline?.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children)
      } else {
        timeline?.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline?.seek(0).pause().clear()
          setDisplayChildren(children)
        })
      }
    }
  }, [children])

  return <div ref={el}>{displayChildren}</div>
}
