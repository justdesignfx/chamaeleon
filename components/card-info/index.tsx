import s from "./card-info.module.scss"

import cn from "clsx"

import { CustomImage } from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"
import IconClose from "@/components/icons/icon-close"
import IconLinkedin from "@/components/icons/icon-linkedin"
import { Pixels } from "@/components/pixels"
import { ScrollableBox } from "@/components/scrollable-box"

import { useModalStore } from "@/lib/store/modal"
import { CardPersonProps } from "@/types"

type Props = CardPersonProps

const CardInfo = (props: Props) => {
  const modalStore = useModalStore()

  return (
    <div className={s.cardInfo}>
      <div className={cn(s.close, "cursor-pointer")} onClick={modalStore.close}>
        <IconClose fill="var(--nightly-woods)" />
      </div>
      <div className={s.imgC}>
        <CustomImage
          alt="Profile Photo of a Team Member"
          style={{ objectFit: "cover" }}
          src={props.media.desktop.src}
          height={parseFloat(props.media.desktop.height)}
          width={parseFloat(props.media.desktop.width)}
        />
      </div>
      <div className={s.info}>
        <p className={s.title}>{props.name}</p>
        <p className={s.role}>{props.title}</p>
        <div className={s.desc}>
          <ScrollableBox>
            <p>
              <span>{props.description}</span>
            </p>
          </ScrollableBox>
        </div>
        <CustomLink href={props.linkedin} className={cn(s.iconC, "cursor-pointer", "flex-center")}>
          <IconLinkedin fill="var(--nightly-woods)" />
        </CustomLink>
      </div>
      <Pixels
        bg="var(--greening)"
        fill="var(--nightly-woods)"
        alignment="br"
        shape={[
          ["o", "o", "o"],
          ["o", "o", "x"],
          ["o", "x", "x"],
        ]}
      />
    </div>
  )
}

export { CardInfo }
