import { useRef, useState } from "react"
import s from "./manifesto-and-values.module.scss"

import { gsap, ScrollTrigger } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import MaskedScale from "@/components/animations/masked-scale"
import Reveal from "@/components/animations/reveal"
import CardFloat from "@/components/card-float"
import CustomImage from "@/components/custom-image"
import { Marquee } from "@/components/marquee"
import { ICardFloat } from "@/constants"
import DefaultLayout from "@/layouts/default"

const ManifestoAndValues = () => {
  const manifestoRef = useRef(null)
  const ourValuesRef = useRef(null)
  const tl = useRef<gsap.core.Timeline | null>(null)
  const [manifestoView, setManifestoView] = useState<"long" | "tldr">("tldr")

  const manifestoItems: ICardFloat[] = [
    {
      backgroundColor: "var(--greening)",
      color: "var(-nightly-woods)",
      text: "Typically Coming In At Series Seed Or Series A",
      icon: {
        alignment: "tl",
        src: "/img/drops.png",
      },
      rotate: -6,
    },
    {
      backgroundColor: "var(--nightly-woods)",
      color: "var(--greening)",
      text: "Prefer To Lead Or Co-Lead, But We Play Nice With Others :)",
      icon: {
        alignment: "tr",
        src: "/img/rock.png",
      },
      rotate: 14,
    },
    {
      backgroundColor: "var(--electric-energy)",
      color: "var(-nightly-woods)",
      text: "First Checks Between 1-5 Million USD",
      icon: {
        alignment: "bl",
        src: "/img/bale.png",
      },
      rotate: 13,
    },
    {
      backgroundColor: "var(--greening)",
      color: "var(--nightly-woods)",
      text: "Primarily, Focused On US And Europe, But Will Invest Globally",
      icon: {
        alignment: "br",
        src: "/img/earth.png",
      },
      rotate: -6,
    },
    {
      backgroundColor: "var(--nightly-woods)",
      color: "var(--greening)",
      text: "Broad Vertical Focus, But Key Principles Are:",
      rotate: 13,
    },
    {
      backgroundColor: "var(--electric-energy)",
      color: "var(--nightly-woods)",
      text: "Product-Led Companies, Not “Just” Core-Technology Or IP",
      icon: {
        alignment: "br",
        src: "/img/steampunk-chamaeleon-face.png",
      },
      rotate: 0,
    },
    {
      backgroundColor: "var(--greening)",
      color: "var(--nightly-woods)",
      text: "Clear End-User Flows That We As Users Could Test, Even In B2B",
      icon: {
        alignment: "tl",
        src: "/img/doc.png",
      },
      rotate: -7,
    },
    {
      backgroundColor: "var(--nightly-woods)",
      color: "var(--greening)",
      text: "Preference For Technology Differentiated",
      icon: {
        alignment: "br",
        src: "/img/steampunk-chamaeleon.png",
      },
      rotate: 13,
    },
  ]

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

  useIsomorphicLayoutEffect(() => {
    if (!ourValuesRef.current) return

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
        id: "our-values",
        animation: tl.current,
        trigger: ourValuesRef.current,
        scrub: true,
        start: `center bottom`,
        markers: true,
      })
    }, ourValuesRef)

    return () => ctx.revert()
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!manifestoRef.current) return

    const duration = 0.2

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: "manifesto",
        // markers: true,
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

  return (
    <DefaultLayout>
      <section className={s.intro}>
        <h1>
          <span>
            <strong>Chamaeleon</strong> is a new early-stage venture capital firm that brings together 3 partners that
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
            <CustomImage
              alt="Manifest"
              src="/img/manifest-lunch.jpg"
              style={{ objectFit: "cover" }}
              height="1067"
              width="1600"
            />
          </MaskedScale>
        </div>
      </section>

      <section className={s.manifesto} ref={manifestoRef}>
        <div className={s.manifestoMarquee}>
          <Marquee duration={30}>
            <>
              <h5>MANIFESTO</h5>
              <h5>MANIFESTO</h5>
              <h5>MANIFESTO</h5>
              <h5>MANIFESTO</h5>
            </>
          </Marquee>
        </div>
        <small className={s.date}>June 29th, 2021</small>
        <h3>Today, we announce the creation of Chamaeleon and the launch of its first fund.</h3>

        {manifestoView === "long" ? (
          <div className={s.long}>
            <p>
              For an industry that is fueled by technology, its innovations and the sometimes stratospheric returns on
              its investments, venture capital - in particular in early-stage - is an industry surprisingly lacking in
              technology, at its core. Although the operating models and playbooks used to source and do due diligence
              on start-ups - in our opinion, the two most core activities in VC - have evolved over time, there are very
              few impactful innovations around the core technology stacks that VC firms actually develop or bring
              together. Therefore, we are bringing a full-stack approach to VC investing with our own early-stage
              investing technology stack at the center of everything we do. We will also use these platforms to create
              value to portfolio companies and our own investors/LPs.
            </p>
            <p>
              This partnership has invested in companies like App Annie, DraftKings, Gusto, Kakao, Outsystems,
              Robinhood, Rubrik, Virta Health, Cloudflare, Ometria, among many other “household” names. We have led and
              managed 5 VC funds between us with enviable returns, including top 2 to 5 percentile funds. We have
              created verifiable impact at-scale as operators in such household names as NCSOFT, McKinsey & Co, GSM
              Association, SK Telecom, Sonae. We have jumped off a cliff before and started our own companies… and we
              are doing it all over again, because we don’t rest on our laurels, because we have a fundamental new way
              of looking and executing in this space, because we love and feel blessed by being in venture capital… and
              because, deep down, we just want to do this, together.
            </p>
            <p>
              Last, but most certainly not the least, we are big believers that as much as technology will augment us…
              as much as our insights and instincts will support our decisions, people are still at the center of all of
              this. We have built unique networks of truly astonishing and generous people, not just in the geographies
              where we will have our offices, but around the world, where we will operate. All of us have worked in at
              least 3 different continents and will continue bringing to entrepreneurs all the resources that we have
              access to as individuals, as a firm, but also from our broader ecosystem of investors/LPs, advisors,
              friends. We will continue bringing a humanistic values-based approach to this profession (we don’t call it
              a job, around here): we will continue treating entrepreneurs’ start-ups as their babies… because they are;
              when we are tough, we will continue being thoughtful, fair and charitable.
            </p>
            <span className={s.punch}>
              ANNOUNCING CHAMAELEON <br /> GREAT PEOPLE + GREAT TECH <br /> SONGYEE, NUNO AND ALEX
            </span>
          </div>
        ) : (
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
        )}
      </section>

      <section className={s.chamaeleonPop}>
        <div className={s.imgC}>
          <CustomImage
            src="/img/chamaeleon-hole.png"
            alt="Cactus Doodle"
            style={{ objectFit: "contain" }}
            height="257"
            width="447"
          />
        </div>
      </section>

      <section className={cn(s.ourValues, "island", "flex-center-y")} ref={ourValuesRef}>
        <h2>OUR VALUES</h2>
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
            <CustomImage
              src="/img/manifesto-c-1.png"
              alt="Cactus Doodle"
              style={{ objectFit: "contain" }}
              height="835"
              width="738"
            />
          </div>
          <div className={cn(s.imgC, "cactus-2")}>
            <CustomImage
              src="/img/manifesto-c-2.png"
              alt="Cactus Doodle"
              style={{ objectFit: "contain" }}
              height="449"
              width="259"
            />
          </div>
          <div className={cn(s.imgC, "cactus-3")}>
            <CustomImage
              src="/img/manifesto-c-3.png"
              alt="Cactus Doodle"
              style={{ objectFit: "contain" }}
              height="299"
              width="266"
            />
          </div>
        </div>
        <div className={cn(s.imgC, "papa-chamaeleon")}>
          <CustomImage
            src="/img/papa-chamaeleon.png"
            alt="Papa Chamaeleon"
            style={{ objectFit: "contain" }}
            height="596"
            width="629"
          />
        </div>
      </section>

      <div className={cn(s.stickyBtn, "sticky-btn", [s[manifestoView]])}>
        <div
          className={cn("flex-center", "cursor-pointer", { [s.active]: manifestoView === "tldr" })}
          onClick={() => setManifestoView("tldr")}
        >
          TL;DR
        </div>
        <div
          className={cn("flex-center", "cursor-pointer", { [s.active]: manifestoView === "long" })}
          onClick={() => setManifestoView("long")}
        >
          LONG
        </div>
      </div>
    </DefaultLayout>
  )
}

export default ManifestoAndValues
