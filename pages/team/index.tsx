import { useEffect, useState } from "react"
import s from "./team.module.scss"

import cn from "clsx"

import { all } from "@/api/queries/team"
import Parallax from "@/components/animations/parallax"
import Reveal from "@/components/animations/reveal"
import Button from "@/components/button"
import CardInfo from "@/components/card-info"
import CardPerson from "@/components/card-person"
import CustomImage from "@/components/custom-image"
import DetailSlider from "@/components/detail-slider"
import { ICardPerson } from "@/constants"
import DefaultLayout from "@/layouts/default"
import { useModalStore } from "@/lib/store/modal"

type Props = {
  team: ICardPerson[]
}

const Team = ({ team }: Props) => {
  const modalStore = useModalStore()
  const [selected, setSelected] = useState<number | null>(null)

  const handleModal = (index: number) => {
    setSelected(index)
  }

  useEffect(() => {
    if (selected === null) return

    modalStore.setContent(
      <DetailSlider
        currentSlide={selected}
        slides={team.map((member, i) => {
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
        <h1>THE TEAM</h1>
      </section>

      <section className={s.members}>
        {team.map((item, i) => {
          return (
            <div key={i} onClick={() => handleModal(i)}>
              <Reveal>
                <CardPerson {...item} />
              </Reveal>
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
            <h5>TOP 2 TO 5</h5>
            <p>Percentile returns as VC investors.</p>
          </div>
        </div>

        <div className={s.imgC}>
          <Parallax speedX={0} directionY={-1} speedY={0.25}>
            <div>
              <CustomImage src="/img/bale.png" alt="Dollar Bale" height="500" width="500" />
            </div>
          </Parallax>
        </div>
      </section>

      <section className={s.link}>
        <small>Discover our investment style</small>
        <Button text="APPROACH" path="/approach" size="lg" />
      </section>
    </DefaultLayout>
  )
}

export default Team

export async function getStaticProps() {
  const team = await all()
  return { props: { team } }
}
