import { create } from 'zustand'

export const useDesktopStore = create((set) => ({
  dropdownTextVisible: "hide",
  setDropdownTextVisible: (value) => set({ dropdownTextVisible: value }),
}))