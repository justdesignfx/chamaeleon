import { ReactNode } from "react"
import s from "./default-layout.module.scss"

import cn from "clsx"
import Header from "@/components/header"
import Footer from "@/components/footer"

type Props = {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <div className={cn(s.default, "theme-main")}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default DefaultLayout
