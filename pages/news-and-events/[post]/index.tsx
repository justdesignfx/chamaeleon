import React, { useState } from "react"
import s from "./post.module.scss"

import cn from "clsx"

import DefaultLayout from "@/layouts/default"
import { apiClient } from "@/api"
import { GetServerSideProps } from "next"
import { IPost } from "@/constants"
import IconClock from "@/components/icons/icon-clock"
import { breakpoints, shareOnSocialMedia } from "@/lib/utils"
import { useMediaQuery } from "usehooks-ts"
import IconLinkedin from "@/components/icons/icon-linkedin"
import { Marquee } from "@/components/marquee"

type ComponentList = "Image" | "Text" | any

type ObjectKey = keyof typeof Components

interface PostComponent {
  id?: number
  componentName: ComponentList
  data?: any
  [key: string]: unknown
}

export const Components = {
  Image,
  Text,
}

type Props = IPost

const Detail = (props: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`)
  const [copied, setCopied] = useState(false)

  console.log("post", props)

  function handleShare() {
    shareOnSocialMedia()
    setCopied(true)

    const timeout = setTimeout(() => {
      setCopied(false)
      clearTimeout(timeout)
    }, 500)
  }

  function renderBlog(data?: typeof props): React.ReactNode {
    // Don't render anything if the payload is falsey.
    if (!data) return null

    function createComponent(item: typeof props): React.ReactNode {
      const { data, componentName, id } = item

      if (!data) {
        return React.createElement(Components[componentName as ObjectKey] as any)
      }

      const { components, ...rest } = data

      if (!Components[componentName as ObjectKey]) return

      const el = React.createElement(
        // TODO: This can be improved
        Components[componentName as ObjectKey] as any,
        {
          // Pass all the props coming from the data object.
          ...rest,
          id,
          // Make each react key unique
          key: id,
        } as any,
        // Map if there are components, if not try to render the embedded view as children
        Array.isArray(components) ? components.map(renderer) : renderer(null)
      )

      return React.createElement("div", { className: "post-item" }, el)
    }

    // Don't render anything if the payload is falsey.
    function renderer(config: typeof props | null): React.ReactNode {
      if (!config) return null

      return createComponent(config)
    }

    return renderer(data)
  }

  return (
    <DefaultLayout>
      <>
        <section className={s.intro}>
          <div className={s.info}>
            <div className={s.text}>
              <small className={s.pre}>
                <span className={s.date}>{props.date}</span>
              </small>
              <h1 className={s.title}>{props.title}</h1>
            </div>
            <div className={s.actions}>
              <small className={s.readingTime}>
                <div className={s.iconC}>
                  <IconClock fill={"var(--caribbean-green)"} />
                </div>
                {props.readingTime}
              </small>
              <div className={s.social}>
                <div className={cn(s.iconC, "cursor-pointer", { [s.show]: copied })} onClick={handleShare}>
                  {!isMobile && <div className={cn(s.popover, { [s.show]: copied })}>Link Copied!</div>}
                  <IconLinkedin fill={"var(--caribbean-green)"} />
                </div>
                <a
                  className={cn(s.iconC, "cursor-pointer")}
                  href={`https://twitter.com/share?url=https://producture.justdesignfx.com${location.pathname}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconLinkedin fill={"var(--caribbean-green)"} />
                </a>
                <a
                  className={cn(s.iconC, "cursor-pointer")}
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://producture.justdesignfx.com${location.pathname}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconLinkedin fill={"var(--caribbean-green)"} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>{renderBlog(props)}</section>

        <section className={s.marqueeC}>
          <Marquee repeat={3} duration={20}>
            <h1 className={s.marqueeText}>NEXT POST</h1>
          </Marquee>
        </section>
      </>
    </DefaultLayout>
  )
}

export default Detail

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await apiClient.get("/newsAndEvents.php", {
    params: {
      url: context.query.post,
    },
  })

  const post = await res.data

  return {
    props: {
      post,
    },
  }
}
