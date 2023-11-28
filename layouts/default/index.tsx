import { ReactNode } from "react"

import cn from "clsx"
import { useMediaQuery } from "usehooks-ts"

import FooterReveal from "@/components/animations/footer-reveal"
import Footer from "@/components/footer"
import Header from "@/components/header"

import { breakpoints } from "@/lib/utils"

type Props = {
  children: ReactNode
  theme?: "main" | "mantis"
}

const DefaultLayout = ({ children, theme = "main" }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)

  return (
    <>
      <div className={cn("layout", `theme-${theme}`)}>
        <Header />
        <main>{children}</main>
      </div>

      {isMobile ? (
        <Footer />
      ) : (
        <FooterReveal>
          <Footer />
        </FooterReveal>
      )}
    </>
  )
}

export default DefaultLayout
