import { ReactNode } from "react"

import cn from "clsx"
import { useRouter } from "next/router"

import { CustomHead } from "@/components/custom-head"

import { Seo } from "@/types"

type Props = {
  children: ReactNode
  theme?: "main" | "mantis"
  seo: Seo
}

const NonFooterLayout = ({ children, theme = "main", seo }: Props) => {
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
      <main className={cn("layout", `theme-${theme}`)}>{children}</main>
    </>
  )
}

export { NonFooterLayout }
