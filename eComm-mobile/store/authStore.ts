//* ZUSTAND//
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

//*ASYNC STORAGE//
import AsyncStorage from "@react-native-async-storage/async-storage";

//* AUTH STATE
export const useAuth = create(
  persist(
    (set) => ({
      user: null,
      token: null,

      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
