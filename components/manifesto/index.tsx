import { useEffect, useRef, useState } from "react"
import s from "./manifesto.module.scss"

import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { Reveal } from "@/components/animations/reveal"
import { CardFloat } from "@/components/card-float"
import { Marquee } from "@/components/marquee"

import { ScrollTrigger, gsap } from "@/lib/gsap"
import { useLenisStore } from "@/lib/store/lenis"
import { CardFloatProps } from "@/types"

const manifestoItems: CardFloatProps[] = [
  {
    backgroundColor: "var(--greening)",
    color: "var(-nightly-woods)",
    title: "Typically Coming In At Series Seed Or Series A",
    icon: {
      alignment: "tl",
      src: "/img/drops.png",
      size: "sm",
    },
  },
  {
    backgroundColor: "var(--nightly-woods)",
    color: "var(--greening)",
    title: "Prefer To Lead Or Co-Lead, But We Play Nice With Others :)",
    icon: {
      alignment: "tr",
      src: "/img/rock.png",
      size: "md",
    },
  },
  {
    backgroundColor: "var(--electric-energy)",
    color: "var(-nightly-woods)",
    title: "First Checks Between 1-5 Million USD",
    icon: {
      alignment: "bl",
      src: "/img/bale.png",
      size: "md",
    },
  },
  {
    backgroundColor: "var(--greening)",
    color: "var(--nightly-woods)",
    title: "Primarily, Focused On US And Europe, But Will Invest Globally",
    icon: {
      alignment: "br",
      src: "/img/earth.png",
      size: "sm",
    },
  },
  {
    backgroundColor: "var(--nightly-woods)",
    color: "var(--greening)",
    title: "Broad Vertical Focus, But Key Principles Are:",
  },
  {
    backgroundColor: "var(--electric-energy)",
    color: "var(--nightly-woods)",
    title: "Product-Led Companies, Not “Just” Core-Technology Or IP",
    icon: {
      alignment: "br",
      src: "/img/steampunk-chamaeleon-face.png",
      size: "md",
    },
  },
  {
    backgroundColor: "var(--greening)",
    color: "var(--nightly-woods)",
    title: "Clear End-User Flows That We As Users Could Test, Even In B2B",
    icon: {
      alignment: "tl",
      src: "/img/doc.png",
      size: "md",
    },
  },
  {
    backgroundColor: "var(--nightly-woods)",
    color: "var(--greening)",
    title: "Preference For Technology Differentiated",
    icon: {
      alignment: "br",
      src: "/img/steampunk-chamaeleon.png",
      size: "lg",
    },
  },
]

const manifestoView = {
  long: (
    <div className={s.long}>
      <p>
        For an industry that is fueled by technology, its innovations and the sometimes stratospheric returns on its
        investments, venture capital - in particular in early-stage - is an industry surprisingly lacking in technology,
        at its core. Although the operating models and playbooks used to source and do due diligence on start-ups - in
        our opinion, the two most core activities in VC - have evolved over time, there are very few impactful
        innovations around the core technology stacks that VC firms actually develop or bring together. Therefore, we
        are bringing a full-stack approach to VC investing with our own early-stage investing technology stack at the
        center of everything we do. We will also use these platforms to create value to portfolio companies and our own
        investors/LPs.
      </p>
      <p>
        This partnership has invested in companies like App Annie, DraftKings, Gusto, Kakao, Outsystems, Robinhood,
        Rubrik, Virta Health, Cloudflare, Ometria, among many other “household” names. We have led and managed 5 VC
        funds between us with enviable returns, including top 2 to 5 percentile funds. We have created verifiable impact
        at-scale as operators in such household names as NCSOFT, McKinsey & Co, GSM Association, SK Telecom, Sonae. We
        have jumped off a cliff before and started our own companies… and we are doing it all over again, because we
        don’t rest on our laurels, because we have a fundamental new way of looking and executing in this space, because
        we love and feel blessed by being in venture capital… and because, deep down, we just want to do this, together.
      </p>
      <p>
        Last, but most certainly not the least, we are big believers that as much as technology will augment us… as much
        as our insights and instincts will support our decisions, people are still at the center of all of this. We have
        built unique networks of truly astonishing and generous people, not just in the geographies where we will have
        our offices, but around the world, where we will operate. All of us have worked in at least 3 different
        continents and will continue bringing to entrepreneurs all the resources that we have access to as individuals,
        as a firm, but also from our broader ecosystem of investors/LPs, advisors, friends. We will continue bringing a
        humanistic values-based approach to this profession (we don’t call it a job, around here): we will continue
        treating entrepreneurs’ start-ups as their babies… because they are; when we are tough, we will continue being
        thoughtful, fair and charitable.
      </p>
      <small>GREAT PEOPLE + GREAT TECH</small>
    </div>
  ),
  tldr: (
    <div className={s.tldr}>
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
  ),
}

type Props = {}

const Manifesto = (props: Props) => {
  const manifestoRef = useRef(null)
  const { lenis } = useLenisStore()
  const [currentManifestoView, setCurrentManifestoView] = useState<"long" | "tldr">("tldr")

  // manifesto dual view animations
  useIsomorphicLayoutEffect(() => {
    const duration = 0.2

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        markers: false,
        id: "manifesto",
        trigger: manifestoRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(".sticky-btn", {
            autoAlpha: 1,
            duration,
          })
        },
        onLeave: () => {
          gsap.to(".sticky-btn", {
            autoAlpha: 0,
            duration,
          })
        },
        onEnterBack: () => {
          gsap.to(".sticky-btn", {
            autoAlpha: 1,
            duration,
          })
        },
        onLeaveBack: () => {
          gsap.to(".sticky-btn", {
            autoAlpha: 0,
            duration,
          })
        },
      })
    }, manifestoRef)

    return () => ctx.revert()
  }, [])

  function handleManifestoView(view: typeof currentManifestoView) {
    setCurrentManifestoView(view)
    lenis?.scrollTo(".manifesto", {
      duration: 1,
    })
  }

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [currentManifestoView])

  return (
    <>
      <section className={cn(s.manifesto, "manifesto", "flex-center-y")} ref={manifestoRef}>
        <div className={s.marquee}>
          <Marquee duration={30}>
            <>
              <h5>MANIFESTO</h5>
              <h5>MANIFESTO</h5>
              <h5>MANIFESTO</h5>
              <h5>MANIFESTO</h5>
            </>
          </Marquee>
        </div>
        <h3>Today, we announce the creation of Chamaeleon and the launch of its first fund.</h3>
        {manifestoView[currentManifestoView]}
      </section>

      <div className={cn(s.stickyBtn, "sticky-btn", [s[currentManifestoView]])}>
        <div
          className={cn("flex-center", "cursor-pointer", { [s.active]: currentManifestoView === "tldr" })}
          onClick={() => handleManifestoView("tldr")}
        >
          TL;DR
        </div>
        <div
          className={cn("flex-center", "cursor-pointer", { [s.active]: currentManifestoView === "long" })}
          onClick={() => handleManifestoView("long")}
        >
          LONG
        </div>
      </div>
    </>
  )
}

export { Manifesto }
