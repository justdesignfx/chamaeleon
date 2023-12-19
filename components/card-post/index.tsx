import s from "./card-post.module.scss"

import cn from "clsx"

import { CustomImage } from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"

import { routes } from "@/constants"
import { CardPostProps } from "@/types"
import { useCursorStore } from "@/lib/store/cursor"

type Props = CardPostProps

const CardPost = (props: Props) => {
  const cursorStore = useCursorStore()

  return (
    <CustomLink
      href={`${routes.newsAndEvents.path}/${props.url}`}
      className={cn(s.cardPost, "cursor-pointer", cursorStore.type !== "default" && "cursor-none")}
      onMouseEnter={() => cursorStore.setCursor("click")}
      onMouseLeave={() => cursorStore.setCursor("default")}
    >
      <div className={s.imgC}>
        <CustomImage
          src={props.media.desktop.src}
          alt="Post Cover Photo"
          height={parseFloat(props.media.desktop.height)}
          width={parseFloat(props.media.desktop.width)}
          loading="lazy"
        />
      </div>
      <p>
        {props.title} <span className={s.tag}>{props.category}</span>
      </p>
      <small>{props.date}</small>
    </CustomLink>
  )
}
export { CardPost }
