import s from "./company-box.module.scss"

import cn from "clsx"

import CustomImage from "@/components/custom-image"
import { CompanyBoxProps } from "@/types"

type Props = CompanyBoxProps

const CompanyBox = (props: Props) => {
  return (
    <div className={cn(s.companyBox, "flex-center")}>
      <div className={s.imgC}>
        <CustomImage src={props.logo} alt={props.name} height={200} width={200} />
      </div>
    </div>
  )
}

export default CompanyBox
