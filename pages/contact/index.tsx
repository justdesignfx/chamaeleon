import { useRef, useState } from "react"
import s from "./contact.module.scss"

import { gsap } from "@/lib/gsap"
import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { Button } from "@/components/button"
import { ContactForm } from "@/components/contact-form"
import { CustomImage } from "@/components/custom-image"
import IconCurvedArrow from "@/components/icons/icon-curved-arrow"

import { useContactForm } from "@/api/mutations"
import { routes } from "@/constants"
import { NonFooterLayout } from "@/layouts/non-footer"
import { useCursorStore } from "@/lib/store/cursor"

import chamaeleon from "@/public/img/chamaeleon-hole.png"

enum Screen {
  start = "start",
  form = "form",
  end = "end",
}

const Contact = () => {
  const ref = useRef(null)
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.start)
  const { isLoading } = useContactForm()
  const cursorStore = useCursorStore()

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

  useIsomorphicLayoutEffect(() => {
    cursorStore.setCursor("default")
  }, [currentScreen])

  const screens = {
    start: (
      <div className={s.start}>
        <h1>
          Want to reach out?{" "}
          <span className={cn(s.iconC, "flex-center")}>
            <IconCurvedArrow fill="var(--nightly-woods)" />
          </span>
        </h1>
        <div className={s.buttonC}>
          <Button text="POP US A MESSAGE" size="lg" onClick={start} />
        </div>
        <small>Takes 5 Minutes</small>
        <div className={s.imgC}>
          <CustomImage
            src={chamaeleon}
            alt="Chamaeleon Coming Out of Hole"
            style={{ objectFit: "contain" }}
            priority={true}
          />
        </div>
      </div>
    ),
    form: <ContactForm onEnd={end} />,
    end: (
      <>
        {isLoading ? (
          <div>LOADING...</div>
        ) : (
          <div className={s.end}>
            <small>We will reach out to you soon!</small>
            <p>THANK YOU.</p>
            <Button text="MAIN PAGE" size="sm" path={`/${routes.home.path}`} />
          </div>
        )}
      </>
    ),
  }

  return (
    <NonFooterLayout seo={{ ...routes.contact.seo }}>
      <div className={cn(s.form, "flex-center")} ref={ref}>
        {screens[currentScreen]}
      </div>
    </NonFooterLayout>
  )
}

export default Contact
