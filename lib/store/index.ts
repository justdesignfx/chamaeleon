import Lenis from "@studio-freight/lenis"

import { create } from "zustand"

interface State {
  lenis?: Lenis
  setLenis: (instance: Lenis) => void
}

export const useStore = create<State>((set) => ({
  lenis: undefined,
  setLenis: (instance: Lenis) => set({ lenis: instance }),
}))

export const useUiStore = useStore
