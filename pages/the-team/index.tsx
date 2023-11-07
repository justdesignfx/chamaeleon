import React from "react"
import s from "./team.module.scss"
import DefaultLayout from "@/layouts/default"
import Header from "@/components/header"

type Props = {}

const TheTeam = (props: Props) => {
  return (
    <DefaultLayout>
      <Header />

      <section className={s.intro}>
        <h1>THE TEAM</h1>
      </section>
    </DefaultLayout>
  )
}

export default TheTeam
