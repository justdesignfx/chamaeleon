import s from "./card-post.module.scss"

import cn from "clsx"

import { CustomImage } from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"

import { routes } from "@/constants"
import { CardPostProps } from "@/types"

type Props = CardPostProps

const CardPost = (props: Props) => {
  return (
    <CustomLink href={`${routes.newsAndEvents.path}/${props.url}`} div className={cn(s.cardPost, "cursor-pointer")}>
      <div className={s.imgC}>
        <CustomImage
          src={props.media.desktop.src}
          alt="Post Cover Photo"
          height={parseFloat(props.media.desktop.height)}
          width={parseFloat(props.media.desktop.width)}
        />
      </div>
      <p>{props.title}</p>
      <small>{props.date}</small>
    </CustomLink>
  )
}
export { CardPost }
