import { useRef, useState } from "react"
import s from "./news-and-events.module.scss"

import { ScrollTrigger, gsap } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { CardPost } from "@/components/card-post"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Searchbox } from "@/components/searchbox"
import { Sort } from "@/components/sort"
import { DefaultLayout } from "@/layouts/default"

import { useAll } from "@/api/queries/news-and-events"
import { ClientOnly } from "@/hocs/isomorphic"
import { OptionProps } from "@/types"

const LIMIT = 10

const NewsAndEvents = () => {
  const ref = useRef(null)

  const [limit, setLimit] = useState(LIMIT)
  const [keyword, setKeyword] = useState("")
  const [sort, setSort] = useState<OptionProps | null>(null)
  const { data: posts, isLoading } = useAll(limit, keyword, sort)

  console.log("posts", posts)

  // infinite fetch
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const selector = self.selector
      if (!selector) return

      ScrollTrigger.create({
        markers: true,
        start: "top center",
        end: "bottom center",
        id: "infinite",
        trigger: selector(".list"),
        onLeave: () => {
          return
          setLimit((prev) => prev + LIMIT)
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  useIsomorphicLayoutEffect(() => {
    ScrollTrigger.refresh()
  }, [posts])

  return (
    <DefaultLayout>
      <div className={s.newsAndEvents} ref={ref}>
        <div className={s.title}>
          <h1>Where Every Gathering Becomes a Memorable Experience.</h1>
        </div>
        <ClientOnly>
          <div className={s.items}>
            <div className={s.filter}>
              <div>
                <Sort
                  label="SORT BY"
                  sort={sort}
                  setSort={setSort}
                  options={[
                    { label: "Newest to Latest", value: "NEWEST_TO_LATEST" },
                    { label: "Latest to Newest", value: "LATEST_TO_NEWEST" },
                  ]}
                />
              </div>
              <div>
                <Searchbox keyword={keyword} setKeyword={setKeyword} />
              </div>
            </div>
            {isLoading ? (
              <div className={cn(s.loadingScreen, "flex-center")}>
                <LoadingSpinner />
              </div>
            ) : (
              <>
                {posts ? (
                  <div className={cn(s.list, "list")}>
                    {posts?.map((item) => {
                      return (
                        <div key={item.id}>
                          <CardPost {...item} />
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className={cn(s.loadingScreen, "flex-center")}>CONTENT NOT FOUND</div>
                )}
              </>
            )}
          </div>
        </ClientOnly>
      </div>
    </DefaultLayout>
  )
}

export default NewsAndEvents
