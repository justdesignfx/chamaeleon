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
  return (
    <DefaultLayout>
      <section className={cn(s.intro, "island")}>
        <h1>
          WHOLISTIC <br /> INVESTMENTS.
        </h1>
        <div className={s.imgC}>
          <CustomImage
            src="/img/chamaeleon-c.png"
            alt="Chamaeleon C Logo"
            style={{ objectFit: "contain" }}
            height={1000}
            width={1000}
          />
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

      <section className={s.manifesto}>
        <div className={s.rocket}>
          <Parallax speedX={0} directionY={-1} speedY={0.2}>
            <div className={s.imgC}>
              <CustomImage
                src="/img/rocket.png"
                alt="Rocket Illustration"
                height={1568}
                width={909}
                style={{ objectFit: "contain" }}
              />
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
          <Button text="SEE MORE" path={`/${routes.manifestoAndValues.path}`} size="md" />
        </div>
      </section>

      <section className={s.investments}>
        <Marquee duration={40}>
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

      <section className={cn(s.portfolio, "island")}>
        <h3>
          WHETHER YOU&apos;RE{" "}
          <span className={s.a}>
            <span className={s.imgC}>
              <CustomImage src="/img/moneybox.png" alt="Company Logo" height={1000} width={1000} />
            </span>
          </span>
          <span className={s.forestial}>A HUMBLE STARTUP </span>
          OR <span className={s.forestial}>AN INDUSTRY SUPERSTAR</span>
          <span className={s.b}>
            <span className={s.imgC}>
              <CustomImage src="/img/cowboy-hat.png" alt="Company Logo" height={1000} width={1000} />
            </span>
          </span>
          WE&apos;RE HERE TO BOOST YOU.
        </h3>
        <Button text="OUR PORTFOLIO" path={`/${routes.portfolio.path}`} size="md" />

        <div className={s.imgC}>
          <MaskedScale>
            <CustomImage src="/img/team-at-trip.jpg" alt="People in nature" loading="lazy" width={2000} height={1125} />
          </MaskedScale>
        </div>

        <div className={s.marquee}>
          <Marquee duration={40}>
            <>
              <h5>A UNIQUE SUPERPOWER</h5>
              <h5>A UNIQUE SUPERPOWER</h5>
              <h5>A UNIQUE SUPERPOWER</h5>
              <h5>A UNIQUE SUPERPOWER</h5>
            </>
          </Marquee>
        </div>
      </section>

      <section className={s.mantis}>
        <div className={s.chamaeleon}>
          <div className={s.imgC}>
            <MaskedScale>
              <CustomImage
                src="/img/chamaeleon-on-hill.jpg"
                alt="Chamaeleon On Hill"
                loading="lazy"
                height={750}
                width={750}
                style={{ objectFit: "contain" }}
              />
            </MaskedScale>
          </div>
          <div className={s.imgC}>
            <CustomImage
              src="/img/logo-mantis.png"
              alt="Mantis Logo"
              loading="lazy"
              height={1176}
              width={682}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className={s.text}>
          <h2>MANTIS - OUR SUPERPOWER</h2>
          <h3>CHAMAELEON’S AI-DRIVEN INVESTMENT STRATEGY.</h3>
          <p>
            Chamaeleon&apos;s investment strategy is powered by our proprietary AI and quantitative engine, which
            analyzes millions of companies across thousands of data points per company.
          </p>
          <Button text="SEE MORE" path={`/${routes.superpower.path}`} size="md" />
        </div>
      </section>

      <section className={s.kin}>
        <h4>
          <span>CHAMAELEON&apos;S VISION</span>
          <span>FOR VALUE-ADD GROWTH.</span>
        </h4>
        <div>
          <div className={s.text}>
            <p>
              We partner with exceptional people who are aligned with us on values, have worked or have done business
              with us, and believe that entrepreneurship can create massive opportunities and impact for everyone. They
              are part of our family… they are <strong>KIN</strong>.
            </p>
            <Button text="MEET OUR COMMUNITY" path={`/${routes.kin.path}`} size="md" />
          </div>

          <div className={s.imgs}>
            <div className={s.imgC}>
              <MaskedScale>
                <CustomImage
                  src="/img/kin-1.png"
                  alt="Team at Event"
                  loading="lazy"
                  height={823}
                  width={1854}
                  style={{ objectFit: "cover" }}
                />
              </MaskedScale>
            </div>
            <div className={s.imgC}>
              <MaskedScale>
                <CustomImage
                  src="/img/kin-2.png"
                  alt="Team at Event"
                  loading="lazy"
                  height={667}
                  width={998}
                  style={{ objectFit: "cover" }}
                />
              </MaskedScale>
            </div>
            <div className={s.imgC}>
              <CustomImage
                src="/img/logo-kin-community.png"
                alt="Kin Logo"
                loading="lazy"
                height={491}
                width={904}
                style={{ objectFit: "contain" }}
              />
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
