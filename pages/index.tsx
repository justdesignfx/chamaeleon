import s from "./home/home.module.scss"

import cn from "clsx"
import { useMediaQuery } from "usehooks-ts"

import { MaskedScale } from "@/components/animations/masked-scale"
import { Parallax } from "@/components/animations/parallax"
import { Button } from "@/components/button"
import { CompanyBox } from "@/components/company-box"
import { CustomImage } from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"
import { Marquee } from "@/components/marquee"
import { Pixels } from "@/components/pixels"

import { all } from "@/api/queries/home-portfolio"
import { routes } from "@/constants"
import { DefaultLayout } from "@/layouts/default"
import { CompanyBoxProps } from "@/types"

import chamaeleonOnHill from "@/public/img/chamaeleon-on-hill.jpg"
import cowboyHat from "@/public/img/cowboy-hat.png"
import kinCurtain from "@/public/img/kin-curtain.jpg"
import kinLunch from "@/public/img/kin-lunch.jpg"
import kinTrip from "@/public/img/kin-trip.jpg"
import logoKin from "@/public/img/logo-kin-community.png"
import logoMantis from "@/public/img/logo-mantis.png"
import moneybox from "@/public/img/moneybox.gif"
import rocket from "@/public/img/rocket.png"

import { ClientOnly } from "@/hocs/isomorphic"
import { breakpoints } from "@/lib/utils"
import logomarkPng from "@/public/img/chamaeleon-c.png"
import logomark from "@/public/img/chamaeleon-c.webp"

type Props = {
  companies: CompanyBoxProps[]
}

export default function Home({ companies }: Props) {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile}px)`)

  return (
    <DefaultLayout seo={{ ...routes.home.seo }}>
      <section className={s.intro}>
        <div className={cn(s.content, "island")}>
          <h1>
            WHOLISTIC <br /> INVESTMENTS
          </h1>
          <h2>Based in Silicon Valley, investing globally.</h2>
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
        </div>
        <div className={s.imgC}>
          <ClientOnly>
            {isMobile ? (
              <CustomImage src={logomarkPng} alt="Chamaeleon Logo" style={{ objectFit: "contain" }} priority={true} />
            ) : (
              <CustomImage src={logomark} alt="Chamaeleon Logomark" style={{ objectFit: "contain" }} priority={true} />
            )}
          </ClientOnly>
        </div>
      </section>

      <section className={s.manifesto}>
        <div className={cn(s.rocket, "flex-center-y")}>
          <Parallax speedX={0} directionY={-1} speedY={0.2}>
            <div className={s.imgC}>
              <CustomImage src={rocket} alt="Rocket Illustration" style={{ objectFit: "contain" }} loading="lazy" />
            </div>
          </Parallax>
        </div>
        <div className={s.text}>
          <h2>MANIFESTO & VALUES</h2>
          <h3>WE ARE AN EARLY-STAGE VC FIRM BASED IN SILICON VALLEY, INVESTING GLOBALLY.</h3>
          <p>
            Chamaeleon is a new early-stage venture capital firm that brings together 3 partners that have long
            collaborated as investors, operators and entrepreneurs that will focus on investing in truly transformative
            companies.
          </p>
          <Button
            text="SEE MORE"
            path={`/${routes.manifestoAndValues.path}`}
            size="md"
            ariaLabel={routes.manifestoAndValues.ariaLabel}
          />
        </div>
      </section>

      <section className={s.investments}>
        <Marquee duration={40} repeat={2}>
          <>
            {Array.isArray(companies) &&
              companies &&
              companies.map((item, i) => {
                return (
                  <CustomLink href={item.url} className={s.logoC} key={i}>
                    <CompanyBox {...item} />
                  </CustomLink>
                )
              })}
          </>
        </Marquee>
      </section>

      <section className={cn(s.portfolio, "island")}>
        <h3>
          WHETHER YOU'RE{" "}
          <span className={s.a}>
            <span className={s.imgC}>
              <CustomImage src={moneybox} alt="Moneybox Illustration" loading="lazy" />
            </span>
          </span>
          <span className={s.forestial}>A HUMBLE STARTUP </span>
          OR <span className={s.forestial}>AN INDUSTRY SUPERSTAR </span>
          <span className={s.b}>
            <span className={s.imgC}>
              <CustomImage src={cowboyHat} alt="Cowboy Hat Illustration" loading="lazy" />
            </span>
          </span>
          WE'RE HERE TO BOOST YOU.
        </h3>

        <Button
          text="OUR PORTFOLIO"
          path={`/${routes.portfolio.path}`}
          size="md"
          ariaLabel={routes.portfolio.ariaLabel}
        />

        <div className={s.imgC}>
          <MaskedScale>
            <CustomImage src={kinTrip} alt="People In Nature" loading="lazy" />
          </MaskedScale>
        </div>

        <div className={s.marquee}>
          <Marquee duration={40}>
            <>
              <p>A UNIQUE SUPERPOWER</p>
              <p>A UNIQUE SUPERPOWER</p>
              <p>A UNIQUE SUPERPOWER</p>
              <p>A UNIQUE SUPERPOWER</p>
            </>
          </Marquee>
        </div>
      </section>

      <section className={s.mantis}>
        <div className={s.chamaeleon}>
          <div className={s.imgC}>
            <MaskedScale>
              <CustomImage
                src={chamaeleonOnHill}
                alt="Chamaeleon On Hill"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </MaskedScale>
          </div>
          <div className={s.imgC}>
            <CustomImage src={logoMantis} alt="Mantis Logo" style={{ objectFit: "contain" }} loading="lazy" />
          </div>
        </div>

        <div className={s.text}>
          <h2>MANTIS - OUR SUPERPOWER</h2>
          <h3>CHAMAELEON'S AI-DRIVEN INVESTMENT STRATEGY.</h3>
          <p>
            Chamaeleon's investment strategy is powered by our proprietary AI and quantitative engine, which analyzes
            millions of companies across thousands of data points per company.
          </p>
          <Button
            text="SEE MORE"
            path={`/${routes.superpower.path}`}
            size="md"
            ariaLabel={routes.superpower.ariaLabel}
          />
        </div>
      </section>

      <section className={s.kin}>
        <h4>
          <span>CHAMAELEON'S VISION </span>
          <span>FOR VALUE-ADD GROWTH.</span>
        </h4>
        <div>
          <div className={s.text}>
            <p>
              We partner with exceptional people who are aligned with us on values, have worked or have done business
              with us, and believe that entrepreneurship can create massive opportunities and impact for everyone. They
              are part of our family... they are <strong>KIN</strong>.
            </p>
            <Button text="MEET OUR COMMUNITY" path={`/${routes.kin.path}`} size="md" ariaLabel={routes.kin.ariaLabel} />
          </div>

          <div className={s.imgs}>
            <div className={s.imgC}>
              <MaskedScale>
                <CustomImage src={kinCurtain} alt="People at Event" style={{ objectFit: "cover" }} loading="lazy" />
              </MaskedScale>
            </div>
            <div className={s.imgC}>
              <MaskedScale>
                <CustomImage src={kinLunch} alt="People at Event" style={{ objectFit: "cover" }} loading="lazy" />
              </MaskedScale>
            </div>
            <div className={s.imgC}>
              <CustomImage src={logoKin} alt="Kin Logo" style={{ objectFit: "contain" }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const companies = await all()
  return { props: { companies } }
}
