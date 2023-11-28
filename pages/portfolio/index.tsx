import s from "./portfolio.module.scss"

import cn from "clsx"

import CardCompanyDetail from "@/components/card-company-detail"
import CompanyBox from "@/components/company-box"
import CustomImage from "@/components/custom-image"
import SliderCompanyDetail from "@/components/slider-company-detail"

import { all } from "@/api/queries/portfolio"
import CallToPage from "@/components/call-to-page"
import { ICompanyBox, routes } from "@/constants"
import DefaultLayout from "@/layouts/default"
import { useModalStore } from "@/lib/store/modal"

type Props = {
  companies: {
    latest: ICompanyBox[]
    prior: ICompanyBox[]
  }
}

const Portfolio = ({ companies }: Props) => {
  const modalStore = useModalStore()

  function handleModal(id: ICompanyBox["id"]) {
    const allCompanies = [...companies.latest, ...companies.prior]
    const index = allCompanies.findIndex((value) => {
      return value.id === id
    })

    modalStore.setContent(
      <SliderCompanyDetail
        currentSlide={index}
        slides={allCompanies.map((item, i) => {
          return (
            <div className={s.slide} key={i}>
              <CardCompanyDetail {...item} />
            </div>
          )
        })}
      />
    )
  }

  return (
    <DefaultLayout>
      <section className={s.intro}>
        <h1>
          OUR LATEST ANNOUNCED INVESTMENTS.
          <span>
            <CustomImage
              src="/img/megaphone.png"
              alt="Megaphone Illustration"
              style={{ objectFit: "contain" }}
              height={278}
              width={347}
            />
          </span>
        </h1>
        <div className={s.companies}>
          {companies.latest.map((item, i) => {
            return (
              <div className={cn(s.boxC, "cursor-pointer")} key={i} onClick={() => handleModal(item.id)}>
                <div>
                  <CompanyBox {...item} />
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className={s.prior}>
        <h2>SOME OF OUR PRIOR INVESTMENTS.</h2>
        <div className={s.companies}>
          {companies.prior.map((item, i) => {
            return (
              <div className={cn(s.boxC, "cursor-pointer")} key={i} onClick={() => handleModal(item.id)}>
                <div>
                  <CompanyBox key={i} {...item} />
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className={s.toTheTeam}>
        <div className={cn(s.imgC, s.left)}>
          <CustomImage
            src="/img/cactus.png"
            alt="Cactus Doodle"
            style={{ objectFit: "contain" }}
            height={659}
            width={544}
          />
        </div>
        <div className={cn(s.imgC, s.right)}>
          <CustomImage
            src="/img/chamaeleon-face.png"
            alt="Chamaeleon Face"
            style={{ objectFit: "contain" }}
            height={340}
            width={363}
          />
        </div>
        <CallToPage text="Get to know about us" btnText="TEAM" href={routes.team.path} />
      </section>
    </DefaultLayout>
  )
}

export default Portfolio

export async function getStaticProps() {
  const companies = await all()
  return { props: { companies } }
}
