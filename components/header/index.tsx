import { useRef, useState } from "react"
import s from "./header.module.scss"

import cn from "clsx"
import gsap from "gsap"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { CustomLink } from "@/components/custom-link"
import { routes } from "@/global"

import LogoChamaeleon from "@/components/icons/logo-chamaeleon"

const Header = () => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".menu-bg", {
        opacity: 0,
        pointerEvents: "none",
      })

      gsap.set(".menu", {
        yPercent: -100,
      })
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to(".menu-bg", {
          duration: 0.3,
          autoAlpha: 0.9,
          pointerEvents: "auto",
        })

        gsap.to(".menu", {
          autoAlpha: 0.9,
          duration: 0.3,
          yPercent: 0,
        })
      } else {
        gsap.to(".menu-bg", {
          autoAlpha: 0,
          duration: 0.3,
          pointerEvents: "none",
        })

        gsap.to(".menu", {
          autoAlpha: 0,
          duration: 0.3,
          yPercent: -100,
        })
      }
    }, ref)

    return () => {
      ctx.revert()
    }
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
            return (
              <CustomLink className={cn(s.navItem, "cursor-pointer")} key={value.name} href={`/${value.path}`}>
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
