import s from "./company-box.module.scss"

import cn from "clsx"

import { ICompanyBox } from "@/constants"
import CustomImage from "@/components/custom-image"

type Props = ICompanyBox

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
