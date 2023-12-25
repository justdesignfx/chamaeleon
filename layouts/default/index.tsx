import { ReactNode } from "react"

import cn from "clsx"
import { useRouter } from "next/router"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { CustomHead } from "@/components/custom-head"
import { ResponsiveFooter } from "@/components/responsive-footer"

import { ClientOnly } from "@/hocs/isomorphic"
import { Seo } from "@/types"
import { useLenisStore } from "@/lib/store/lenis"

type Props = {
  children: ReactNode
  theme?: "main" | "mantis"
  seo: Seo
  footer: boolean
}

const DefaultLayout = ({ children, theme = "main", seo, footer = true }: Props) => {
  const router = useRouter()
  const lenisStore = useLenisStore()

  useIsomorphicLayoutEffect(() => {
    lenisStore.setReset(true)
  }, [])

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
      {footer && (
        <ClientOnly>
          <ResponsiveFooter />
        </ClientOnly>
      )}
    </>
  )
}

export { DefaultLayout }
