import { useRef, useState } from "react"
import s from "./header.module.scss"

import { EASE, gsap } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { CustomLink } from "@/components/custom-link"
import LogoChamaeleon from "@/components/icons/logo-chamaeleon"
import { routes } from "@/constants"
import { useLenisStore } from "@/lib/store/lenis"

const Header = () => {
  const ref = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))
  const lenisStore = useLenisStore()
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen((prev) => !prev)
  }

  // gsap timeline
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true })

      tl.current
        .to(
          ".btn",
          {
            ease: EASE,
            xPercent: 100,
          },
          "s"
        )
        .to(
          ".menu-bg",
          {
            ease: EASE,
            duration: 0.4,
            opacity: 0.9,
            pointerEvents: "auto",
          },
          "s"
        )
        .to(
          ".menu",
          {
            ease: EASE,
            duration: 0.4,
            opacity: 1,
            y: 0,
          },
          "s"
        )
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [])

  // toggle logic
  useIsomorphicLayoutEffect(() => {
    if (!tl.current) return
    isOpen ? tl.current.play() : tl.current.reverse()
    lenisStore.setIsStopped(isOpen)
  }, [isOpen])

  // hide on scroll
  useIsomorphicLayoutEffect(() => {
    if (!lenisStore.lenis) return

    const ctx = gsap.context(() => {
      lenisStore.lenis?.on("scroll", (e: any) => {
        if (e.direction === 1) {
          if (gsap.getProperty(".hamburger", "opacity") === 1) {
            gsap.to(".hamburger", {
              opacity: 0,
              duration: 0.2,
            })
          }
        } else {
          if (gsap.getProperty(".hamburger", "opacity") === 0) {
            gsap.to(".hamburger", {
              opacity: 1,
              duration: 0.2,
            })
          }
        }
      })
    }, ref)

    return () => ctx.revert()
  }, [lenisStore])

  return (
    <header className={s.header} ref={ref}>
      <CustomLink href={`/${routes.home.path}`} className={cn(s.logoC, "cursor-pointer")}>
        <LogoChamaeleon fill="var(--forestial)" />
      </CustomLink>

      <div className={cn(s.hamburger, "hamburger", "cursor-pointer")} onClick={toggleMenu}>
        <div className={cn(s.btn, s.close, "flex-center", "btn")}>CLOSE</div>
        <div className={cn(s.btn, s.open, "flex-center", "btn")}>MENU</div>
      </div>

      <div className={cn(s.menu, "menu", "flex-center")}>
        <nav>
          {Object.values(routes).map((value) => {
            if (value.name === "home") {
              return
            }
            return (
              <CustomLink className={cn(s.navItem, "cursor-pointer")} key={value.name} href={`/${value.path}`}>
                <span className={s.circle}></span>
                {value.ui}
              </CustomLink>
            )
          })}
        </nav>
      </div>

      <div className={cn(s.menuBg, "menu-bg")} onClick={toggleMenu}></div>
    </header>
  )
}

export default Header
