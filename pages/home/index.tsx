import Header from "@/components/header"
import s from "./home.module.scss"

import cn from "clsx"
import Pixels from "@/components/pixels"
import { Marquee } from "@/components/marquee"
import CustomImage from "@/components/custom-image"

export default function Home() {
  return (
    <>
      <section className={cn(s.intro, "island-margin")}>
        <Header />

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
        </div>
      </section>
      <section className={s.companiesMarquee}>
        <Marquee>
          <>
            <div className={s.logoC}>
              <CustomImage src="/img/beepro.png" alt="Company Logo" width="100" height="100" />
            </div>
            <div className={s.logoC}>
              <CustomImage src="/img/beepro.png" alt="Company Logo" width="100" height="100" />
            </div>
            <div className={s.logoC}>
              <CustomImage src="/img/beepro.png" alt="Company Logo" width="100" height="100" />
            </div>
            <div className={s.logoC}>
              <CustomImage src="/img/beepro.png" alt="Company Logo" width="100" height="100" />
            </div>
            <div className={s.logoC}>
              <CustomImage src="/img/beepro.png" alt="Company Logo" width="100" height="100" />
            </div>
          </>
        </Marquee>
      </section>
    </>
  )
}
