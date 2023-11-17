import { ICardPerson } from "@/constants"
import CustomImage from "../custom-image"
import { CustomLink } from "../custom-link"
import s from "./card-person.module.scss"

import cn from "clsx"
import IconLinkedin from "../icons/icon-linkedin"

type Props = ICardPerson

const CardPerson = (props: Props) => {
  return (
    <div className={cn(s.cardPerson, "cursor-pointer")}>
      <div className={s.imgC}>
        <div>
          <CustomImage
            src={props.media.desktop.src}
            alt="Profile Photo of a Team Member"
            height={props.media.desktop.height}
            width={props.media.desktop.width}
          />
        </div>
      </div>
      <p>{props.name}</p>
      <small>{props.role}</small>
      <CustomLink href={props.linkedin} className={cn(s.iconC, "flex-center")}>
        <IconLinkedin fill="var(--nightly-woods)" />
      </CustomLink>
    </div>
  )
}

export default CardPerson
