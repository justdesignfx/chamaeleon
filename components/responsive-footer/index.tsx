import { breakpoints } from "@/lib/utils"
import { useMediaQuery } from "usehooks-ts"

import { FooterReveal } from "@/components/animations/footer-reveal"
import { Footer } from "@/components/footer"
import { ClientOnly } from "@/hocs/isomorphic"

const ResponsiveFooter = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile}px)`)

  return (
    <>
      {isMobile ? (
        <Footer />
      ) : (
        <ClientOnly>
          <FooterReveal>
            <Footer />
          </FooterReveal>
        </ClientOnly>
      )}
    </>
  )
}

export { ResponsiveFooter }
