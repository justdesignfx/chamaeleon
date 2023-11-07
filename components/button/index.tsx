import React from "react"
import { CustomLink } from "@/components/custom-link"
import s from "./button.module.scss"

import cn from "clsx"

type Props = {
  text: string
  path: string
  size: "sm" | "md" | "lg"
}

const Button = (props: Props) => {
  return (
    <CustomLink className={cn(s.button, [s[props.size]])} href={props.path}>
      {props.text}
    </CustomLink>
  )
}

export default Button
