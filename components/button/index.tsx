import s from "./button.module.scss"

import cn from "clsx"

import { CustomLink } from "@/components/custom-link"
import { useCursorStore } from "@/lib/store/cursor"

type Props = {
  color?: string
  text: string
  path?: string
  size: "xs" | "sm" | "md" | "lg"
  onClick?: () => void
  cursorClick: boolean
}

const Button = ({ color = "var(--nightly-woods)", text, path, size, onClick, cursorClick = true }: Props) => {
  const cursorStore = useCursorStore()

  return (
    <CustomLink
      className={cn(s.button, [s[size]], "animated-btn")}
      {...(path && { href: path })}
      {...(onClick && { onClick: onClick })}
      style={{ color: color, "--btn-theme-color": color }}
      onMouseEnter={() => {
        console.log("enter")
        // cursorStore.setCursor("click")
      }}
      onMouseLeave={() => {
        console.log("leave")
        // cursorStore.setCursor("default")
      }}
    >
      {text}
    </CustomLink>
  )
}

export { Button }
