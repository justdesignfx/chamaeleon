import { useRef, useState } from "react"
import s from "./news-and-events.module.scss"

import { ScrollTrigger, gsap } from "@/lib/gsap"
import cn from "clsx"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { Searchbox } from "@/components/searchbox"
import { Sort } from "@/components/sort"
import { DefaultLayout } from "@/layouts/default"

import { apiClient } from "@/api"
import { CardPostProps, OptionProps } from "@/types"

const LIMIT = 10

type Props = {
  posts: CardPostProps[]
}

const NewsAndEvents = ({ posts }: Props) => {
  const router = useRouter()
  const ref = useRef(null)
  const [limit, setLimit] = useState(LIMIT)
  const [keyword, setKeyword] = useState("")
  const [sort, setSort] = useState<OptionProps | null>(null)

  useIsomorphicLayoutEffect(() => {
    router.push(
      {
        pathname: "/news-and-events",
        query: {
          ...(limit && { limit }),
          ...(keyword && { keyword }),
          ...(sort && { sort: sort?.value }),
        },
      },
      "/news-and-events"
    )
  }, [keyword, limit, sort])

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
            {/* {posts.length &&
              posts.map((item) => {
                return <div>{item.title}</div>
              })} */}
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default NewsAndEvents

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await apiClient.get("/newsAndEvents.php", {
    params: {
      ...context.query,
    },
  })

  const posts = await res.data

  return {
    props: {
      posts,
    },
  }
}
