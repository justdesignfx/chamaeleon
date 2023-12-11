import s from "./approach.module.scss"

import cn from "clsx"

import { Parallax } from "@/components/animations/parallax"
import { Reveal } from "@/components/animations/reveal"
import { CardFloat } from "@/components/card-float"
import { CustomImage } from "@/components/custom-image"
import { WhatWeLookFor } from "@/components/what-we-look-for"
import { ClientOnly } from "@/hocs/isomorphic"

import { DefaultLayout } from "@/layouts/default"
import { CardFloatProps } from "@/types"

import intro1 from "@/public/img/earth-1.jpg"
import intro2 from "@/public/img/earth-2.jpg"
import earth from "@/public/img/world.gif"
import { routes } from "@/constants"

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
  },
]

const Approach = () => {
  return (
    <DefaultLayout seo={{ ...routes.approach.seo }}>
      <section className={s.intro}>
        <h1>START-UPS ARE CHANGING. IT'S TIME FOR VENTURE CAPITALS TO CHANGE.</h1>
      </section>

      <section className={cn(s.earth, "island")}>
        <div className={s.imgs}>
          <div className={s.transform}>
            <Parallax speedX={0} speedY={0.3} directionY={-1}>
              <div className={s.imgC}>
                <CustomImage src={intro2} alt="People" style={{ objectFit: "cover" }} priority={true} />
              </div>
            </Parallax>
          </div>

          <div className={s.transform}>
            <Parallax speedX={0} speedY={0.4} directionY={-1}>
              <div className={s.imgC}>
                <CustomImage src={intro1} alt="People" style={{ objectFit: "cover" }} priority={true} />
              </div>
            </Parallax>
          </div>
        </div>
        <h2>WE ARE PASSIONATE EARLY STAGE INVESTORS...</h2>
        <div className={s.values}>
          <div className="flex-center-y">
            <h3>OBJECTIVE</h3>
            <p>Honest, ethical and truthful; fact based and data driven decisions.</p>
          </div>
          <div className="flex-center-y">
            <h3>GLOBAL</h3>
            <p>Based in Silicon Valley & Europe, proven international track record.</p>
          </div>
          <div className="flex-center-y">
            <h3>VERSATILE</h3>
            <p>Operators at scale, entrepreneurs, experienced investors.</p>
          </div>
        </div>
        <div className={s.imgC}>
          <CustomImage src={earth} alt="Spinning Earth Gif" style={{ objectFit: "contain" }} priority={true} />
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

      <ClientOnly>
        <WhatWeLookFor />
      </ClientOnly>
    </DefaultLayout>
  )
}

export default Approach
