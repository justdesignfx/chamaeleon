import s from "./button.module.scss"

import cn from "clsx"

import { CustomLink } from "@/components/custom-link"
import { useCursorStore } from "@/lib/store/cursor"

type Props = {
  ariaLabel?: string
  color?: string
  text: string
  path?: string
  size: "xs" | "sm" | "md" | "lg"
  onClick?: () => void
  cursorClick?: boolean
  disabled?: boolean
}

const Button = ({
  ariaLabel,
  color = "var(--nightly-woods)",
  text,
  path,
  size,
  onClick,
  cursorClick = true,
  disabled = false,
}: Props) => {
  const cursorStore = useCursorStore()

  return (
    <CustomLink
      className={cn(s.button, [s[size]], "animated-btn", cursorStore.type !== "default" && "cursor-none")}
      {...(path && { href: path })}
      {...(onClick && { onClick: onClick })}
      {...(cursorClick && {
        onMouseEnter: () => cursorStore.setCursor("click"),
        onMouseLeave: () => cursorStore.setCursor("default"),
      })}
      style={{ color: color, "--btn-theme-color": color }}
      disabled={disabled}
      ariaLabel={ariaLabel}
    >
      {text}
    </CustomLink>
  )
}

export { Button }
