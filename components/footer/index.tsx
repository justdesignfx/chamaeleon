import s from "./footer.module.scss"

import cn from "clsx"

import { CustomImage } from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"

import { useAll } from "@/api/queries/social-media"
import { routes } from "@/constants"
import { capitalize } from "@/lib/utils"

import coins from "@/public/img/coin-stack.png"

const Footer = () => {
  const { data: social } = useAll()

  return (
    <footer className={s.footer}>
      <div className={s.top}>
        <div>
          <small className={s.navItem}>
            Headquarters in San Francisco + Silicon Valley <br />
            Offices in Europe.
          </small>
        </div>
        <div>
          <nav>
            <ul>
              {Object.values(routes).map((value) => {
                if (value.name === "home") {
                  return
                }
                return (
                  <li key={value.name}>
                    <CustomLink
                      className={cn(s.navItem, "cursor-pointer")}
                      href={`/${value.path}`}
                      ariaLabel={value.ariaLabel}
                    >
                      {value.name === "kin" ? value.ui : capitalize(value.ui)}
                    </CustomLink>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className={s.copyright}>
            <CustomLink className={s.navItem} href="/terms-and-conditions" ariaLabel="Terms and Conditions">
              Terms & Conditions
            </CustomLink>
            <small className={s.navItem}>All rights reserved © Chamaeleon LLC 2024</small>
          </div>
        </div>
      </div>

      <p className={s.punch}>
        LOOKING FOR INVESTMENT<span>?</span>
      </p>

      <div className={s.social}>
        {Array.isArray(social) &&
          social &&
          social.map((item, i) => {
            return (
              <CustomLink className={cn(s.iconC, "cursor-pointer", "flex-center")} href={item.url} key={i}>
                <CustomImage
                  src={item.icon}
                  alt="Social Media Icon"
                  style={{ objectFit: "contain" }}
                  height={30}
                  width={30}
                  loading="lazy"
                />
              </CustomLink>
            )
          })}
      </div>

      <div className={s.imgC}>
        <CustomImage src={coins} alt="Coin Stack" style={{ objectFit: "contain" }} loading="lazy" />
      </div>
    </footer>
  )
}

export { Footer }
