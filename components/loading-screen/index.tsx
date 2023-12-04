import React from "react"
import s from "./loading-screen.module.scss"

import cn from "clsx"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

type Props = {
  loading: boolean
  setLoading: (val: boolean) => void
}

const LoadingScreen = (props: Props) => {
  useIsomorphicLayoutEffect(() => {
    const timeout = setTimeout(() => {
      props.setLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [props.loading])

  return (
    <div className={cn(s.loadingScreen, "flex-center", { [s.loading]: props.loading })}>
      <h1>LOADING...</h1>
    </div>
  )
}

export { LoadingScreen }
