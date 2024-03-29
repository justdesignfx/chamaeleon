import { useRef, useState } from "react"
import s from "./contact-form.module.scss"

import { gsap } from "@/lib/gsap"
import cn from "clsx"
import { useFormik } from "formik"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { Button } from "@/components/button"
import IconArrowForm from "@/components/icons/icon-form-arrow"
import { LoadingSpinner } from "@/components/loading-spinner"

import { useContactForm } from "@/api/mutations"
import { formModel, formSchema, initialValues } from "@/constants/form-contact"
import { useCursorStore } from "@/lib/store/cursor"
import { truncateString } from "@/lib/utils"

type Props = {
  onEnd: () => void
}

const ContactForm = (props: Props) => {
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)
  const [currentScreen, setCurrentScreen] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [errorMessageVisible, setErrorMessageVisible] = useState(false)
  const { mutate, isLoading, isError, data, isSuccess } = useContactForm()
  const cursorStore = useCursorStore()

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      mutate(values)
    },
  })

  const screens = [
    <>
      <p className={s.question}>GREAT. WHAT WOULD YOU LIKE TO SHARE WITH US?*</p>
      <p className={s.description}>TL;DR: a short description of what you do and are looking for...</p>
      <div className={s.field}>
        <div
          className={cn(s.inputC, s.textarea, {
            ["input-required"]: formik.errors.description && formik.touched.description,
          })}
        >
          <textarea
            className={s.input}
            id={formModel.description.name}
            name={formModel.description.name}
            onChange={formik?.handleChange}
            placeholder={formModel.description.placeholder}
            // type={formModel.description.type}
            value={formik?.values.description}
          />
        </div>
      </div>
    </>,
    <>
      <p className={s.question}>PLEASE GIVE US A BIT MORE CONTEXT. CAN YOU ATTACH YOUR DECK, PLEASE?*</p>
      <p className={s.description}>Please add a PDF format file</p>
      <div className={s.field}>
        <div
          className={cn(s.inputC, s.file, {
            ["input-required"]: formik?.errors.deck && formik?.touched.deck,
          })}
        >
          <label className={s.label} htmlFor={formModel.deck.name}>
            {formik.values.deck ? truncateString(formik.values.deck.name, 28) : "Choose File"}
          </label>
          <input
            key={formik.values.deck?.name}
            accept=".pdf"
            className={s.input}
            id={formModel.deck.name}
            name={formModel.deck.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const file = event.currentTarget.files?.[0]
              formik.setFieldValue("deck", file)
            }}
            placeholder={formModel.deck.placeholder}
            type={formModel.deck.type}
          />
          <button
            className={cn(s.resetBtn, "cursor-pointer")}
            disabled={!formik.values.deck}
            onClick={() => {
              formik.setFieldValue("deck", null)
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    </>,
    <>
      <p className={s.question}>
        NOW... LET'S GRAB YOUR CONTACT DETAILS SO WE CAN GET BACK TO YOU. FIRST OFF, WHAT'S YOUR NAME?*
      </p>
      <p className={s.description}>First and last name, please</p>
      <div className={s.field}>
        <div
          className={cn(s.inputC, {
            ["input-required"]: formik.errors.name && formik.touched.name,
          })}
        >
          <input
            className={s.input}
            id={formModel.name.name}
            name={formModel.name.name}
            onChange={formik?.handleChange}
            placeholder={formModel.name.placeholder}
            type={formModel.name.type}
            value={formik?.values.name}
          />
        </div>
      </div>
    </>,
    <>
      <p className={s.question}>COULD YOU LET US KNOW YOUR EMAIL ADDRESS?*</p>
      <p className={s.description}>We'll be in touch within the next couple of days with an answer for you.</p>
      <div className={s.field}>
        <div
          className={cn(s.inputC, {
            ["input-required"]: formik.errors.email && formik.touched.email,
          })}
        >
          <input
            className={s.input}
            id={formModel.email.name}
            name={formModel.email.name}
            onChange={formik?.handleChange}
            placeholder={formModel.email.placeholder}
            type={formModel.email.type}
            value={formik?.values.email}
          />
        </div>
      </div>
    </>,
    <>
      <p className={s.question}>WHAT IS THE NAME OF YOUR COMPANY?*</p>
      <div className={s.field}>
        <div
          className={cn(s.inputC, {
            ["input-required"]: formik?.errors.companyName && formik?.touched.companyName,
          })}
        >
          <input
            className={s.input}
            id={formModel.companyName.name}
            name={formModel.companyName.name}
            onChange={formik?.handleChange}
            placeholder={formModel.companyName.placeholder}
            type={formModel.companyName.type}
            value={formik?.values.companyName}
          />
        </div>
      </div>
    </>,
    <>
      <p className={s.question}>CAN YOU ALSO SHARE YOUR SITE URL?</p>
      <div className={s.field}>
        <div
          className={cn(s.inputC, {
            ["input-required"]: formik?.errors.website && formik?.touched.website,
          })}
        >
          <input
            className={s.input}
            id={formModel.website.name}
            name={formModel.website.name}
            onChange={formik?.handleChange}
            placeholder={formModel.website.placeholder}
            type={formModel.website.type}
            value={formik?.values.website}
          />
        </div>
      </div>
    </>,
    <>
      <p className={s.question}>FINALLY, IT WOULD BE GREAT TO HAVE YOUR LINKEDIN URL!</p>
      <p className={s.description}>
        Thanks for the extra info! (if you don't have Linkedin, please feel free to share any other relevant url)
      </p>
      <div className={s.field}>
        <div
          className={cn(s.inputC, {
            ["input-required"]: formik?.errors.linkedin && formik?.touched.linkedin,
          })}
        >
          <input
            className={s.input}
            id={formModel.linkedin.name}
            name={formModel.linkedin.name}
            onChange={formik?.handleChange}
            placeholder={formModel.linkedin.placeholder}
            type={formModel.linkedin.type}
            value={formik?.values.linkedin}
          />
        </div>
      </div>

      <button
        className={cn(s.submitBtn, "animated-btn", cursorStore.type !== "default" && "cursor-none")}
        type="submit"
        disabled={isLoading}
        onMouseEnter={() => cursorStore.setCursor("click")}
        onMouseLeave={() => cursorStore.setCursor("default")}
      >
        SUBMIT
        {isLoading && (
          <span className={s.loading}>
            <LoadingSpinner />
          </span>
        )}
      </button>
    </>,
  ]

  function next() {
    if (currentScreen === screens.length - 1) {
      formik.submitForm()
    }

    const field = Object.values(formModel)[currentScreen]

    formik?.validateForm(formik.values).then((errors) => {
      formik.setFieldTouched(field.name)
      // console.log("errors", errors)
      // console.log("touched", formik.touched)

      if (errors.hasOwnProperty(field.name)) {
        return
      }

      gsap.to(q(".transform-c"), {
        onStart: () => {
          setErrorMessageVisible(false)
          setAnimating(true)
          gsap.to(q(".transform-c"), {
            yPercent: -3,
            autoAlpha: 0,
            ease: "power3.inOut",
          })
        },
        onComplete: () => {
          setCurrentScreen((prev) => prev + 1)
          gsap.to(q(".transform-c"), {
            delay: 0.2,
            autoAlpha: 1,
            yPercent: 0,
            ease: "power3.inOut",
            onComplete: () => {
              setAnimating(false)
            },
          })
        },
      })
    })
  }

  function prev() {
    if (currentScreen === 0) {
      return
    }

    gsap.to(q(".transform-c"), {
      onStart: () => {
        setAnimating(true)
        gsap.to(q(".transform-c"), {
          yPercent: -3,
          autoAlpha: 0,
          ease: "power3.inOut",
          onComplete: () => {
            setCurrentScreen((prev) => prev - 1)
          },
        })
      },
      onComplete: () => {
        gsap.to(q(".transform-c"), {
          delay: 0.3,
          autoAlpha: 1,
          yPercent: 0,
          ease: "power3.inOut",
          onComplete: () => {
            setAnimating(false)
          },
        })
      },
    })
  }

  // error handling
  useIsomorphicLayoutEffect(() => {
    const key = Object.keys(formModel)[currentScreen] as keyof typeof formModel

    if (formik.errors[key] && formik.touched[key]) {
      setErrorMessage(formik.errors[key] ?? "")
      setErrorMessageVisible(true)
    } else {
      setErrorMessageVisible(false)
    }
  }, [formik, currentScreen])

  // server side error
  useIsomorphicLayoutEffect(() => {
    if (data?.success) {
      return props.onEnd()
    }

    setErrorMessageVisible(true)
    data?.message && setErrorMessage(data?.message)
  }, [isSuccess, data])

  // client side error
  useIsomorphicLayoutEffect(() => {
    if (isError) {
      setErrorMessageVisible(true)
      setErrorMessage("An error has occured. Please try again.")
    }
  }, [isError])

  useIsomorphicLayoutEffect(() => {
    cursorStore.setCursor("default")
  }, [currentScreen])

  return (
    <div className={cn(s.screens, "flex-center")} ref={ref}>
      <div className={cn(s.buttons, "buttons")}>
        <button
          className={cn(s.button, s.up, "flex-center")}
          onClick={prev}
          disabled={currentScreen === 0 || animating || isLoading}
        >
          <span className={s.iconC}>
            <IconArrowForm fill="var(--forested-juniper)" />
          </span>
        </button>
        <button
          className={cn(s.button, s.down, "flex-center")}
          onClick={next}
          disabled={currentScreen === screens.length - 1 || animating || isLoading}
        >
          <span className={s.iconC}>
            <IconArrowForm fill="var(--forested-juniper)" rotate={180} />
          </span>
        </button>
      </div>

      <form className={cn(s.form, "form")} onSubmit={formik.handleSubmit}>
        <div className="transform-c inherit-dims">
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
                    <Button text="NEXT" onClick={next} size="sm" disabled={animating || isLoading} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </form>

      <div className={cn(s.errorMessage, "error-message", { [s.active]: errorMessageVisible })}>{errorMessage}</div>
    </div>
  )
}

export { ContactForm }
