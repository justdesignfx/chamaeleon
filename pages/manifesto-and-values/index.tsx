import { useRef } from "react"
import s from "./manifesto-and-values.module.scss"

import { gsap, ScrollTrigger } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { MaskedScale } from "@/components/animations/masked-scale"
import { Reveal } from "@/components/animations/reveal"
import { CustomImage } from "@/components/custom-image"
import { Manifesto } from "@/components/manifesto"
import { SequencedChamaeleon } from "@/components/sequenced-chamaeleon"

import { DefaultLayout } from "@/layouts/default"
import { routes } from "@/constants"
import { ClientOnly } from "@/hocs/isomorphic"

import lunch from "@/public/img/manifesto-lunch.jpg"
import c1 from "@/public/img/manifesto-c-1.png"
import c2 from "@/public/img/manifesto-c-2.png"
import c3 from "@/public/img/manifesto-c-3.png"
import papa from "@/public/img/papa-chamaeleon.png"

const gridItems = [
  {
    title: "Intellectual Honesty",
    desc: "Stand by one’s beliefs and opinions, debate, but open to change one’s mind, when given strong argumentation and/or facts; admit when you are wrong.",
  },
  {
    title: "LOW EGO & GET STUFF DONE ATTITUDE",
    desc: "Whatever needs to get done will get done, by whoever has the capability and bandwidth to do it; all-hands on deck means “all hands”.",
  },
  {
    title: '"Falling Upwards"',
    desc: "Belief that adversity makes us stronger.",
  },
  {
    title: "Obligation to Dissent",
    desc: "If you see something wrong, you need to call it.",
  },
  {
    title: "Dissent & Commit",
    desc: "Strategic discussion, but once decision is made, even those who disagree, commit to successful execution.",
  },
  {
    title: "Feed on Healthy Obsessions",
    desc: "Obsession with our entrepreneurs, their products and markets, always with an eye on product-market fit.",
  },
  {
    title: "Fact & Data Based",
    desc: "Love for the truth and in creating a level playing field for all entrepreneurs, in particular through data, analyses and facts.",
  },
  {
    title: "People Centric",
    desc: "…but also and always, love for people.",
  },

  {
    title: "High Standards",
    desc: "High integrity, respect and authenticity in relations with our core stakeholders - LPs, potential investees, portfolio companies, alums, extended network and ecosystem.",
  },
  {
    title: "HAVE FUN",
    desc: "Be serious about the work, but don’t take yourself too seriously. Have fun in the process.",
  },
]

const ManifestoAndValues = () => {
  const ourValuesRef = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))

  // our values animations
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true })

      tl.current
        .to(".progress-line", {
          scaleY: 1,
        })
        .to(
          ".cactus-1",
          {
            yPercent: -20,
          },
          "s"
        )
        .to(
          ".cactus-2",
          {
            yPercent: -20,
          },
          "s"
        )
        .to(
          ".cactus-3",
          {
            yPercent: -20,
          },
          "s"
        )
        .to(".papa-chamaeleon", {
          xPercent: -350,
        })

      ScrollTrigger.create({
        markers: false,
        id: "our-values",
        animation: tl.current,
        trigger: ourValuesRef.current,
        scrub: true,
        start: `center bottom`,
      })
    }, ourValuesRef)

    return () => ctx.revert()
  }, [ScrollTrigger])

  return (
    <DefaultLayout seo={{ ...routes.manifestoAndValues.seo }}>
      <section className={s.intro}>
        <h1>
          <span>
            <strong>Chamaeleon</strong> is a new early-stage venture capital firm that brings together partners that
            have long collaborated as investors, operators and entrepreneurs that will focus on investing in truly
            transformative companies.
          </span>
          <span>
            We have learnt from our experience to see near and far, to be global and local, to be strategic and
            pragmatic, all at the same time.
          </span>
        </h1>
        <div className={s.imgC}>
          <MaskedScale>
            <CustomImage alt="People at Lunch" src={lunch} style={{ objectFit: "cover" }} priority={true} />
          </MaskedScale>
        </div>
      </section>

      <ClientOnly>
        <Manifesto />
      </ClientOnly>

      <SequencedChamaeleon />

      <section className={cn(s.ourValues, "island", "flex-center-y")} ref={ourValuesRef}>
        <Reveal>
          <h2>OUR VALUES</h2>
        </Reveal>
        <div className={s.values}>
          <div className={cn(s.progressLine, "progress-line")}></div>
          {gridItems.map((item, i) => {
            return (
              <div className={s.item} key={i}>
                <Reveal>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </Reveal>
              </div>
            )
          })}
        </div>
        <div className={s.cactusC}>
          <div className={cn(s.imgC, "cactus-1")}>
            <CustomImage src={c1} alt="Cactus Doodle" style={{ objectFit: "contain" }} />
          </div>
          <div className={cn(s.imgC, "cactus-2")}>
            <CustomImage src={c2} alt="Cactus Doodle" style={{ objectFit: "contain" }} />
          </div>
          <div className={cn(s.imgC, "cactus-3")}>
            <CustomImage src={c3} alt="Cactus Doodle" style={{ objectFit: "contain" }} />
          </div>
        </div>
        <div className={cn(s.imgC, "papa-chamaeleon")}>
          <CustomImage src={papa} alt="Papa Chamaeleon" style={{ objectFit: "contain" }} />
        </div>
      </section>
    </DefaultLayout>
  )
}

export default ManifestoAndValues
