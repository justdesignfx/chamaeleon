import s from "./footer.module.scss"

import cn from "clsx"

import { useAll } from "@/api/queries/social-media"
import CustomImage from "@/components/custom-image"
import { CustomLink } from "@/components/custom-link"
import { routes } from "@/constants"
import FooterReveal from "../animations/footer-reveal"

const Footer = () => {
  const { data: social } = useAll()

  return (
    <FooterReveal>
      <footer className={s.footer}>
        <nav>
          {Object.values(routes).map((value) => {
            if (value.name === "home") {
              return
            }
            return (
              <CustomLink className={cn(s.navItem, "cursor-pointer")} key={value.name} href={`/${value.path}`}>
                {value.ui}
              </CustomLink>
            )
          })}
        </nav>

        <div className={s.copyright}>
          <small>
            Headquarters in Bay Area (US) <br />
            Offices in Europe
          </small>
          <small>Terms & Conditions</small>
          <small>All rights reserved © Chamaeleon LLC 2021</small>
        </div>

        <h6 className={s.punch}>
          LOOKING FOR INVESTMENT<span>?</span>
        </h6>

        <div className={s.social}>
          {social &&
            social.map((item, i) => {
              return (
                <CustomLink className={s.iconC} href={item.url} key={i}>
                  <CustomImage src={item.icon} style={{ objectFit: "contain" }} alt="Social Media Icon" />
                </CustomLink>
              )
            })}
        </div>

        <div className={s.imgC}>
          <CustomImage src="/img/coin-stack.png" alt="Coin Stack" />
        </div>
      </footer>
    </FooterReveal>
  )
}

export default Footer

// export async function getServerSideProps(context) => {
//   // Fetch additional data for the component
//   const componentData = await fetchComponentData();

//   return {
//     props: {
//       componentData,
//     },
//   };
// };
