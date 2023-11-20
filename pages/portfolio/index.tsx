import s from "./portfolio.module.scss"

import cn from "clsx"

import Button from "@/components/button"
import CompanyBox from "@/components/company-box"
import CustomImage from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"
import { ICompanyBox } from "@/constants"
import DefaultLayout from "@/layouts/default"
import { all } from "@/api/queries/portfolio"

type Props = {
  companies: {
    latest: ICompanyBox[]
    prior: ICompanyBox[]
  }
}

const Portfolio = ({ companies }: Props) => {
  console.log(companies)

  // const companies: ICompanyBox[] = [
  //   companyBox,
  //   companyBox,
  //   companyBox,
  //   companyBox,
  //   companyBox,
  //   companyBox,
  //   companyBox,
  //   companyBox,
  //   companyBox,
  //   companyBox,
  //   companyBox,
  //   companyBox,
  // ]

  return (
    <DefaultLayout>
      {/* <Header /> */}

      <section className={s.intro}>
        <h1>
          OUR LATEST ANNOUNCED INVESTMENTS.
          <span>
            <CustomImage src="/img/megaphone.png" alt="Chamaeleon Face" style={{ objectFit: "contain" }} />
          </span>
        </h1>
        <div className={s.companies}>
          {companies.latest.map((item, i) => {
            return (
              <CustomLink href={item.url} className={s.boxC} key={i}>
                <CompanyBox {...item} />
              </CustomLink>
            )
          })}
        </div>
      </section>
      <section className={cn(s.priorInvestments, "island")}>
        <h2>
          OUR PRIOR INVESTMENTS.
          <span>
            <CustomImage src="/img/up.png" alt="Chamaeleon Face" style={{ objectFit: "contain" }} />
          </span>
        </h2>
        <div className={s.companies}>
          {companies.prior.map((item, i) => {
            return (
              <CustomLink href={item.url} className={s.boxC} key={i}>
                <CompanyBox key={i} {...item} />
              </CustomLink>
            )
          })}
        </div>
      </section>
      <section className={s.toTheTeam}>
        <div className={cn(s.imgC, s.left)}>
          <CustomImage src="/img/cactus.png" alt="Cactus Doodle" style={{ objectFit: "contain" }} />
        </div>
        <div className={cn(s.imgC, s.right)}>
          <CustomImage src="/img/chamaeleon-face.png" alt="Chamaeleon Face" style={{ objectFit: "contain" }} />
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

export async function getStaticProps() {
  const companies = await all()
  return { props: { companies } }
}
