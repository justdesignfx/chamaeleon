import { useRef, useState } from "react"
import s from "./header.module.scss"

import cn from "clsx"
import gsap from "gsap"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { CustomLink } from "@/components/custom-link"
import LogoChamaeleon from "@/components/icons/logo-chamaeleon"
import { routes } from "@/global"
import { useLenisStore } from "@/lib/store/lenis"

const Header = () => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const tl = useRef<gsap.core.Timeline | null>(null)
  const uiStore = useLenisStore()

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true })

      tl.current
        .to(".menu-bg", {
          duration: 0.3,
          opacity: 0.9,
          pointerEvents: "auto",
        })
        .to(".menu", {
          duration: 0.3,
          opacity: 1,
          y: 0,
        })
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!tl.current) return
    isOpen ? tl.current.play() : tl.current.reverse()
    uiStore.setIsStopped(isOpen)
  }, [isOpen])

  function handleMenu() {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className={s.header} ref={ref}>
      <CustomLink href={`/${routes.home.path}`} className={cn(s.logoC, "cursor-pointer")}>
        <LogoChamaeleon fill="var(--forestial)" />
      </CustomLink>

      <div className={cn(s.hamburger, ".hamburger", "flex-center", "cursor-pointer")} onClick={handleMenu}>
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
