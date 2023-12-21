import { useRef } from "react"
import s from "./our-values.module.scss"

import { gsap, ScrollTrigger } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { Reveal } from "@/components/animations/reveal"
import { CustomImage } from "@/components/custom-image"

import c1 from "@/public/img/manifesto-c-1.png"
import c2 from "@/public/img/manifesto-c-2.png"
import c3 from "@/public/img/manifesto-c-3.png"
import papa from "@/public/img/papa-chamaeleon.png"

const OurValues = () => {
  const ourValuesRef = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))

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

  // our values animations
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
        markers: true,
        id: "our-values",
        animation: tl.current,
        trigger: ourValuesRef.current,
        scrub: true,
        start: `center bottom`,
      })
    }, ourValuesRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
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
  )
}

export { OurValues }
