import { useRef, useState } from "react"
import s from "./kin.module.scss"

import { gsap, ScrollTrigger } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { all } from "@/api/queries/kin"
import Reveal from "@/components/animations/reveal"
import CardInfo from "@/components/card-info"
import CardPerson from "@/components/card-person"
import CustomImage from "@/components/custom-image"
import DetailSlider from "@/components/detail-slider"
import { Marquee } from "@/components/marquee"
import { ICardPerson } from "@/constants"
import DefaultLayout from "@/layouts/default"
import { useModalStore } from "@/lib/store/modal"

type Props = {
  members: ICardPerson[]
}

const Community = ({ members }: Props) => {
  const modalStore = useModalStore()
  const [selected, setSelected] = useState<number | null>(null)

  const layeredImagesRef = useRef(null)
  const q = gsap.utils.selector(layeredImagesRef)
  const tl = useRef<gsap.core.Timeline | null>(null)

  useIsomorphicLayoutEffect(() => {
    if (!layeredImagesRef.current) return

    const ctx = gsap.context(() => {
      q(".layer").map((item, i) => {
        if (i === 0) return
        gsap.set(item, {
          yPercent: 100 + i * 10,
          scale: 1 + i * 0.01,
        })
      })

      q(".scale").map((item, i) => {
        if (i === 0) return

        gsap.set(item, {
          scale: 1.5,
        })
      })

      tl.current = gsap.timeline({ paused: true })

      tl.current
        .to(
          q(".layer")[1],
          {
            yPercent: 0,
            scale: 1,
          },
          "b"
        )
        .to(
          q(".scale")[1],
          {
            scale: 1,
          },
          "b"
        )
        .to(
          q(".layer")[2],
          {
            yPercent: 0,
            scale: 1,
          },
          "c"
        )
        .to(
          q(".scale")[2],
          {
            scale: 1,
          },
          "c"
        )

      ScrollTrigger.create({
        id: "layered-images",
        animation: tl.current,
        trigger: layeredImagesRef.current,
        scrub: true,
        pin: true,
        markers: true,
      })
    }, layeredImagesRef)

    return () => ctx.revert()
  }, [])

  function handleModal(index: number) {
    setSelected(index)
  }

  useIsomorphicLayoutEffect(() => {
    if (selected === null) return

    modalStore.setContent(
      <DetailSlider
        currentSlide={selected}
        slides={members.map((member, i) => {
          return (
            <div className={cn(s.slide, "flex-center")} key={i}>
              <CardInfo {...member} />
            </div>
          )
        })}
      />
    )
    modalStore.setIsOpen(true)
  }, [selected])

  return (
    <DefaultLayout>
      <section className={s.intro}>
        <h1>CHAMAELEON&apos;S VISION FOR VALUE-ADD GROWTH.</h1>

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
            </>
          </Marquee>
        </div>

        <h2>...AND WE PROUDLY REFER TO THEM AS OUR...</h2>

        <div className={s.imgC}>
          <CustomImage
            src="/img/logo-kin-community.png"
            alt="Kin Logo"
            style={{ objectFit: "contain" }}
            height={491}
            width={904}
          />
        </div>

        <div className={s.layeredImages} ref={layeredImagesRef}>
          <div className={cn(s.layerC, "layer-c")}>
            <div className={cn(s.imgC, "layer")}>
              <div className={cn(s.scale, "scale")}>
                <CustomImage
                  src="/img/kin-trip.jpg"
                  alt="People Hanging Out"
                  style={{ objectFit: "cover" }}
                  height={2000}
                  width={2000}
                />
              </div>
            </div>
          </div>
          <div className={cn(s.layerC, "layer-c")}>
            <div className={cn(s.imgC, "layer")}>
              <div className={cn(s.scale, "scale")}>
                <CustomImage
                  src="/img/kin-curtain.png"
                  alt="People Hanging Out"
                  style={{ objectFit: "cover" }}
                  height={2000}
                  width={2000}
                />
              </div>
            </div>
          </div>
          <div className={cn(s.layerC, "layer-c")}>
            <div className={cn(s.imgC, "layer")}>
              <div className={cn(s.scale, "scale")}>
                <CustomImage
                  src="/img/kin-lunch.png"
                  alt="People Hanging Out"
                  style={{ objectFit: "cover" }}
                  height={2000}
                  width={2000}
                />
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
        {members.map((item, i) => {
          return (
            <Reveal key={i}>
              <div onClick={() => handleModal(i)}>
                <CardPerson {...item} />
              </div>
            </Reveal>
          )
        })}
      </section>
    </DefaultLayout>
  )
}

export default Community

export async function getStaticProps() {
  const members = await all()
  return { props: { members } }
}
