import s from "./card-person.module.scss"

import cn from "clsx"

import { CustomImage } from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"
import IconLinkedin from "@/components/icons/icon-linkedin"

import { CardPersonProps } from "@/types"

type Props = CardPersonProps

const CardPerson = (props: Props) => {
  return (
    <div className={cn(s.cardPerson, "cursor-pointer")}>
      <div className={s.imgC} onClick={props.toggleDetail}>
        <div>
          <CustomImage
            src={props.media.desktop.src}
            alt="Profile Photo of a Team Member"
            height={parseFloat(props.media.desktop.height)}
            width={parseFloat(props.media.desktop.width)}
            sizes="(max-width: 800px) 100vw, 33vw"
          />
        </div>
      </div>
      <p>{props.name}</p>
      <small>{props.title}</small>
      <CustomLink href={props.linkedin} className={cn(s.iconC, "flex-center")}>
        <IconLinkedin fill="var(--nightly-woods)" />
      </CustomLink>
    </div>
  )
}

export { CardPerson }
