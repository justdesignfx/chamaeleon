import s from "./card-float.module.scss"

import cn from "clsx"

import { CustomImage } from "@/components/custom-image"

import { CardFloatProps } from "@/types"

type Props = CardFloatProps

const CardFloat = (props: Props): JSX.Element => {
  return (
    <div className={s.cardFloat} style={{ backgroundColor: props.backgroundColor, color: props.color }}>
      <h5 className={cn({ [s.lg]: props.desc })}>{props.title}</h5>
      {props.desc && <p>{props.desc}</p>}
      {props.icon && (
        <div className={cn(s.iconC, "flex-center", [s[props.icon.alignment]], [s[props.icon.size]])}>
          <CustomImage
            src={props.icon.src}
            style={{ objectFit: "contain" }}
            alt="Icon"
            height={400}
            width={400}
            loading="lazy"
          />
        </div>
      )}
    </div>
  )
}

export { CardFloat }
