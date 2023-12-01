import { useRef } from "react"
import s from "./modal.module.scss"

import { gsap } from "@/lib/gsap"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { useLenisStore } from "@/lib/store/lenis"
import { useModalStore } from "@/lib/store/modal"

const Modal = () => {
  const ref = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))
  const { isOpen, content, close } = useModalStore()
  const lenisStore = useLenisStore()

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current.to(ref.current, {
        duration: 0.3,
        autoAlpha: 1,
      })
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!tl.current) return
    isOpen ? tl.current.play() : tl.current.reverse()
    lenisStore.setIsStopped(isOpen)
  }, [isOpen])

  return (
    <div className={s.modal} onClick={close} ref={ref}>
      {/* <div className={s.close} onClick={close}>
        <IconClose fill="var(--greening)" />
      </div> */}
      <div onClick={(e) => e.stopPropagation()}>{content}</div>
    </div>
  )
}

export default Modal
