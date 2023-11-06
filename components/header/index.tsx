import React from "react"
import s from "./header.module.scss"
import CustomImage from "@/components/custom-image"

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={s.header}>
      <div className={s.logoC}>
        <CustomImage src="/img/chamaeleon-logo.svg" alt="Logo" height="200" width="200" />
        <div className={s.hamburger}>MENU</div>
      </div>
    </header>
  )
}

export default Header
