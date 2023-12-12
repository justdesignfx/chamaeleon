import { create } from "zustand"

interface State {
  timeline: gsap.core.Timeline | null
  setTimeline: (tl: gsap.core.Timeline) => void
  background: string
  setBackground: (color: string) => void
}

export const useStore = create<State>((set) => ({
  timeline: null,
  setTimeline: (timeline) => set({ timeline }),
  background: "red",
  setBackground: (background) => set({ background }),
}))

export const usePageTransitionStore = useStore
