import React from "react"
import s from "./team.module.scss"
import DefaultLayout from "@/layouts/default"
import Header from "@/components/header"
import { cardPerson } from "@/global"
import CardPerson from "@/components/card-person"
import CustomImage from "@/components/custom-image"
import Button from "@/components/button"

const TheTeam = () => {
  const members = [cardPerson, cardPerson, cardPerson, cardPerson, cardPerson, cardPerson]

  return (
    <DefaultLayout>
      <Header />
      <section className={s.intro}>
        <h1>THE TEAM</h1>
      </section>
      <section className={s.members}>
        {members.map((item, i) => {
          return <CardPerson key={i} {...item} />
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
          <div>
            <CustomImage src="/img/bale.png" alt="Dollar Bale" height="500" width="500" />
          </div>
        </div>
      </section>
      <section className={s.link}>
        <small>Discover our investment style</small>
        <Button text="APPROACH" path="/approach" size="lg" />
      </section>
    </DefaultLayout>
  )
}

export default TheTeam
