import React from "react"
import s from "./block-image.module.scss"

import cn from "clsx"

import { CustomImage } from "@/components/custom-image"
import { MediaProps } from "@/types"

type Props = {
  items: MediaProps[]
}

const BlockImage = (props: Props) => {
  return (
    <div className={s.blockImage}>
      <div className={cn(s.images, { [s.multiple]: props.items.length > 1 })}>
        {props.items.map((item, i) => {
          return (
            <div className={s.imgC} key={i}>
              <CustomImage
                alt="Post Image"
                loading="lazy"
                src={item.desktop.src}
                height={parseFloat(item.desktop.height)}
                width={parseFloat(item.desktop.width)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { BlockImage }
