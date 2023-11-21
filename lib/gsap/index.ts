import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { CustomEase } from "gsap/dist/CustomEase"
gsap.registerPlugin(ScrollTrigger, CustomEase)

const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2
const RECIPROCAL_GR = 1 / GOLDEN_RATIO
const DURATION = RECIPROCAL_GR
const EASE = CustomEase.create("ease", "0.175, 0.885, 0.32, 1")

gsap.config({
  autoSleep: 60,
})

gsap.defaults({
  duration: DURATION,
  ease: "none",
})

ScrollTrigger.defaults({ markers: process.env.NEXT_PUBLIC_NODE_ENV === "development" })

export { ScrollTrigger, CustomEase, DURATION, EASE, GOLDEN_RATIO, gsap }
