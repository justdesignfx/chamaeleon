import s from "./footer.module.scss"

import cn from "clsx"

import CustomImage from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"

import { useAll } from "@/api/queries/social-media"
import { routes } from "@/constants"
import { capitalize } from "@/lib/utils"

const Footer = () => {
  const { data: social } = useAll()

  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <div>
          <small className={s.navItem}>
            Headquarters in San Francisco + Silicon Valley <br />
            Offices in Europe
          </small>
        </div>
        <div>
          <nav>
            {Object.values(routes).map((value) => {
              if (value.name === "home") {
                return
              }
              return (
                <CustomLink className={cn(s.navItem, "cursor-pointer")} key={value.name} href={`/${value.path}`}>
                  {capitalize(value.ui)}
                </CustomLink>
              )
            })}
          </nav>
          <div className={s.copyright}>
            <CustomLink className={s.navItem} href="/terms-and-conditions">
              Terms & Conditions
            </CustomLink>
            <small className={s.navItem}>All rights reserved © Chamaeleon LLC 2024</small>
          </div>
        </div>
      </div>

      <h6 className={s.punch}>
        LOOKING FOR INVESTMENT<span>?</span>
      </h6>

      <div className={s.social}>
        {social &&
          social.map((item, i) => {
            return (
              <CustomLink className={cn(s.iconC, "cursor-pointer", "flex-center")} href={item.url} key={i}>
                <CustomImage
                  src={item.icon}
                  alt="Social Media Icon"
                  height={1000}
                  width={1000}
                  style={{ objectFit: "contain" }}
                />
              </CustomLink>
            )
          })}
      </div>

      <div className={s.imgC}>
        <CustomImage
          src="/img/coin-stack.png"
          alt="Coin Stack"
          height={1000}
          width={1000}
          style={{ objectFit: "contain" }}
        />
      </div>
    </footer>
  )
}

export default Footer
