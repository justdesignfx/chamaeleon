import { breakpoints } from "@/lib/utils"
import { useMediaQuery } from "usehooks-ts"

import { FooterReveal } from "@/components/animations/footer-reveal"
import { Footer } from "@/components/footer"

const ResponsiveFooter = () => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile}px)`)

  return (
    <div>
      {isMobile ? (
        <Footer />
      ) : (
        <FooterReveal>
          <Footer />
        </FooterReveal>
      )}
    </div>
  )
}

export { ResponsiveFooter }
