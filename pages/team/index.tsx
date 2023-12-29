import { Fragment } from "react"

import s from "./team.module.scss"

import { useMediaQuery } from "usehooks-ts"

import { Parallax } from "@/components/animations/parallax"
import { Reveal } from "@/components/animations/reveal"
import { CallToPage } from "@/components/call-to-page"
import { CardInfo } from "@/components/card-info"
import { CardPerson } from "@/components/card-person"
import { CustomImage } from "@/components/custom-image"
import { SliderDetailedInfo } from "@/components/slider-detailed-info"

import { all } from "@/api/queries/team"
import { routes } from "@/constants"
import { DefaultLayout } from "@/layouts/default"
import { useModalStore } from "@/lib/store/modal"
import { breakpoints } from "@/lib/utils"
import { CardPersonProps } from "@/types"

import bale from "@/public/img/bale.png"
import { useCursorStore } from "@/lib/store/cursor"
import { ClientOnly } from "@/hocs/isomorphic"

type Props = {
  team: CardPersonProps[]
}

const Team = ({ team: members }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile}px)`)
  const modalStore = useModalStore()
  const cursorStore = useCursorStore()

  function handleModal(index: number) {
    cursorStore.setCursor("default")

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
    <DefaultLayout seo={{ ...routes.team.seo }}>
      <section className={s.intro}>
        <h1>TEAM</h1>
      </section>

      <section className={s.members}>
        {members.map((item, i) => {
          return (
            <div key={i}>
              <ClientOnly>
                <Reveal>
                  <CardPerson {...item} toggleDetail={() => handleModal(i)} />
                </Reveal>
              </ClientOnly>
            </div>
          )
        })}
      </section>

      <section className={s.achievements}>
        <div className={s.boxes}>
          <div>
            <h5>60+</h5>
            <p>Investments led and executed to date.</p>
          </div>
          <div>
            <h5>40+</h5>
            <p>Countries, a vast network of deep relationships.</p>
          </div>
          <div>
            <h5>500+</h5>
            <p>
              people managed, <span>$100m+</span> yearly budgets.
            </p>
          </div>
          <div>
            <h5>
              TOP 2 <span>TO</span> 5
            </h5>
            <p>Percentile returns as VC investors.</p>
          </div>
        </div>

        <ClientOnly>
          <div className={s.imgC}>
            <Parallax speedX={0} directionY={-1} speedY={0.25}>
              <div>
                <CustomImage src={bale} alt="Dollar Bale Illustration" />
              </div>
            </Parallax>
          </div>
        </ClientOnly>
      </section>

      <CallToPage
        text="Discover our investment style"
        btnText="APPROACH"
        href={routes.approach.path}
        ariaLabel={routes.approach.ariaLabel}
      />
    </DefaultLayout>
  )
}

export default Team

export async function getServerSideProps() {
  const team = await all()
  return { props: { team } }
}
