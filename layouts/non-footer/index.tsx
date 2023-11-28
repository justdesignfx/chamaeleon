import { ReactNode } from "react"

import cn from "clsx"

import Header from "@/components/header"

type Props = {
  children: ReactNode
  theme?: "main" | "mantis"
}

const NonFooter = ({ children, theme = "main" }: Props) => {
  return (
    <>
      <div className={cn("layout", `theme-${theme}`)}>
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}

export default NonFooter
