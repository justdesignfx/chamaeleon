import s from "./kin.module.scss"

import cn from "clsx"

import { Reveal } from "@/components/animations/reveal"
import { CardInfo } from "@/components/card-info"
import { CardPerson } from "@/components/card-person"
import { CustomImage } from "@/components/custom-image"
import { LayeredImages } from "@/components/layered-images"
import { Marquee } from "@/components/marquee"
import { SliderDetailedInfo } from "@/components/slider-detailed-info"

import { all } from "@/api/queries/kin"
import { DefaultLayout } from "@/layouts/default"
import { useModalStore } from "@/lib/store/modal"
import { CardPersonProps } from "@/types"

import logoKin from "@/public/img/logo-kin-community.png"

type Props = {
  members: CardPersonProps[]
}

export const Kin = ({ members }: Props) => {
  const modalStore = useModalStore()

  function handleModal(index: number) {
    modalStore.setContent(
      <SliderDetailedInfo
        currentSlide={index}
        slides={members.map((member, i) => {
          return (
            <div className={s.modalSlide} key={i}>
              <CardInfo {...member} />
            </div>
          )
        })}
      />
    )
  }

  return (
    <DefaultLayout>
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

      {/* <section className={s.members}>
        <div className="desktop-only">
          <div className={cn(s.content, s.desktop)}>
            {members.map((item, i) => {
              return (
                <Reveal key={i}>
                  <div>
                    <CardPerson {...item} toggleDetail={() => handleModal(i)} />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
        <div className="mobile-only">
          <div className={cn(s.content, s.mobile)}>
            <EmblaCarousel
              slides={members.map((item, i) => {
                return (
                  <div className={s.slide} key={i}>
                    <CardPerson {...item} toggleDetail={() => handleModal(i)} />
                  </div>
                )
              })}
              prevButton={
                <div className={s.btn}>
                  <IconArrow fill="var(--nightly-woods)" rotate={180} />
                </div>
              }
              nextButton={
                <div className={s.btn}>
                  <IconArrow fill="var(--nightly-woods)" />
                </div>
              }
            />
          </div>
        </div>
      </section> */}

      <div className={s.members}>
        {members.map((item, i) => {
          return (
            <Reveal key={i}>
              <CardPerson {...item} toggleDetail={() => handleModal(i)} />
            </Reveal>
          )
        })}
      </div>
    </DefaultLayout>
  )
}

export default Kin

export async function getServerSideProps() {
  const members = await all()
  return { props: { members } }
}
