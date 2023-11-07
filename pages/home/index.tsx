import Header from "@/components/header"
import s from "./home.module.scss"

import Button from "@/components/button"
import CustomImage from "@/components/custom-image"
import { Marquee } from "@/components/marquee"
import Pixels from "@/components/pixels"
import DefaultLayout from "@/layouts/default"
import cn from "clsx"

export default function Home() {
  return (
    <DefaultLayout>
      <Header />

      <section className={cn(s.intro, "island")}>
        <h1>
          WHOLISTIC <br /> INVESTMENTS.
        </h1>
        <Pixels
          bg="var(--forestial)"
          fill="var(--forested-juniper)"
          alignment="br"
          shape={[
            ["o", "x", "o"],
            ["x", "o", "x"],
            ["o", "x", "x"],
          ]}
        />
        <Pixels
          bg="var(--forestial)"
          fill="var(--forested-juniper)"
          alignment="bl"
          shape={[
            ["o", "o", "o"],
            ["x", "o", "o"],
            ["x", "o", "x"],
          ]}
        />
      </section>
      <section className={s.whoWeAre}>
        <div className={s.coins}>
          <div className={s.imgC}>
            <CustomImage src="/img/coin-dollar.png" alt="Company Logo" width="300" height="300" />
          </div>

          <div className={s.imgC}>
            <CustomImage src="/img/coin-pound.png" alt="Company Logo" width="300" height="300" />
          </div>
          <div className={s.imgC}>
            <CustomImage src="/img/coin-yen.png" alt="Company Logo" width="300" height="300" />
          </div>
          <div className={s.imgC}>
            <CustomImage src="/img/coin-euro.png" alt="Company Logo" width="300" height="300" />
          </div>
        </div>
        <div className={s.text}>
          <h2>WHO WE ARE</h2>
          <h3>WE ARE AN EARLY-STAGE VC FIRM BASED IN SILICON VALLEY, INVESTING GLOBALLY.</h3>
          <p>
            Chamaeleon is a new early-stage venture capital firm that brings together 3 partners that have long
            collaborated as investors, operators and entrepreneurs that will focus on investing in truly transformative
            companies.
          </p>
          <Button text="SEE MORE" path="/manifesto-and-values" size="md" />
        </div>
      </section>
      <section className={s.companiesMarquee}>
        <Marquee>
          <>
            <div className={s.logoC}>
              <CustomImage src="/img/beepro.png" alt="Company Logo" width="200" height="200" />
            </div>
            <div className={s.logoC}>
              <CustomImage src="/img/beepro.png" alt="Company Logo" width="200" height="200" />
            </div>
            <div className={s.logoC}>
              <CustomImage src="/img/beepro.png" alt="Company Logo" width="200" height="200" />
            </div>
            <div className={s.logoC}>
              <CustomImage src="/img/beepro.png" alt="Company Logo" width="200" height="200" />
            </div>
            <div className={s.logoC}>
              <CustomImage src="/img/beepro.png" alt="Company Logo" width="200" height="200" />
            </div>
          </>
        </Marquee>
      </section>
      <section className={cn(s.ourPortfolio, "island")}>
        <h3>
          WHETHER YOU&apos;RE
          <span className={s.imgC}>
            <CustomImage src="/img/moneybox.png" alt="Company Logo" width="200" height="200" />
          </span>
          <span className={s.forestial}>A HUMBLE STARTUP</span> OR{" "}
          <span className={s.forestial}>AN INDUSTRY SUPERSTAR</span>
          <span className={s.imgC}>
            <CustomImage src="/img/cowboy-hat.png" alt="Company Logo" width="200" height="200" />
          </span>
          , WE&apos;RE HERE TO BOOST YOUR BRAND.
        </h3>
        <Button text="OUR PORTFOLIO" path="/our-portfolio" size="md" />

        <div className={s.imgs}>
          <div className={s.imgC}>
            <CustomImage src="/img/our-portfolio-1.jpg" alt="Company Logo" width="1000" height="1000" />
          </div>

          <div className={s.imgC}>
            <CustomImage src="/img/our-portfolio-2.jpg" alt="Company Logo" width="1000" height="1000" />
          </div>
        </div>
      </section>
      <div className={s.kinCommunity}>
        <h4>KIN COMMUNITY</h4>
        <p>
          We partner with exceptional people who are aligned with us on values, have worked or have done business with
          us, and believe that entrepreneurship can create massive opportunities and impact for everyone. They are part
          of our family… they are #KIN.
        </p>
        <div className={s.link}>
          <small>Meet our partners</small>
          <Button text="KIN COMMUNITY" path="/kin-community" size="lg" />
        </div>
      </div>
    </DefaultLayout>
  )
}
