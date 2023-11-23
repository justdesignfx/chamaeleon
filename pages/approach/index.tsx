import React from "react"
import cn from "clsx"
import s from "./approach.module.scss"
import DefaultLayout from "@/layouts/default"
import CustomImage from "@/components/custom-image"
import CardFloat from "@/components/card-float"
import { ICardFloat } from "@/constants"
import Reveal from "@/components/animations/reveal"

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
]

const lookForItems: ICardFloat[] = [
  {
    backgroundColor: "var(--nightly-woods)",
    color: "var(--greening)",
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
    backgroundColor: "var(--nightly-woods)",
    color: "var(--greening)",
    text: "First Checks Between 1-5 Million USD",
    icon: {
      alignment: "bl",
      src: "/img/bale.png",
    },
    rotate: 13,
  },
  {
    backgroundColor: "var(--nightly-woods)",
    color: "var(--greening)",
    text: "First Checks Between 1-5 Million USD",
    icon: {
      alignment: "bl",
      src: "/img/bale.png",
    },
    rotate: 13,
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
