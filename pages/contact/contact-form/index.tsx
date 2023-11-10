import { useRef, useState } from "react"
import s from "./contact-form.module.scss"

import cn from "clsx"
import gsap from "gsap"
import Button from "@/components/button"

type Props = {
  onEnd: () => void
}

const ContactForm = (props: Props) => {
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    <>
      <p className={s.question}>GREAT. WHAT WOULD YOU LIKE TO SHARE WITH US?*</p>
      <p className={s.description}>TL;DR: a short description of what you do and are looking for...</p>
      <div className={s.inputC}>
        <input className={s.input} type="text" placeholder="Placeholder" />
      </div>
    </>,
    <>
      <p className={s.question}>PLEASE GIVE US A BIT MORE CONTEXT. CAN YOU ATTACH YOUR DECK, PLEASE?*</p>
      <p className={s.description}>Please add a PDF format file</p>
      <div className={s.inputC}>
        <input className={s.input} type="text" placeholder="Placeholder" />
      </div>
    </>,
    <>
      <p className={s.question}>
        NOW... LET&apos;S GRAB YOUR CONTACT DETAILS SO WE CAN GET BACK TO YOU. FIRST OFF, WHAT&apos;S YOUR NAME?*
      </p>
      <p className={s.description}>First and last name, please</p>
      <div className={s.inputC}>
        <input className={s.input} type="text" placeholder="Placeholder" />
      </div>
    </>,
    <>
      <p className={s.question}>COULD YOU LET ME KNOW YOUR EMAIL ADDRESS?*</p>
      <p className={s.description}>We&apos;ll be in touch within the next couple of days with an answer for you.</p>
      <div className={s.inputC}>
        <input className={s.input} type="text" placeholder="Placeholder" />
      </div>
    </>,
    <>
      <p className={s.question}>WHAT IS THE NAME OF YOUR COMPANY?*</p>
      <div className={s.inputC}>
        <input className={s.input} type="text" placeholder="Placeholder" />
      </div>
    </>,
    <>
      <p className={s.question}>CAN YOU ALSO SHARE YOUR SITE URL?</p>
      <div className={s.inputC}>
        <input className={s.input} type="text" placeholder="Placeholder" />
      </div>
    </>,
    <>
      <p className={s.question}>FINALLY, IT WOULD BE GREAT TO HAVE YOUR LINKEDIN URL!</p>
      <p className={s.description}>
        Thanks for the extra info! (if you don&apos;t Linkedin, please feel free to share any other relevant url)
      </p>
      <Button text="SUBMIT" onClick={props.onEnd} size="sm" />
    </>,
  ]

  function next() {
    if (currentScreen === screens.length - 1) {
      props.onEnd()
    }

    gsap.to(q(".transform-c"), {
      onStart: () => {
        gsap.to(q(".transform-c"), {
          yPercent: -5,
          autoAlpha: 0,
          ease: "expo.inOut",
        })
      },
      onComplete: () => {
        setCurrentScreen((prev) => prev + 1)
        gsap.to(q(".transform-c"), {
          delay: 0.2,
          autoAlpha: 1,
          yPercent: 0,
        })
      },
    })
  }

  function prev() {
    if (currentScreen === 0) {
      return
    }

    gsap.to(q(".transform-c"), {
      onStart: () => {
        gsap.to(q(".transform-c"), {
          yPercent: 5,
          autoAlpha: 0,
          ease: "expo.inOut",
          onComplete: () => {
            setCurrentScreen((prev) => prev - 1)
          },
        })
      },
      onComplete: () => {
        gsap.to(q(".transform-c"), {
          delay: 0.2,
          autoAlpha: 1,
          yPercent: 0,
        })
      },
    })
  }

  // useIsomorphicLayoutEffect(() => {
  //   gsap.to(q(".transform-c"), {
  //     yPercent: 5,
  //     onComplete: () => {
  //       gsap.to(q(".transform-c"), {
  //         yPercent: 0,
  //       })
  //     },
  //   })
  // }, [currentScreen])

  return (
    <div className={cn(s.screens, "flex-center")} ref={ref}>
      <div className={s.buttons}>
        <button className={cn(s.button, s.up, "flex-center")} onClick={prev} disabled={currentScreen === 0}>
          u
        </button>
        <button
          className={cn(s.button, s.down, "flex-center")}
          onClick={next}
          disabled={currentScreen === screens.length - 1}
        >
          d
        </button>
      </div>
      <form className={cn(s.form, "form")}>
        <div className="transform-c" style={{ height: "inherit", width: "inherit" }}>
          {screens.map((screen, i) => {
            return (
              <div
                className={s.screen}
                key={i}
                style={{
                  visibility: currentScreen === i ? "visible" : "hidden",
                  pointerEvents: currentScreen === i ? "auto" : "none",
                  opacity: currentScreen === i ? "1" : "0",
                }}
              >
                <small className={s.indicator}>
                  {i + 1} / {screens.length}
                </small>
                {screen}
                {currentScreen !== screens.length - 1 && (
                  <div className={s.action}>
                    {/* <Button text="PREV" onClick={prev} size="sm" /> */}
                    <Button text="NEXT" onClick={next} size="sm" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </form>
    </div>
  )
}

export default ContactForm
