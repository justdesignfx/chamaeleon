import Lenis from "@studio-freight/lenis"
import { create } from "zustand"

interface State {
  lenis?: Lenis
  setLenis: (instance: Lenis) => void
  isStopped: boolean
  setIsStopped: (status: boolean) => void
}

export const useStore = create<State>((set) => ({
  lenis: undefined,
  isStopped: false,
  setLenis: (instance: Lenis) => set({ lenis: instance }),
  setIsStopped: (status: boolean) => set({ isStopped: status }),
}))

export const useLenisStore = useStore
