import { ReactNode } from "react"
import s from "./default-layout.module.scss"

import cn from "clsx"

type Props = {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return <div className={cn(s.default, "theme-main")}>{children}</div>
}

export default DefaultLayout
