import s from "./button.module.scss"

import cn from "clsx"

import { CustomLink } from "@/components/custom-link"

type Props = {
  color?: string
  text: string
  path?: string
  size: "xs" | "sm" | "md" | "lg"
  onClick?: () => void
}

const Button = (props: Props) => {
  return (
    <CustomLink
      className={cn(s.button, [s[props.size]])}
      {...(props.path && { href: props.path })}
      {...(props.onClick && { onClick: props.onClick })}
      style={{ color: props.color, borderColor: props.color }}
    >
      {props.text}
    </CustomLink>
  )
}

export { Button }
