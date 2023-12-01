import { useRef } from "react"
import s from "./kin.module.scss"

import { gsap, ScrollTrigger } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { all } from "@/api/queries/kin"
import Reveal from "@/components/animations/reveal"
import CardInfo from "@/components/card-info"
import CardPerson from "@/components/card-person"
import CustomImage from "@/components/custom-image"
import { Marquee } from "@/components/marquee"
import SliderDetailedInfo from "@/components/slider-detailed-info"

import EmblaCarousel from "@/components/embla-carousel"
import IconArrow from "@/components/icons/icon-arrow"
import DefaultLayout from "@/layouts/default"
import { useModalStore } from "@/lib/store/modal"
import { CardPersonProps } from "@/types"

import curtain from "@/public/img/kin-curtain.png"
import lunch from "@/public/img/kin-lunch.png"
import trip from "@/public/img/kin-trip.jpg"
import logoKin from "@/public/img/logo-kin-community.png"

type Props = {
  members: CardPersonProps[]
}

export const Kin = ({ members }: Props) => {
  const modalStore = useModalStore()
  const layeredImagesRef = useRef(null)
  const tl = useRef(gsap.timeline({ paused: true }))

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

  // layered images animation
  useIsomorphicLayoutEffect(() => {
    if (!layeredImagesRef.current) return

    const ctx = gsap.context((self) => {
      const selector = self.selector
      if (!selector) return

      selector(".layer").map((item: HTMLElement, i: number) => {
        if (i === 0) return
        gsap.set(item, {
          yPercent: 150 + i * 10,
          scale: 1 + i * 0.025,
        })
      })

      selector(".scale").map((item: HTMLElement, i: number) => {
        if (i === 0) return

        gsap.set(item, {
          scale: 2,
        })
      })

      tl.current = gsap.timeline({ paused: true })

      tl.current
        .to(
          selector(".layer")[1],
          {
            yPercent: 0,
            scale: 1,
          },
          "b"
        )
        .to(
          selector(".scale")[1],
          {
            scale: 1,
          },
          "b"
        )
        .to(
          selector(".layer")[2],
          {
            yPercent: 0,
            scale: 1,
          },
          "c"
        )
        .to(
          selector(".scale")[2],
          {
            scale: 1,
          },
          "c"
        )

      ScrollTrigger.create({
        id: "layered-images",
        animation: tl.current,
        end: "bottom+=2000px top",
        trigger: layeredImagesRef.current,
        scrub: true,
        pin: true,
        markers: true,
      })
    }, layeredImagesRef)

    return () => ctx.revert()
  }, [])

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

        <div className={s.layeredImages} ref={layeredImagesRef}>
          <div className={cn(s.layerC, "layer-c")}>
            <div className={cn(s.imgC, "layer")}>
              <div className={cn(s.scale, "scale")}>
                <CustomImage src={trip} alt="People Hanging Out" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
          <div className={cn(s.layerC, "layer-c")}>
            <div className={cn(s.imgC, "layer")}>
              <div className={cn(s.scale, "scale")}>
                <CustomImage src={curtain} alt="People Hanging Out" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
          <div className={cn(s.layerC, "layer-c")}>
            <div className={cn(s.imgC, "layer")}>
              <div className={cn(s.scale, "scale")}>
                <CustomImage src={lunch} alt="People Hanging Out" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>

        <h2>BELOW, A NON-EXHAUSTIVE LIST OF MEMBERS OF KIN COMMUNITY. MEMBERSHIP IS INVITE-ONLY.</h2>

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
      </section>
    </DefaultLayout>
  )
}

export default Kin

export async function getServerSideProps() {
  const members = await all()
  return { props: { members } }
}
