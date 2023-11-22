import React from "react"
import cn from "clsx"
import s from "./card-float.module.scss"
import CustomImage from "../custom-image"
import { ICardFloat } from "@/constants"

type Props = ICardFloat

const CardFloat = (props: Props) => {
  return (
    <div
      className={s.cardFloat}
      style={{ backgroundColor: props.backgroundColor, color: props.color, transform: `rotate(${props.rotate}deg)` }}
    >
      <p>{props.text}</p>
      {props.icon && (
        <div className={cn(s.iconC, [s[props.icon.alignment]])}>
          <CustomImage src={props.icon.src} style={{ objectFit: "contain" }} alt="Icon" height={200} width={200} />
        </div>
      )}
    </div>
  )
}

export default CardFloat
