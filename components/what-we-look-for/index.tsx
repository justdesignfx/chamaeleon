import React, { useRef } from "react"
import s from "./what-we-look-for.module.scss"

import { ScrollTrigger, gsap } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect, useMediaQuery } from "usehooks-ts"

import { Parallax } from "@/components/animations/parallax"
import { CardFloat } from "@/components/card-float"
import { CardFloatProps } from "@/types"
import { breakpoints } from "@/lib/utils"
import { ClientOnly } from "@/hocs/isomorphic"

const items: CardFloatProps[] = [
  {
    backgroundColor: "var(--nightly-woods)",
    color: "var(--greening)",
    title: "AWARE",
    desc: "Sharp & 360-degree vision, ability to see in all directions.",
    icon: {
      alignment: "tl",
      src: "/img/steampunk-chamaeleon-face.png",
      size: "md",
    },
  },
  {
    backgroundColor: "var(--nightly-woods)",
    color: "var(--greening)",
    title: "FLEXIBLE",
    desc: "Ability to rapidly and organically change.",
    icon: {
      alignment: "tr",
      src: "/img/papa-chamaeleon.png",
      size: "md",
    },
  },
  {
    backgroundColor: "var(--nightly-woods)",
    color: "var(--greening)",
    title: "BALANCED",
    desc: "Value aligned, IQ + EQ, not just one or the other.",
    icon: {
      alignment: "tl",
      src: "/img/brain.png",
      size: "md",
    },
  },
  {
    backgroundColor: "var(--nightly-woods)",
    color: "var(--greening)",
    title: "OBSESSED",
    desc: "Execution and delivery at the center.",
    icon: {
      alignment: "tr",
      src: "/img/trap.png",
      size: "md",
    },
  },
]

const WhatWeLookFor = () => {
  const tableRef = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile}px)`)
  console.log("isMobile", isMobile)

  // what we look for animations
  useIsomorphicLayoutEffect(() => {
    if (isMobile) return
    if (!tableRef.current) return

    const ctx = gsap.context(() => {
      gsap.set(".look-for", {
        scale: 0,
      })

      gsap.set([".dot-front", ".dot-back"], {
        scale: 1 / 100,
      })

      tl.current
        .to(".dot-back", {
          scale: 0,
        })
        .to(
          ".dot-front",
          {
            scale: 0.5,
          },
          "a"
        )
        .to(
          ".dot-front",
          {
            scale: 2,
          },
          "s"
        )
        .to(
          ".dot-back",
          {
            scale: 0,
          },
          "s"
        )
        .to(
          ".look-for",
          {
            scale: 1,
          },
          "s"
        )

      ScrollTrigger.create({
        animation: tl.current,
        id: "table",
        //
        markers: false,
        end: "bottom+=3000px top",
        trigger: tableRef.current,
        scrub: true,
        pin: true,
      })
    }, tableRef)

    return () => ctx.revert()
  }, [isMobile])

  return (
    <ClientOnly>
      <section className={s.whatWeLookFor} ref={tableRef}>
        <h2>WHAT WE BRING TO THE TABLE?</h2>

        <div className={s.grid}>
          {!isMobile && (
            <div className={cn(s.punch, "flex-center")}>
              <div className={cn(s.dot, "dot-back")}></div>
              <div className={cn(s.dot, "dot-front")}></div>
            </div>
          )}

          {!isMobile && (
            <div className={s.lookForC}>
              <h4 className={cn(s.lookFor, "look-for")}>
                WHAT WE <br /> LOOK FOR<span>?</span>
              </h4>
            </div>
          )}

          <div className={s.items}>
            <div className="flex-center-y">
              <h3>SPEED</h3>
              <p>Quick decision-making, enabled by more efficient and fact-based due diligence.</p>
            </div>
            <div className="flex-center-y">
              <h3>DEPTH</h3>
              <p>Support our portfolio in deep understanding of markets and trends.</p>
            </div>
            <div className="flex-center-y">
              <h3>NO BIAS</h3>
              <p>Source deals globally, extended by our analytic engines.</p>
            </div>
            <div className="flex-center-y">
              <h3>HUMANIST</h3>
              <p>Individuals matter, “all hands on deck” support in key moments.</p>
            </div>
          </div>
        </div>

        <div className={s.expectations}>
          {isMobile && (
            <div className={s.lookForC}>
              <h4 className={cn(s.lookFor, "look-for")}>
                WHAT WE <br /> LOOK FOR<span>?</span>
              </h4>
            </div>
          )}

          <div className={s.cards}>
            {items.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  {isMobile ? (
                    <CardFloat {...item} />
                  ) : (
                    <div>
                      <Parallax speedX={0} speedY={i % 2 === 0 ? (i + 1) * 0.1 : (i + 1) * 0.11} directionY={-1}>
                        <CardFloat {...item} />
                      </Parallax>
                    </div>
                  )}
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </section>
    </ClientOnly>
  )
}

export { WhatWeLookFor }
