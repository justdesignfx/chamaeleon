import s from "./portfolio.module.scss"

import cn from "clsx"

import Button from "@/components/button"
import CompanyBox from "@/components/company-box"
import CustomImage from "@/components/custom-image"
import { ICompanyBox, companyBox } from "@/global"
import DefaultLayout from "@/layouts/default"

type Props = {}

const Portfolio = (props: Props) => {
  const companies: ICompanyBox[] = [
    companyBox,
    companyBox,
    companyBox,
    companyBox,
    companyBox,
    companyBox,
    companyBox,
    companyBox,
    companyBox,
    companyBox,
    companyBox,
    companyBox,
  ]

  return (
    <DefaultLayout>
      {/* <Header /> */}

      <section className={s.intro}>
        <h1>
          OUR LATEST ANNOUNCED INVESTMENTS.
          <span>
            <CustomImage src="/img/megaphone.png" alt="Chamaeleon Face" height="500" width="500" objectFit="contain" />
          </span>
        </h1>
        <div className={s.companies}>
          {companies.map((item, i) => {
            return <CompanyBox key={i} {...item} />
          })}
        </div>
      </section>
      <section className={cn(s.priorInvestments, "island")}>
        <h2>
          OUR PRIOR INVESTMENTS.
          <span>
            <CustomImage src="/img/up.png" alt="Chamaeleon Face" height="500" width="500" objectFit="contain" />
          </span>
        </h2>
        <div className={s.companies}>
          {companies.map((item, i) => {
            return <CompanyBox key={i} {...item} />
          })}
        </div>
      </section>
      <section className={s.toTheTeam}>
        <div className={cn(s.imgC, s.left)}>
          <CustomImage
            src="/img/cactus.png"
            alt="Cactus Doodle"
            height="500"
            width="500"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={cn(s.imgC, s.right)}>
          <CustomImage
            src="/img/chamaeleon-face.png"
            alt="Chamaeleon Face"
            height="500"
            width="500"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={s.link}>
          <small>Get to know about us</small>
          <Button text="THE TEAM" path="/the-team" size="lg" />
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Portfolio
