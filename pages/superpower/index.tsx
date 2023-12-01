import s from "./superpower.module.scss"

import cn from "clsx"

import MaskedScale from "@/components/animations/masked-scale"
import Parallax from "@/components/animations/parallax"
import CallToPage from "@/components/call-to-page"
import CustomImage from "@/components/custom-image"
import { Marquee } from "@/components/marquee"
import Pixels from "@/components/pixels"
import DefaultLayout from "@/layouts/default"
import { routes } from "@/constants"

import logoMantis from "@/public/img/logo-mantis.png"
import robot from "@/public/img/mantis-banner.jpg"
import details1 from "@/public/img/mantis-1.jpg"
import details2 from "@/public/img/mantis-2.jpg"

const Superpower = () => {
  return (
    <DefaultLayout theme="mantis">
      <section className={s.intro}>
        <h1>
          Chamaeleon's investment strategy is powered by our proprietary AI and quantitative engine, which analyzes
          millions of companies across thousands of data points.
        </h1>
        <div className={s.imgC}>
          <CustomImage src={logoMantis} alt="Mantis Logo" style={{ objectFit: "contain" }} priority={true} />
        </div>
      </section>

      <section className={s.mantis}>
        <div className={s.imgC}>
          <MaskedScale>
            <CustomImage src={robot} alt="Robot & Human" style={{ objectFit: "cover" }} priority={true} />
          </MaskedScale>
        </div>
        <p>
          Our human-in-the-loop approach combines world-class investment and data science expertise with cutting-edge
          models, data and in-house technology to generate superior investment outcomes.
        </p>
        <div className={cn(s.marquee, s.rotated)}>
          <Marquee duration={30}>
            <>
              <h5>MANTIS</h5>
              <h5>MANTIS</h5>
              <h5>MANTIS</h5>
            </>
          </Marquee>
        </div>
      </section>

      <section className={cn(s.details, "island")}>
        <div className={s.imgs}>
          <Parallax speedX={0} speedY={0.15} directionY={1}>
            <div className={cn(s.imgC, s.a)}>
              <CustomImage src={details1} alt="People" style={{ objectFit: "cover" }} loading="lazy" />
            </div>
          </Parallax>

          <Parallax speedX={0} speedY={0.25} directionY={-1}>
            <div className={cn(s.imgC, s.b)}>
              <CustomImage src={details2} alt="People" style={{ objectFit: "cover" }} loading="lazy" />
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
        <CallToPage text="Learn about our approach" btnText="APPROACH" href={routes.approach.path} />
      </section>
    </DefaultLayout>
  )
}

export default Superpower
