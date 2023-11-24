import React from "react"
import s from "./approach.module.scss"

import cn from "clsx"

import CustomImage from "@/components/custom-image"
import CardFloat from "@/components/card-float"
import { ICardFloat } from "@/constants"
import Reveal from "@/components/animations/reveal"

import DefaultLayout from "@/layouts/default"

const manifestoItems: ICardFloat[] = [
  {
    backgroundColor: "var(--greening)",
    color: "var(-nightly-woods)",
    title: "PRODUCT DRIVEN",
    desc: "Product-led, not just “core-tech”",
    icon: {
      alignment: "tl",
      src: "/img/dart.png",
    },
    rotate: -6,
  },
  {
    backgroundColor: "var(--nightly-woods)",
    color: "var(--greening)",
    title: "EARLY STAGE",
    desc: "$1 to 5 million first check.",
    icon: {
      alignment: "tr",
      src: "/img/newborn.png",
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
    },
    rotate: -8,
  },
]

const lookForItems: ICardFloat[] = [
  {
    backgroundColor: "var(--nightly-woods)",
    color: "var(--greening)",
    title: "AWARE",
    desc: "Sharp & 360-degree vision, ability to see in all directions.",
    icon: {
      alignment: "tl",
      src: "/img/steampunk-chamaeleon-face.png",
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
    },
    rotate: 5,
  },
]

type Props = {}

const Approach = (props: Props) => {
  return (
    <DefaultLayout>
      <section className={s.intro}>
        <h1>START-UPS ARE CHANGING. IT&apos;S TIME FOR VENTURE CAPITALS TO CHANGE.</h1>
      </section>

      <section className={cn(s.earth, "island")}>
        <div className={s.imgs}>
          <div className={s.imgC}>
            <CustomImage
              src="/img/earth-2.jpg"
              alt="Chamaeleon Logomark"
              style={{ objectFit: "cover" }}
              height={1000}
              width={1000}
            />
          </div>

          <div className={s.imgC}>
            <CustomImage
              src="/img/earth-1.jpg"
              alt="Chamaeleon Logomark"
              style={{ objectFit: "cover" }}
              height={1000}
              width={1000}
            />
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
          <CustomImage
            src="/img/world.gif"
            alt="Chamaeleon Logomark"
            style={{ objectFit: "contain" }}
            height={1000}
            width={1000}
          />
        </div>
      </section>

      <section className={s.conditions}>
        <h2>WE INVEST IN PROJECTS THAT ARE...</h2>
        <div className={s.cards}>
          {manifestoItems.map((item, i) => {
            return (
              <Reveal key={i}>
                <CardFloat {...item} />
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className={s.table}>
        <h2>WHAT WE BRING TO THE TABLE?</h2>
        <div className={s.grid}>
          <div className={s.lineV}></div>
          <div className={s.lineH}></div>
          <div className={s.dot}></div>
          <div className={s.items}>
            <div>
              <h3>OBJECTIVE</h3>
              <p>Honest, ethical and truthful; fact based and data driven decisions.</p>
            </div>
            <div>
              <h3>OBJECTIVE</h3>
              <p>Honest, ethical and truthful; fact based and data driven decisions.</p>
            </div>
            <div>
              <h3>OBJECTIVE</h3>
              <p>Honest, ethical and truthful; fact based and data driven decisions.</p>
            </div>
            <div>
              <h3>OBJECTIVE</h3>
              <p>Honest, ethical and truthful; fact based and data driven decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.lookFor}>
        <h4>
          WHAT WE <br /> LOOK FOR<span>?</span>
        </h4>
        <div className={s.cards}>
          {lookForItems.map((item, i) => {
            return (
              <Reveal key={i}>
                <CardFloat {...item} />
              </Reveal>
            )
          })}
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Approach
