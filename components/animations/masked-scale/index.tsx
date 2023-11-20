import { gsap } from "@/lib/gsap"
import { ReactNode, useRef } from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

type Props = {
  children: ReactNode
}

const MaskedScale = ({ children }: Props) => {
  const ref = useRef(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        scale: 1.1,
        scrollTrigger: {
          id: "masked-scale",
          markers: true,
          scrub: true,
          trigger: ref.current,
        },
      })
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  )
}

export default MaskedScale