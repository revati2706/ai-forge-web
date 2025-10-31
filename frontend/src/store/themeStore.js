import { create } from "zustand";

export const useTheme=create((set)=>({
    mode:"dark",
    toggleTheme:()=>set((s)=>({mode:s.mode==="dark" ? "light" : "dark"}))
}))