import React, { useRef } from "react"
import s from "./what-we-look-for.module.scss"

import { ScrollTrigger, gsap } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect, useMediaQuery } from "usehooks-ts"

import { Parallax } from "@/components/animations/parallax"
import { Reveal } from "@/components/animations/reveal"
import { CardFloat } from "@/components/card-float"

import { breakpoints } from "@/lib/utils"
import { CardFloatProps } from "@/types"

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
  const pinRef = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile}px)`)

  // what we look for animations
  useIsomorphicLayoutEffect(() => {
    if (isMobile) return
    if (!pinRef.current) return

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
        markers: false,
        animation: tl.current,
        id: "table",
        start: "center center",
        trigger: pinRef.current,
        scrub: true,
        pin: true,
      })
    }, pinRef)

    return () => ctx.revert()
  }, [isMobile])

  return (
    <section className={s.whatWeLookFor}>
      <div className={s.pinC} ref={pinRef}>
        <h2>WHAT WE BRING TO THE TABLE?</h2>

        <div className={s.table}>
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
                  <Reveal>
                    <CardFloat {...item} />
                  </Reveal>
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
  )
}

export { WhatWeLookFor }
