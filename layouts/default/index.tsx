import { ReactNode } from "react"

import cn from "clsx"
import { useRouter } from "next/router"

import FadeInOut from "@/components/animations/fade-in-out"
import { CustomHead } from "@/components/custom-head"
import { ResponsiveFooter } from "@/components/responsive-footer"

import { Seo } from "@/types"

type Props = {
  children: ReactNode
  theme?: "main" | "mantis"
  seo: Seo
}

const DefaultLayout = ({ children, theme = "main", seo }: Props) => {
  const router = useRouter()

  return (
    <>
      <CustomHead
        {...(seo &&
          Object.assign(seo, {
            canonical: `https://chamaeleon.vc${router.pathname}`,
            keywords: [
              "venture capital",
              "startup",
              "investment",
              "chamaeleon",
              "silicon walley",
              "finance",
              "technology",
            ],
          }))}
      />
      <div className={cn("layout", `theme-${theme}`)}>
        <FadeInOut durationIn={0.5} durationOut={0.5}>
          <div></div>
        </FadeInOut>
        <main>{children}</main>
      </div>
      <ResponsiveFooter />
    </>
  )
}

export { DefaultLayout }
