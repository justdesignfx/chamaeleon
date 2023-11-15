import s from "./card-info.module.scss"

import cn from "clsx"

import CustomImage from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"
import Pixels from "@/components/pixels"
import { ICardPerson } from "@/constants"
import { useModalStore } from "@/lib/store/modal"
import ScrollableBox from "../scrollable-box"

type Props = ICardPerson

const CardInfo = (props: Props) => {
  const modalStore = useModalStore()
  const closeModal = () => modalStore.setIsOpen(false)

  return (
    <div className={s.cardInfo}>
      <div className={cn(s.close, "cursor-pointer")} onClick={closeModal}>
        X
      </div>
      <div className={s.imgC}>
        <CustomImage src={props.img} alt="Photo" style={{ objectFit: "cover" }} />
      </div>
      <div className={s.info}>
        <p className={s.title}>{props.name}</p>
        <p className={s.role}>{props.role}</p>
        <div className={s.desc}>
          <ScrollableBox>
            <p>{props.desc}</p>
          </ScrollableBox>
        </div>
        <CustomLink href={props.social.url} className={cn(s.iconC, "flex-center")}>
          <CustomImage
            src={props.social.icon}
            alt="Profile Photo of a Team Member"
            height="500"
            width="500"
            style={{ objectFit: "contain" }}
          />
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

export default CardInfo
