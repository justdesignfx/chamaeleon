import { CursorType } from "@/types"
import { create } from "zustand"

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
