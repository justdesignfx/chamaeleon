import React, { useRef, useState } from "react"
import s from "./news-and-events.module.scss"

import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
import { ScrollTrigger, gsap } from "@/lib/gsap"

import DefaultLayout from "@/layouts/default"
import Searchbox from "@/components/searchbox"
import Sort from "@/components/sort"
import { IOption } from "@/constants"
import { useAll } from "@/api/queries/news-and-events"

const LIMIT = 10

type Props = {}

const NewsAndEvents = (props: Props) => {
  const ref = useRef(null)
  const [limit, setLimit] = useState(LIMIT)
  const [keyword, setKeyword] = useState("")
  const [sort, setSort] = useState<IOption | null>(null)
  const { data } = useAll(limit, keyword, sort)

  // infinite fetch
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const selector = self.selector
      if (!selector) return

      ScrollTrigger.create({
        start: "top center",
        end: "bottom center",
        id: "infinite",
        markers: true,
        trigger: selector(".list"),
        onLeave: () => {
          setLimit((prev) => prev + LIMIT)
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <DefaultLayout>
      <div className={s.newsAndEvents} ref={ref}>
        <div className={s.title}>
          <h1>Where Every Gathering Becomes a Memorable Experience.</h1>
        </div>
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
          <div className={cn(s.list, "list")}>
            {data &&
              data.map((item) => {
                return <div>item</div>
              })}
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default NewsAndEvents
