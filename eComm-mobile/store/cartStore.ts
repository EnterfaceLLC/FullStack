//*  ZUSTAND//
import { create } from "zustand";

//* CART STATE//
export const useCart = create((set) => ({
  items: [],

  addProduct: (product: any) =>
    set((state) => ({
      items: [...state.items, { product, quantity: 1 }],
    })),

  resetCart: () => set({ items: [] }),
}));
