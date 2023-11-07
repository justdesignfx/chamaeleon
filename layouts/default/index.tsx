import React, { ReactNode } from "react"
import s from "./default-layout.module.scss"

import cn from "clsx"
import ScrollableBox from "@/components/scrollable-box"

type Props = {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <ScrollableBox>
      <div className={cn(s.default, "theme-main")}>{children}</div>
    </ScrollableBox>
  )
}

export default DefaultLayout
