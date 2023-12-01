import s from "./card-blog.module.scss"

import cn from "clsx"

import CustomImage from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"

import { routes } from "@/constants"
import { CardPostProps } from "@/types"

type Props = CardPostProps

const CardBlog = (props: Props) => {
  return (
    <CustomLink href={`${routes.newsAndEvents.path}/${props.url}`} div className={cn(s.cardBlog, "cursor-pointer")}>
      <div className={s.imgC}>
        <div>
          <CustomImage
            src={props.media.desktop.src}
            alt="Profile Photo of a Team Member"
            height={parseFloat(props.media.desktop.height)}
            width={parseFloat(props.media.desktop.width)}
          />
        </div>
      </div>
      <p>{props.title}</p>
      <small>{props.title}</small>
    </CustomLink>
  )
}

export default CardBlog
