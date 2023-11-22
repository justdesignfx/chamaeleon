import s from "./card-company-detail.module.scss"

import cn from "clsx"

import { ICompanyBox } from "@/constants"
import { useModalStore } from "@/lib/store/modal"
import Button from "../button"
import IconClose from "../icons/icon-close"
import ScrollableBox from "../scrollable-box"
import CustomImage from "../custom-image"

type Props = ICompanyBox

const CardCompanyDetail = (props: Props) => {
  const modalStore = useModalStore()

  return (
    <div className={s.cardCompanyDetail}>
      <div className={cn(s.close, "cursor-pointer")} onClick={modalStore.close}>
        <IconClose fill="var(--greening)" />
      </div>
      <div className={cn(s.imgCC, "flex-center")}>
        <div className={s.imgC}>
          <CustomImage
            alt="Profile Photo of a Team Member"
            style={{ objectFit: "contain" }}
            src={props.logo}
            height={200}
            width={200}
          />
        </div>
      </div>

      <div className={s.info}>
        <p className={s.title}>{props.name}</p>
        <div className={s.desc}>
          <ScrollableBox>
            <p>
              <span>{props.description}</span>
            </p>
          </ScrollableBox>
        </div>

        <Button path={props.url} color="var(--greening)" text="GO TO WEBSITE" size="xs" />
      </div>
    </div>
  )
}

export default CardCompanyDetail
