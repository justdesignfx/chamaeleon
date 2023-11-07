import React from "react"
import s from "./company-box.module.scss"
import { CustomLink } from "@/components/custom-link"
import { ICompanyBox } from "@/global"
import CustomImage from "../custom-image"

type Props = ICompanyBox

const CompanyBox = (props: Props) => {
  return (
    <CustomLink className={s.companyBox} style={{ backgroundColor: props.bgColor, color: props.fontColor }}>
      <div className={s.imgC}>
        <CustomImage src={props.img} alt="Company Logo" height="200" width="200" />
      </div>
    </CustomLink>
  )
}

export default CompanyBox
