import React from "react"
import s from "./cookie-popup.module.scss"

import cn from "clsx"

import Button from "@/components/button"
import CustomImage from "@/components/custom-image"
import { useModalStore } from "@/lib/store/modal"

const CookiePopup = () => {
  const modalStore = useModalStore()

  function handleCookie(preference: boolean) {
    localStorage.setItem("cookieAccepted", `${preference}`)
    modalStore.close()
  }

  return (
    <div className={cn(s.popupC, "flex-center")}>
      <div className={s.cookiePopup}>
        <h5>
          HEADS UP,
          <br /> TRAVELER!
        </h5>
        <p>
          Hey there! We use cookies to make our website work like a charm. No funny business with your data, we promise.
          By clicking &quot;Accept,&quot; you agree to our cookie usage.
        </p>
        <div className={s.buttons}>
          <Button text="ACCEPT" size="sm" color="var(--forested-juniper)" onClick={() => handleCookie(true)} />
          <Button text="DECLINE" size="sm" color="var(--medium-grey-green)" onClick={() => handleCookie(false)} />
        </div>
        <div className={s.imgC}>
          <CustomImage src="/img/cookie.png" alt="Cookie Doodle" height={237} width={239} />
        </div>
      </div>
    </div>
  )
}

export default CookiePopup
