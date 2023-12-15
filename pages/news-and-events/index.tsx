import s from "./news-and-events.module.scss"

import PostCards from "@/components/post-cards"

import { routes } from "@/constants/index"
import { ClientOnly } from "@/hocs/isomorphic"
import { DefaultLayout } from "@/layouts/default"

const NewsAndEvents = () => {
  return (
    <DefaultLayout seo={{ ...routes.newsAndEvents.seo }}>
      <div className={s.newsAndEvents}>
        <div className={s.title}>
          <h1>Where Every Gathering Becomes a Memorable Experience.</h1>
        </div>
        <ClientOnly>
          <PostCards />
        </ClientOnly>
      </div>
    </DefaultLayout>
  )
}

export default NewsAndEvents
