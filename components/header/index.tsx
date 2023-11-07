import React, { useEffect, useRef, useState } from "react"
import s from "./header.module.scss"
import CustomImage from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"
import { routes } from "@/global"

import cn from "clsx"
import gsap from "gsap"
import LogoChamaeleon from "../icons/logo-chamaeleon"

type Props = {}

const Header = (props: Props) => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true, reversed: true })

      // gsap.set(".hamburger", {
      //   backgroundColor: "var(--nightly-woods)",
      //   color: "var(--forested-juniper)",
      // })

      // gsap.to(".hamburger", {
      //   color: "var(--nightly-woods)",
      //   backgroundColor: "var(--forested-juniper)",
      // })

      tl.from(".menu-bg", {
        duration: 0.3,
        opacity: 0,
        pointerEvents: "none",
      }).from(".menu", {
        duration: 0.3,
        yPercent: -100,
      })

      isOpen ? tl.play() : tl.reverse(1)
    }, ref)

    return () => {
      ctx.revert()
    }
  }, [isOpen])

  return (
    <header className={s.header} ref={ref}>
      <CustomLink href={routes.home.path} className={cn(s.logoC, "cursor-pointer")}>
        <LogoChamaeleon fill="var(--forestial)" />
      </CustomLink>

      <div className={cn(s.hamburger, ".hamburger", "flex-center", "cursor-pointer")} onClick={toggleMenu}>
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

      <div className={cn(s.menuBg, "menu-bg")} onClick={toggleMenu}></div>
    </header>
  )
}

export default Header
