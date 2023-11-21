import s from "./button.module.scss"

import { CustomLink } from "@/components/custom-link"

import cn from "clsx"

type Props = {
  text: string
  path?: string
  size: "sm" | "md" | "lg"
  onClick?: () => void
}

const Button = (props: Props) => {
  return (
    <CustomLink
      className={cn(s.button, [s[props.size]])}
      {...(props.path && { href: props.path })}
      {...(props.onClick && { onClick: props.onClick })}
    >
      {props.text}
    </CustomLink>
  )
}

export default Button
