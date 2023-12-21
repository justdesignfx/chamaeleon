import { breakpoints } from "@/lib/utils"
import { useIsomorphicLayoutEffect, useMediaQuery } from "usehooks-ts"

import { FooterReveal } from "@/components/animations/footer-reveal"
import { Footer } from "@/components/footer"
import { ScrollTrigger } from "@/lib/gsap"
import { ClientOnly } from "@/hocs/isomorphic"

const ResponsiveFooter = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile}px)`)

  useIsomorphicLayoutEffect(() => {
    ScrollTrigger.refresh()
  })

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
