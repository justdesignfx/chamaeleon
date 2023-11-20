import s from "./home/home.module.scss"

import cn from "clsx"

import Button from "@/components/button"
import CustomImage from "@/components/custom-image"
import { Marquee } from "@/components/marquee"
import Parallax from "@/components/animations/parallax"
import Pixels from "@/components/pixels"
import { ICompanyBox, routes } from "@/constants"
import DefaultLayout from "@/layouts/default"
import MaskedScale from "@/components/animations/masked-scale"
import { all } from "@/api/queries/home-portfolio"
import { CustomLink } from "@/components/custom-link"
import CompanyBox from "@/components/company-box"

type Props = {
  companies: ICompanyBox[]
}

export default function Home({ companies }: Props) {
  console.log(companies)

  return (
    <DefaultLayout>
      <section className={cn(s.intro, "island")}>
        <h1>
          WHOLISTIC <br /> INVESTMENTS.
        </h1>
        <div className={s.imgC}>
          <CustomImage src="/img/chamaeleon-c.png" alt="Chamaeleon C Logo" style={{ objectFit: "contain" }} />
        </div>
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
            <Parallax speedX={0} directionY={-1} speedY={0.4}>
              <CustomImage src="/img/coin-dollar.png" alt="Company Logo" />
            </Parallax>
          </div>

          <div className={s.imgC}>
            <Parallax speedX={0} directionY={-1} speedY={0.4}>
              <CustomImage src="/img/coin-pound.png" alt="Company Logo" />
            </Parallax>
          </div>

          <div className={s.imgC}>
            <Parallax speedX={0} directionY={-1} speedY={0.4}>
              <CustomImage src="/img/coin-yen.png" alt="Company Logo" />
            </Parallax>
          </div>

          <div className={s.imgC}>
            <Parallax speedX={0} directionY={-1} speedY={0.4}>
              <CustomImage src="/img/coin-euro.png" alt="Company Logo" />
            </Parallax>
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
          <Button text="SEE MORE" path={`/${routes.manifestoAndValues.path}`} size="md" />
        </div>
      </section>

      <section className={s.companiesMarquee}>
        <Marquee>
          <>
            {companies.map((item, i) => {
              return (
                <CustomLink href={item.url} className={s.logoC} key={i}>
                  <CompanyBox {...item} />
                </CustomLink>
              )
            })}
          </>
        </Marquee>
      </section>

      <section className={cn(s.ourPortfolio, "island")}>
        <h3>
          WHETHER YOU&apos;RE{" "}
          <span className={s.a}>
            <span className={s.imgC}>
              <CustomImage src="/img/moneybox.png" alt="Company Logo" />
            </span>
          </span>
          <span className={s.forestial}>A HUMBLE STARTUP </span>
          OR <span className={s.forestial}>AN INDUSTRY SUPERSTAR</span>
          <span className={s.b}>
            <span className={s.imgC}>
              <CustomImage src="/img/cowboy-hat.png" alt="Company Logo" />
            </span>
          </span>
          , WE&apos;RE HERE TO BOOST YOUR BRAND.
        </h3>
        <Button text="OUR PORTFOLIO" path={`/${routes.portfolio.path}`} size="md" />

        <div className={s.imgs}>
          <div className={s.imgC}>
            <MaskedScale>
              <CustomImage src="/img/our-portfolio-1.jpg" alt="Company Logo" loading="lazy" width="540" height="414" />
            </MaskedScale>
          </div>

          <div className={s.imgC}>
            <MaskedScale>
              <CustomImage src="/img/our-portfolio-2.jpg" alt="Company Logo" loading="lazy" width="1002" height="528" />
            </MaskedScale>
          </div>
        </div>
      </section>

      <div className={s.kinCommunity}>
        <h4>KIN COMMUNITY</h4>
        <p>
          We partner with exceptional people who are aligned with us on values, have worked or have done business with
          us, and believe that entrepreneurship can create massive opportunities and impact for everyone. They are part
          of our family… they are <span>#KIN</span>.
        </p>
        <div className={s.link}>
          <small>Meet our partners</small>
          <Button text="KIN" path={`/${routes.kin.path}`} size="lg" />
        </div>
      </div>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const companies = await all()
  return { props: { companies } }
}
