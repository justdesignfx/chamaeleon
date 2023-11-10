import { ReactNode, useRef } from "react"

import gsap from "gsap"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

type Props = {
  children: ReactNode
}

const Reveal = ({ children }: Props) => {
  const ref = useRef(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".transform", {
        autoAlpha: 0,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
        rotateX: 12,
      })

      gsap.to(".transform", {
        autoAlpha: 1,
        rotateX: 0,
        scrollTrigger: {
          id: "reveal",
          markers: true,
          trigger: ref.current,
        },
      })
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={ref} style={{ width: "inherit", height: "inherit" }}>
      <div className="transform">{children}</div>
    </div>
  )
}

export default Reveal
