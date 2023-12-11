import { gsap } from "@/lib/gsap"
import { ReactNode, useRef } from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

type Props = {
  children: ReactNode
  directionX?: 1 | -1
  directionY?: 1 | -1
  speedX?: number
  speedY?: number
}

const Parallax = ({ children, speedX = 1, speedY = 1, directionX = 1, directionY = 1 }: Props) => {
  const ref = useRef(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        xPercent: () => 100 * speedX * directionX,
        yPercent: () => 100 * speedY * directionY,
        scrollTrigger: {
          markers: false,
          id: "parallax",
          scrub: true,
          trigger: ref.current,
        },
      })
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [directionX, directionY, speedX, speedY])

  return (
    <div ref={ref} className="inherit-dims">
      {children}
    </div>
  )
}

export { Parallax }
