import { create } from "zustand";


const useMacbookStore = create((set) => ({
    
    color: '#2e2c2e',
    setColor: (color) => set({ color }),

    scale: '#2e2c2e',
    setScale: (scale) => set({ color }),

    reset: () => set({ color: '#2e2c3e', scale: 0.08 })
}))

export default useMacbookStore;