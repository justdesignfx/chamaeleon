import s from "./portfolio.module.scss"

import cn from "clsx"

import { CardCompanyDetail } from "@/components/card-company-detail"
import { CompanyBox } from "@/components/company-box"
import { CustomImage } from "@/components/custom-image"
import { SliderCompanyDetail } from "@/components/slider-company-detail"
import { CallToPage } from "@/components/call-to-page"

import { all } from "@/api/queries/portfolio"
import DefaultLayout from "@/layouts/default"
import { useModalStore } from "@/lib/store/modal"
import { CompanyBoxProps } from "@/types"
import { routes } from "@/constants"

import megaphone from "@/public/img/megaphone.png"
import cactus from "@/public/img/cactus.png"
import face from "@/public/img/chamaeleon-face.png"

type Props = {
  companies: {
    latest: CompanyBoxProps[]
    prior: CompanyBoxProps[]
  }
}

const Portfolio = ({ companies }: Props) => {
  const modalStore = useModalStore()

  function handleModal(id: CompanyBoxProps["id"]) {
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
            <CustomImage src={megaphone} alt="Megaphone Illustration" style={{ objectFit: "contain" }} />
          </span>
        </h1>
        <div className={s.companies}>
          {companies.latest.map((item, i) => {
            return (
              <div className={cn(s.boxC, "flex-center", "cursor-pointer")} key={i} onClick={() => handleModal(item.id)}>
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
              <div className={cn(s.boxC, "flex-center", "cursor-pointer")} key={i} onClick={() => handleModal(item.id)}>
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
          <CustomImage src={cactus} alt="Cactus Doodle" style={{ objectFit: "contain" }} />
        </div>
        <div className={cn(s.imgC, s.right)}>
          <CustomImage src={face} alt="Chamaeleon Face" style={{ objectFit: "contain" }} />
        </div>
        <CallToPage text="Get to know about us" btnText="TEAM" href={routes.team.path} />
      </section>
    </DefaultLayout>
  )
}

export default Portfolio

export async function getServerSideProps() {
  const companies = await all()
  return { props: { companies } }
}
