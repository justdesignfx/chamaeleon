import { ClientOnly } from "@/hocs/isomorphic"
import { breakpoints } from "@/lib/utils"
import { useMediaQuery } from "usehooks-ts"
import { FooterReveal } from "../animations/footer-reveal"
import { Footer } from "../footer"

const ResponsiveFooter = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile}px)`)

  return (
    <ClientOnly>
      {isMobile ? (
        <Footer />
      ) : (
        <FooterReveal>
          <Footer />
        </FooterReveal>
      )}
    </ClientOnly>
  )
}

export { ResponsiveFooter }
