import { useModalStore } from "@/lib/store/modal"
import { useRef } from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
import s from "./modal.module.scss"
import { useLenisStore } from "@/lib/store/lenis"
import { gsap } from "@/lib/gsap"

const Modal = () => {
  const ref = useRef(null)
  const tl = useRef<gsap.core.Timeline | null>(null)
  const { isOpen, setIsOpen, content } = useModalStore()
  const lenisStore = useLenisStore()

  const close = () => setIsOpen(false)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true })

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
      <div className={s.close} onClick={close}>
        X
      </div>
      <div onClick={(e) => e.stopPropagation()}>{content}</div>
    </div>
  )
}

export default Modal
