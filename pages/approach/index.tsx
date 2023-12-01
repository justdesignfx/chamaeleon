import React, { useRef } from "react"
import s from "./approach.module.scss"

import cn from "clsx"

import { CustomImage } from "@/components/custom-image"
import { CardFloat } from "@/components/card-float"
import { Reveal } from "@/components/animations/reveal"

import { DefaultLayout } from "@/layouts/default"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
import { ScrollTrigger, gsap } from "@/lib/gsap"
import { Parallax } from "@/components/animations/parallax"
import { CardFloatProps } from "@/types"

import intro1 from "@/public/img/earth-1.jpg"
import intro2 from "@/public/img/earth-2.jpg"
import earth from "@/public/img/world.gif"

const manifestoItems: CardFloatProps[] = [
  {
    backgroundColor: "var(--nightly-woods)",
    color: "var(--forested-juniper)",
    title: "PRODUCT DRIVEN",
    desc: "Product-led, not just “core-tech”",
    icon: {
      alignment: "tl",
      src: "/img/dart.png",
      size: "sm",
    },
    rotate: -6,
  },
  {
    backgroundColor: "var(--greening)",
    color: "var(--nightly-woods)",
    title: "EARLY STAGE",
    desc: "$1 to 5 million first check.",
    icon: {
      alignment: "tr",
      src: "/img/newborn.png",
      size: "md",
    },
    rotate: 5,
  },
  {
    backgroundColor: "var(--electric-energy)",
    color: "var(-nightly-woods)",
    title: "MULTI- GEOGRAPHY",
    desc: "Innovation happens everywhere.",
    icon: {
      alignment: "br",
      src: "/img/map.png",
      size: "md",
    },
    rotate: -8,
  },
]

const lookForItems: CardFloatProps[] = [
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
    rotate: -7,
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
    rotate: 8,
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
    rotate: -16,
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
    rotate: 5,
  },
]

const Approach = () => {
  const tableRef = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))

  // what we look for animations
  useIsomorphicLayoutEffect(() => {
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
            delay: -0.05,
            scale: 1,
          },
          "s"
        )

      ScrollTrigger.create({
        animation: tl.current,
        id: "table",
        // markers: true,
        trigger: tableRef.current,
        scrub: true,
        pin: true,
      })
    }, tableRef)

    return () => ctx.revert()
  }, [])

  return (
    <DefaultLayout>
      <section className={s.intro}>
        <h1>START-UPS ARE CHANGING. IT'S TIME FOR VENTURE CAPITALS TO CHANGE.</h1>
      </section>

      <section className={cn(s.earth, "island")}>
        <div className={s.imgs}>
          <div className={s.transform}>
            <Parallax speedX={0} speedY={0.3} directionY={-1}>
              <div className={s.imgC}>
                <CustomImage src={intro1} alt="People" style={{ objectFit: "cover" }} priority={true} />
              </div>
            </Parallax>
          </div>

          <div className={s.transform}>
            <Parallax speedX={0} speedY={0.4} directionY={-1}>
              <div className={s.imgC}>
                <CustomImage src={intro2} alt="People" style={{ objectFit: "cover" }} priority={true} />
              </div>
            </Parallax>
          </div>
        </div>
        <h2>WE ARE PASSIONATE EARLY STAGE INVESTORS...</h2>
        <div className={s.values}>
          <div>
            <h3>OBJECTIVE</h3>
            <p>Honest, ethical and truthful; fact based and data driven decisions.</p>
          </div>
          <div>
            <h3>GLOBAL</h3>
            <p>Based in Silicon Valley & Europe, proven international track record.</p>
          </div>
          <div>
            <h3>VERSATILE</h3>
            <p>Operators at scale, entrepreneurs, experienced investors.</p>
          </div>
        </div>
        <div className={s.imgC}>
          <CustomImage src={earth} alt="Chamaeleon Logomark" style={{ objectFit: "contain" }} />
        </div>
      </section>

      <section className={s.conditions}>
        <h2>WE INVEST IN PROJECTS THAT ARE...</h2>
        <div className={s.cards}>
          {manifestoItems.map((item, i) => {
            return (
              <div key={i}>
                <Reveal>
                  <CardFloat {...item} />
                </Reveal>
              </div>
            )
          })}
        </div>
      </section>

      <section className={s.table} ref={tableRef}>
        <h2>WHAT WE BRING TO THE TABLE?</h2>
        <div className={s.grid}>
          <div className={cn(s.punch, "flex-center")}>
            <div className={cn(s.dot, "dot-back")}></div>
            <div className={cn(s.dot, "dot-front")}></div>
          </div>

          <div className={s.lookForC}>
            <h4 className={cn(s.lookFor, "look-for")}>
              WHAT WE <br /> LOOK FOR<span>?</span>
            </h4>
          </div>

          <div className={s.items}>
            <div>
              <h3>SPEED</h3>
              <p>Quick decision-making, enabled by more efficient and fact-based due diligence.</p>
            </div>
            <div>
              <h3>DEPTH</h3>
              <p>Support our portfolio in deep understanding of markets and trends.</p>
            </div>
            <div>
              <h3>NO BIAS</h3>
              <p>Source deals globally, extended by our analytic engines.</p>
            </div>
            <div>
              <h3>HUMANIST</h3>
              <p>Individuals matter, “all hands on deck” support in key moments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.expectations}>
        <div className={s.cards}>
          {lookForItems.map((item, i) => {
            return (
              <div key={i}>
                <Parallax speedX={0} speedY={i % 2 === 0 ? (i + 1) * 0.1 : (i + 1) * 0.11} directionY={-1}>
                  <CardFloat {...item} />
                </Parallax>
              </div>
            )
          })}
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Approach
