import s from "./loading-screen.module.scss"

import { usePageTransitionState } from "@madeinhaus/nextjs-page-transition"
import cn from "clsx"

const LoadingScreen = () => {
  const { phase } = usePageTransitionState()

  return (
    <div
      className={cn(s.loadingScreen, "flex-center", {
        [s.in]: phase === "IN",
        [s.out]: phase === "OUT",
        [s.idle]: phase === "IDLE",
        [s.appear]: phase === "APPEAR",
      })}
    ></div>
  )
}

export { LoadingScreen }
