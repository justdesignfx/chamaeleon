import s from "./call-to-page.module.scss"

import cn from "clsx"

import IconCurvedArrow from "@/components/icons/icon-curved-arrow"
import { Button } from "@/components/button"

type Props = {
  text: string
  btnText: string
  href: string
  ariaLabel: string
}

const CallToPage = (props: Props) => {
  return (
    <div className={cn(s.callToPage, "flex-center-y")}>
      <small className="flex-center">
        {props.text}{" "}
        <span className={cn(s.iconC, "flex-center")}>
          <IconCurvedArrow fill="var(--nightly-woods)" />
        </span>
      </small>
      <Button text={props.btnText} path={props.href} size="lg" ariaLabel={props.ariaLabel} />
    </div>
  )
}

export { CallToPage }
