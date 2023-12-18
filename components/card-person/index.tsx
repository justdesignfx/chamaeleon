import s from "./card-person.module.scss"

import cn from "clsx"

import { CustomImage } from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"
import IconLinkedin from "@/components/icons/icon-linkedin"

import { CardPersonProps } from "@/types"
import { useCursorStore } from "@/lib/store/cursor"

type Props = CardPersonProps

const CardPerson = (props: Props) => {
  const cursorStore = useCursorStore()

  return (
    <div className={cn(s.cardPerson, "cursor-pointer")}>
      <div
        className={cn(s.imgC, cursorStore.type !== "default" && "cursor-none")}
        onClick={props.toggleDetail}
        onMouseEnter={() => cursorStore.setCursor("click")}
        onMouseLeave={() => cursorStore.setCursor("default")}
      >
        <div className="inherit-dims">
          <CustomImage
            src={props.media.desktop.src}
            alt="Profile Photo of a Team Member"
            height={parseFloat(props.media.desktop.height)}
            width={parseFloat(props.media.desktop.width)}
            loading="lazy"
          />
        </div>
      </div>
      <p>{props.name}</p>
      <small>{props.title}</small>
      <CustomLink href={props.linkedin} className={cn(s.iconC, "flex-center")}>
        <IconLinkedin fill="var(--nightly-woods)" />
      </CustomLink>
    </div>
  )
}

export { CardPerson }
