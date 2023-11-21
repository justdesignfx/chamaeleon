import Lenis from "@studio-freight/lenis"
import { create } from "zustand"

interface State {
  lenis?: Lenis | null
  setLenis: (instance: Lenis | null) => void
  isStopped: boolean
  setIsStopped: (status: boolean) => void
}

export const useStore = create<State>((set) => ({
  lenis: null,
  isStopped: false,
  setLenis: (instance) => set({ lenis: instance }),
  setIsStopped: (status) => set({ isStopped: status }),
}))

export const useLenisStore = useStore
