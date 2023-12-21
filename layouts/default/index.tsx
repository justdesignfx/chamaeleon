import { ReactNode } from "react"

import cn from "clsx"
import { useRouter } from "next/router"

import { CustomHead } from "@/components/custom-head"
import { ResponsiveFooter } from "@/components/responsive-footer"

import { Seo } from "@/types"
import { PageTransitionLayout } from "@/layouts/page-transition"
import { ClientOnly } from "@/hocs/isomorphic"

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
      <PageTransitionLayout>
        <main className={cn("layout", `theme-${theme}`)}>{children}</main>
        <ClientOnly>
          <ResponsiveFooter />
        </ClientOnly>
      </PageTransitionLayout>
    </>
  )
}

export { DefaultLayout }
