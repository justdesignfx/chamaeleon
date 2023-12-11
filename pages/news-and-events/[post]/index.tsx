import s from "./post.module.scss"

import cn from "clsx"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

import { CustomImage } from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"
import { CustomPopover } from "@/components/custom-popover"
import IconClock from "@/components/icons/icon-clock"
import IconLinkedin from "@/components/icons/icon-linkedin"
import IconShare from "@/components/icons/icon-share"
import IconX from "@/components/icons/icon-x"
import { Marquee } from "@/components/marquee"
import { PostBody } from "@/components/post-body"

import { apiClient } from "@/api"
import { routes } from "@/constants"
import { DefaultLayout } from "@/layouts/default"
import { shareOnSocialMedia } from "@/lib/utils"
import { PostProps } from "@/types"
import IconArrowNext from "@/components/icons/icon-arrow-next"

type Props = PostProps

const Post = (props: Props) => {
  const router = useRouter()

  function handleShare() {
    shareOnSocialMedia()
  }

  return (
    <DefaultLayout seo={{ title: `News & Events | ${props.header.title}`, description: props.header.title }}>
      <section className={s.intro}>
        <div className={s.info}>
          <div className={s.breadcrumb}>
            <small>
              <CustomLink href={`/${routes.newsAndEvents.path}`}>NEWS & EVENTS</CustomLink>
            </small>
            <small className={s.separator}> / </small>
            <small>{props.header.title}</small>
          </div>

          <small className={s.date}>{props.header.date}</small>

          <h1 className={s.title}>{props.header.title}</h1>

          <div className={s.actions}>
            <small className={s.readingTime}>
              <div className={s.iconC}>
                <IconClock fill={"var(--electric-energy)"} />
              </div>
              {props.header.readingTime}
            </small>

            <div className={s.social}>
              <div className={cn(s.iconC, "cursor-pointer")} onClick={handleShare}>
                <CustomPopover>
                  <IconShare fill={"var(--nightly-woods)"} />
                </CustomPopover>
              </div>
              <CustomLink
                className={cn(s.iconC, "cursor-pointer")}
                href={`https://twitter.com/share?url=https://chamaeleon.vc${router.asPath}`}
              >
                <IconX fill={"var(--nightly-woods)"} />
              </CustomLink>
              <CustomLink
                className={cn(s.iconC, "cursor-pointer")}
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://chamaeleon.vc${router.asPath}`}
              >
                <IconLinkedin fill={"var(--nightly-woods)"} />
              </CustomLink>
            </div>
          </div>
        </div>

        <div className={s.bannerC}>
          <CustomImage
            alt="Post Banner"
            src={props.header.banner.desktop.src}
            height={parseFloat(props.header.banner.desktop.height)}
            width={parseFloat(props.header.banner.desktop.width)}
          />
        </div>
      </section>

      <section className={s.postBody}>
        <PostBody {...props} />
      </section>

      <CustomLink href={`/${routes.newsAndEvents.path}/${props.nextPost}`} className={cn(s.marquee, "cursor-pointer")}>
        <Marquee duration={30} repeat={2} inverted>
          <>
            <h5>NEXT NEWS & EVENT</h5>
            <div className={s.iconC}>
              <IconArrowNext fill="var(--nightly-woods)" />
            </div>
            <h5>NEXT NEWS & EVENT</h5>
            <div className={s.iconC}>
              <IconArrowNext fill="var(--nightly-woods)" />
            </div>
          </>
        </Marquee>
      </CustomLink>
    </DefaultLayout>
  )
}

export default Post

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await apiClient.get("/newsDetail.php", {
    params: {
      url: context.query.post,
    },
  })

  const post = await res.data

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: post,
  }
}
