import { ReactNode, useRef, useState } from "react"

import { gsap } from "@/lib/gsap"

import { usePageTransitionStore } from "@/lib/store/page-transition"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

type Props = {
  children: ReactNode
}

export default function TransitionLayout({ children }: Props) {
  const [displayChildren, setDisplayChildren] = useState(children)
  const { timeline, background } = usePageTransitionStore()
  const el = useRef(null)

  useIsomorphicLayoutEffect(() => {
    if (!timeline) return

    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children)
      } else {
        timeline.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline.seek(0).pause().clear()
          setDisplayChildren(children)
        })
      }
    }
  }, [children])

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      background,
      duration: 1,
    })
  }, [background])

  return <div ref={el}>{displayChildren}</div>
}
