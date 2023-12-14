import { useEffect, useRef } from "react"
import s from "./custom-cursor.module.scss"

import { gsap } from "@/lib/gsap"
import { useMouse } from "@uidotdev/usehooks"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { useCursorStore } from "@/lib/store/cursor"
import useMousePosition from "@/hooks/useMousePosition"

const CustomCursor = () => {
  const ref = useRef(null)
  const cursorStore = useCursorStore()
  const mouse = useMousePosition()

  // control screen display
  useIsomorphicLayoutEffect(() => {
    const handleMouseEnter = () => {
      if (!cursorStore.visible) cursorStore.toggleVisibility()
    }

    const handleMouseLeave = () => {
      if (cursorStore.visible) cursorStore.toggleVisibility()
    }

    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorStore])

  useEffect(() => {
    if (!cursorStore.visible) return

    const ctx = gsap.context(() => {
      //   gsap.quickSetter(ref.current, "x", `${mouse.x}px`)
      //   gsap.quickSetter(ref.current, "y", `${mouse.y}px`)

      gsap.to(ref.current, {
        x: mouse.x ? mouse.x - 9 : 0,
        y: mouse.y ? mouse.y - 9 : 0,
        duration: 0,
      })
    }, ref)

    return () => ctx.revert()
  }, [mouse, cursorStore])

  return (
    <div
      className={cn(s.cursor, {
        [s.visible]: cursorStore.visible,
      })}
      ref={ref}
    >
      <div className={cn(s.c, [s[cursorStore.type]])}></div>
    </div>
  )
}

export default CustomCursor
