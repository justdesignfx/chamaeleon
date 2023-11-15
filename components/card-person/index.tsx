import { ICardPerson } from "@/constants"
import CustomImage from "../custom-image"
import { CustomLink } from "../custom-link"
import s from "./card-person.module.scss"

import cn from "clsx"

type Props = ICardPerson

const CardPerson = (props: Props) => {
  return (
    <div className={cn(s.cardPerson, "cursor-pointer")}>
      <div className={s.imgC}>
        <div>
          <CustomImage src={props.img} alt="Profile Photo of a Team Member" height="500" width="500" />
        </div>
      </div>
      <p>{props.name}</p>
      <small>{props.role}</small>
      <CustomLink href={props.social.url} className={cn(s.iconC, "flex-center")}>
        <CustomImage
          src={props.social.icon}
          alt="Profile Photo of a Team Member"
          height="500"
          width="500"
          style={{ objectFit: "contain" }}
        />
      </CustomLink>
    </div>
  )
}

export default CardPerson
