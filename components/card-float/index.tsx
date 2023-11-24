import React from "react"
import s from "./card-float.module.scss"

import cn from "clsx"

import CustomImage from "@/components/custom-image"
import { ICardFloat } from "@/constants"

type Props = ICardFloat

const CardFloat = (props: Props) => {
  return (
    <div
      className={s.cardFloat}
      style={{ backgroundColor: props.backgroundColor, color: props.color, transform: `rotate(${props.rotate}deg)` }}
    >
      <h5 className={cn({ [s.lg]: props.desc })}>{props.title}</h5>
      {props.desc && <p>{props.desc}</p>}
      {props.icon && (
        <div className={cn(s.iconC, [s[props.icon.alignment]])}>
          <CustomImage src={props.icon.src} style={{ objectFit: "contain" }} alt="Icon" height={200} width={200} />
        </div>
      )}
    </div>
  )
}

export default CardFloat
