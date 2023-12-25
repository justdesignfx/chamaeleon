import { useRef, useState } from "react"
import s from "./header.module.scss"

import { gsap } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { CustomLink } from "@/components/custom-link"
import LogoChamaeleon from "@/components/icons/logo-chamaeleon"

import { routes } from "@/constants"
import { useCursorStore } from "@/lib/store/cursor"
import { useLenisStore } from "@/lib/store/lenis"

const Header = () => {
  const ref = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))
  const lenisStore = useLenisStore()
  const [isOpen, setIsOpen] = useState(false)
  const cursorStore = useCursorStore()

  function toggleMenu() {
    setIsOpen((prev) => !prev)
  }

  // gsap timeline
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current
        .to(
          ".btn",
          {
            ease: "power3.inOut",
            xPercent: 100,
          },
          "s"
        )
        .to(
          ".menu-bg",
          {
            ease: "power3.inOut",
            duration: 0.8,
            opacity: 0.9,
            pointerEvents: "auto",
          },
          "s"
        )
        .to(
          ".menu",
          {
            ease: "power3.inOut",
            duration: 0.8,
            opacity: 1,
            y: 0,
            pointerEvents: "auto",
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
    if (tl.current.isActive()) return

    if (isOpen) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }

    lenisStore.setIsStopped(isOpen)
  }, [isOpen])

  // hide on scroll
  useIsomorphicLayoutEffect(() => {
    if (!lenisStore.lenis) return

    const ctx = gsap.context(() => {
      lenisStore.lenis?.on("scroll", (e: any) => {
        if (e.direction === 1 && lenisStore.lenis?.animatedScroll >= 100) {
          if (gsap.getProperty(ref.current, "opacity") === 1) {
            gsap.to(ref.current, {
              opacity: 0,
              duration: 0.2,
              onStart: () => {
                gsap.to(ref.current, {
                  pointerEvents: "none",
                })
              },
            })
          }
        } else {
          if (gsap.getProperty(ref.current, "opacity") === 0) {
            gsap.to(ref.current, {
              opacity: 1,
              duration: 0.2,
              onComplete: () => {
                gsap.to(ref.current, {
                  pointerEvents: "auto",
                })
              },
            })
          }
        }
      })
    }, ref)

    return () => ctx.revert()
  }, [lenisStore])

  return (
    <header className={s.header} ref={ref}>
      <CustomLink
        href={`/${routes.home.path}`}
        className={cn(s.logoC, "cursor-pointer")}
        ariaLabel={routes.home.ariaLabel}
      >
        <LogoChamaeleon fill="var(--forestial)" />
      </CustomLink>

      <div className={cn(s.hamburger, "hamburger", "cursor-pointer")} onClick={toggleMenu}>
        <div className={cn(s.btn, s.close, "flex-center", "btn")}>CLOSE</div>
        <div className={cn(s.btn, s.open, "flex-center", "btn")}>MENU</div>
      </div>

      <div
        className={cn(s.menu, "menu", "flex-center")}
        onMouseEnter={() => {
          cursorStore.setCursor("menu")
        }}
        onMouseLeave={() => {
          cursorStore.setCursor("default")
        }}
      >
        <nav>
          <ul>
            {Object.values(routes).map((value, i) => {
              if (value.name === "home") {
                return
              }
              return (
                <li key={i} onClick={() => setIsOpen(false)}>
                  <CustomLink
                    className={cn(s.navItem, "cursor-pointer", cursorStore.type !== "default" && "cursor-none")}
                    href={`/${value.path}`}
                    onMouseEnter={() => {
                      cursorStore.setCursor("clickDark")
                    }}
                    onMouseLeave={() => {
                      cursorStore.setCursor("menu")
                    }}
                    ariaLabel={value.ariaLabel}
                  >
                    <span className={s.circle}></span>
                    {value.ui}
                  </CustomLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className={cn(s.menuBg, "menu-bg")} onClick={toggleMenu}></div>
    </header>
  )
}

export { Header }
