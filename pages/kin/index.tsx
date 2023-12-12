import { Fragment } from "react"
import s from "./kin.module.scss"

import cn from "clsx"
import { useMediaQuery } from "usehooks-ts"

import { Reveal } from "@/components/animations/reveal"
import { CardInfo } from "@/components/card-info"
import { CardPerson } from "@/components/card-person"
import { CustomImage } from "@/components/custom-image"
import { LayeredImages } from "@/components/layered-images"
import { Marquee } from "@/components/marquee"
import { SliderDetailedInfo } from "@/components/slider-detailed-info"

import { all } from "@/api/queries/kin"
import { routes } from "@/constants"
import { DefaultLayout } from "@/layouts/default"
import { useModalStore } from "@/lib/store/modal"
import { breakpoints } from "@/lib/utils"
import { CardPersonProps } from "@/types"

import logoKin from "@/public/img/logo-kin-community.png"

type Props = {
  members: CardPersonProps[]
}

export const Kin = ({ members }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile}px)`)
  const modalStore = useModalStore()

  function handleModal(index: number) {
    const items = members.map((member, i) => {
      return (
        <Fragment key={i}>
          {isMobile ? (
            <>
              {i === index && (
                <div className={s.modalSlide}>
                  <CardInfo {...member} />
                </div>
              )}
            </>
          ) : (
            <div className={s.modalSlide}>
              <CardInfo {...member} />
            </div>
          )}
        </Fragment>
      )
    })

    modalStore.setContent(<SliderDetailedInfo currentSlide={index} slides={items} />)
  }

  return (
    <DefaultLayout seo={{ ...routes.kin.seo }}>
      <section className={s.intro}>
        <h1>CHAMAELEON'S VISION FOR VALUE-ADD GROWTH.</h1>

        <p>
          We partner with exceptional individuals who share our values, have worked with us, or have done business
          alongside us. They believe in the potential of entrepreneurship to create vast opportunities and positive
          impacts for all. To us, they are not just partners; they are part of our family...
        </p>

        <div className={cn(s.marquee, s.rotated)}>
          <Marquee duration={30}>
            <>
              <h5>KIN COMMUNITY</h5>
              <h5>KIN COMMUNITY</h5>
              <h5>KIN COMMUNITY</h5>
            </>
          </Marquee>
        </div>

        <h2>...AND WE PROUDLY REFER TO THEM AS OUR...</h2>

        <div className={s.imgC}>
          <CustomImage src={logoKin} alt="Kin Logo" style={{ objectFit: "contain" }} />
        </div>

        <h2>BELOW, A NON-EXHAUSTIVE LIST OF MEMBERS OF KIN COMMUNITY. MEMBERSHIP IS INVITE-ONLY.</h2>

        <LayeredImages />

        <div className={s.marquee}>
          <Marquee duration={30}>
            <>
              <h5>KIN COMMUNITY</h5>
              <h5>KIN COMMUNITY</h5>
            </>
          </Marquee>
        </div>
      </section>

      <section className={s.members}>
        {members.map((item, i) => {
          return (
            <Reveal key={i}>
              <CardPerson {...item} toggleDetail={() => handleModal(i)} />
            </Reveal>
          )
        })}
      </section>
    </DefaultLayout>
  )
}

export default Kin

export async function getServerSideProps() {
  const members = await all()
  return { props: { members } }
}
