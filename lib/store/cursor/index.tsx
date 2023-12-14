import { create } from "zustand"

export type CursorType = "default" | "click" | "open"

interface State {
  type: CursorType
  visible: boolean
  toggleVisibility: () => void
  setCursor: (type: CursorType) => void
}

const useStore = create<State>((set, get) => ({
  type: "default",
  visible: false,
  toggleVisibility: () => set({ visible: !get().visible }),
  setCursor: (type) => set({ type }),
}))

export const useCursorStore = useStore
