import { ReactNode } from "react"

import cn from "clsx"
import { useMediaQuery } from "usehooks-ts"

import FooterReveal from "@/components/animations/footer-reveal"
import Footer from "@/components/footer"
import Header from "@/components/header"

import { breakpoints } from "@/lib/utils"
import { ClientOnly } from "@/hocs/isomorphic"

type Props = {
  children: ReactNode
  theme?: "main" | "mantis"
}

const DefaultLayout = ({ children, theme = "main" }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile}px)`)

  console.log(isMobile)

  return (
    <>
      <div className={cn("layout", `theme-${theme}`)}>
        <Header />
        <main>{children}</main>
      </div>

      <ClientOnly>
        {isMobile ? (
          <Footer />
        ) : (
          <FooterReveal>
            <Footer />
          </FooterReveal>
        )}
      </ClientOnly>
    </>
  )
}

export default DefaultLayout
