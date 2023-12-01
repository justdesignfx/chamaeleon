import { useEffect, useState } from "react"
import s from "./sort.module.scss"

import { useClickAway } from "@uidotdev/usehooks"
import cn from "clsx"

import IconArrowForm from "@/components/icons/icon-form-arrow"

import { OptionProps } from "@/types"

type Props = {
  label: string
  options: OptionProps[]
  sort: OptionProps | null
  setSort: (sort: OptionProps) => void
}

const Sort = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickAway<HTMLDivElement>(() => {
    if (isOpen) setIsOpen(false)
  })

  useEffect(() => {
    if (props.sort) setIsOpen(false)
  }, [props.sort])

  return (
    <div className={cn(s.sort, { [s.open]: isOpen })} ref={ref}>
      <div className={cn(s.label, "cursor-pointer")} onClick={() => setIsOpen((prev) => !prev)}>
        {props.sort ? props.sort?.label : props.label}
        <div className={cn(s.iconC, "flex-center")}>
          <IconArrowForm rotate={!isOpen ? 180 : 0} fill="var(--nightly-woods)" />
        </div>
      </div>

      <div className={cn(s.items, { [s.open]: isOpen })}>
        {props.options.map((option, i) => {
          return (
            <div className={cn(s.option, "cursor-pointer")} onClick={() => props.setSort(option)} key={i}>
              {option.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Sort }
