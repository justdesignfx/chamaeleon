import React from "react"
import s from "./superpower.module.scss"

import cn from "clsx"

import DefaultLayout from "@/layouts/default"
import CustomImage from "@/components/custom-image"
import { Marquee } from "@/components/marquee"
import Button from "@/components/button"
import Pixels from "@/components/pixels"
import Parallax from "@/components/animations/parallax"
import MaskedScale from "@/components/animations/masked-scale"

const Superpower = () => {
  return (
    <DefaultLayout theme="mantis">
      <section className={s.intro}>
        <h1>
          Chamaeleon&apos;s investment strategy is powered by our proprietary AI and quantitative engine, which analyzes
          millions of companies across thousands of data points.
        </h1>
        <div className={s.imgC}>
          <CustomImage
            src="/img/logo-mantis.png"
            alt="Chamaeleon Face"
            style={{ objectFit: "cover" }}
            height="356"
            width="848"
          />
        </div>
      </section>

      <section className={s.mantis}>
        <div className={s.imgC}>
          <MaskedScale>
            <CustomImage
              src="/img/our-portfolio-2.jpg"
              alt="Chamaeleon Face"
              style={{ objectFit: "cover" }}
              width="1002"
              height="528"
            />
          </MaskedScale>
        </div>
        <p>
          Our human-in-the-loop approach combines world-class investment and data science expertise with cutting-edge
          models, data and in-house technology to generate superior investment outcomes.
        </p>
        <div className={cn(s.mantisMarquee, s.rotated)}>
          <Marquee duration={30}>
            <>
              <h5>MANTIS</h5>
              <h5>MANTIS</h5>
              <h5>MANTIS</h5>
              <h5>MANTIS</h5>
            </>
          </Marquee>
        </div>
      </section>

      <section className={cn(s.details, "island")}>
        <div className={s.imgs}>
          <Parallax speedX={0} speedY={0.15} directionY={-1}>
            <div className={cn(s.imgC, s.a)}>
              <CustomImage src="/img/our-portfolio-2.jpg" alt="Chamaeleon Face" style={{ objectFit: "cover" }} />
            </div>
          </Parallax>

          <Parallax speedX={0} speedY={0.25} directionY={-1}>
            <div className={cn(s.imgC, s.b)}>
              <CustomImage src="/img/our-portfolio-2.jpg" alt="Chamaeleon Face" style={{ objectFit: "cover" }} />
            </div>
          </Parallax>
        </div>
        <div className={s.text}>
          <p>
            Our ‘unfair’ advantage is further compounded by analyzing companies with unparalleled accuracy and speed.
          </p>
          <p>
            By processing vast amounts of data through our advanced models, we are able to identify unique investment
            opportunities and emerging trends ahead of others, with significantly higher quality and scale, all the
            while minimizing unwanted risk, human error and bias.
          </p>
        </div>
        <Pixels
          bg="var(--white-transparent)"
          fill="var(--austrian-ice)"
          alignment="br"
          shape={[
            ["o", "o", "o"],
            ["o", "o", "o"],
            ["o", "o", "x"],
          ]}
        />
        <Pixels
          bg="var(--white-transparent)"
          fill="var(--austrian-ice)"
          alignment="bl"
          shape={[
            ["x", "o", "o"],
            ["o", "x", "o"],
            ["x", "x", "x"],
          ]}
        />
      </section>

      <section className={s.approach}>
        <p>
          Our unique approach enables us to have competitive advantages across all phases of investment, from lead
          sourcing to portfolio management, as well as sharing those advantages with our portfolio companies and
          investors.
        </p>
        <div className={s.link}>
          <small>Learn about our approach</small>
          <Button text="APPROACH" path="/approach" size="lg" />
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Superpower
