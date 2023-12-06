import React, { ReactNode } from "react"
import * as Popover from "@radix-ui/react-popover"
import s from "./custom-popover.module.scss"

type Props = {
  children: ReactNode
}

const CustomPopover = (props: Props) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{props.children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={s.popoverContent} sideOffset={5}>
          COPIED
          <Popover.Close className={s.popoverClose} aria-label="Close">
            x
          </Popover.Close>
          <Popover.Arrow className={s.popoverArrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export { CustomPopover }
