import { useRef, useState } from "react"
import s from "./header.module.scss"

import cn from "clsx"
import { EASE, gsap } from "@/lib/gsap"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { CustomLink } from "@/components/custom-link"
import LogoChamaeleon from "@/components/icons/logo-chamaeleon"
import { useLenisStore } from "@/lib/store/lenis"
import { routes } from "@/constants"

const Header = () => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const tl = useRef<gsap.core.Timeline | null>(null)
  const lenisStore = useLenisStore()

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true })

      tl.current
        .to(
          ".hamburger",
          {
            ease: EASE,
            backgroundColor: "var(--forested-juniper)",
            color: "var(--nightly-woods)",
            duration: 0,
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

  useIsomorphicLayoutEffect(() => {
    if (!tl.current) return
    isOpen ? tl.current.play() : tl.current.reverse()
    lenisStore.setIsStopped(isOpen)
  }, [isOpen])

  function handleMenu() {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className={s.header} ref={ref}>
      <CustomLink href={`/${routes.home.path}`} className={cn(s.logoC, "cursor-pointer")}>
        <LogoChamaeleon fill="var(--forestial)" />
      </CustomLink>

      <div className={cn(s.hamburger, "hamburger", "flex-center", "cursor-pointer")} onClick={handleMenu}>
        {isOpen ? "CLOSE" : "MENU"}
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

      <div className={cn(s.menuBg, "menu-bg")} onClick={handleMenu}></div>
    </header>
  )
}

export default Header
