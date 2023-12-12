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

const Button = ({ color = "var(--nightly-woods)", text, path, size, onClick }: Props) => {
  return (
    <CustomLink
      className={cn(s.button, [s[size]], "animated-btn")}
      {...(path && { href: path })}
      {...(onClick && { onClick: onClick })}
      style={{ color: color, "--btn-theme-color": color }}
    >
      {text}
    </CustomLink>
  )
}

export { Button }
