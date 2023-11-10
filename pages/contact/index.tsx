import React, { useRef, useState } from "react"
import s from "./contact.module.scss"

import cn from "clsx"

import DefaultLayout from "@/layouts/default"
import CustomImage from "@/components/custom-image"
import Button from "@/components/button"
import ContactForm from "./contact-form"
import { useIsomorphicLayoutEffect } from "usehooks-ts"
import gsap from "gsap"
import { routes } from "@/global"

enum Screen {
  start = "start",
  form = "form",
  end = "end",
}

const Contact = () => {
  const ref = useRef(null)

  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.start)

  function start() {
    gsap.to(ref.current, {
      autoAlpha: 0,
      onComplete: () => {
        setCurrentScreen(Screen.form)
        gsap.to(ref.current, {
          autoAlpha: 1,
        })
      },
    })
  }

  function end() {
    gsap.to(ref.current, {
      autoAlpha: 0,
      onComplete: () => {
        setCurrentScreen(Screen.end)
        gsap.to(ref.current, {
          autoAlpha: 1,
        })
      },
    })
  }

  const screens = {
    start: (
      <div className={s.start}>
        <h1>Want to reach out?</h1>
        <div className={s.buttonC}>
          <Button text="POP US A MESSAGE" size="lg" onClick={start} />
        </div>
        <small>Takes 5 Minutes</small>
        <div className={s.imgC}>
          <CustomImage
            src="/img/chamaeleon-hole.png"
            alt="Chamaeleon Coming Out From Hole"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    form: <ContactForm onEnd={end} />,
    end: (
      <div className={s.end}>
        <small>We will reach out you soon!</small>
        <p>THANK YOU.</p>
        <Button text="MAIN PAGE" size="sm" path={`/${routes.home.path}`} />
      </div>
    ),
  }

  return (
    <DefaultLayout>
      <div className={cn(s.form, "flex-center")} ref={ref}>
        {screens[currentScreen]}
      </div>
    </DefaultLayout>
  )
}

export default Contact
