import s from "./card-person.module.scss"

import cn from "clsx"

import CustomImage from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"
import IconLinkedin from "@/components/icons/icon-linkedin"

import { ICardPerson } from "@/constants"

type Props = ICardPerson

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

export default CardPerson
