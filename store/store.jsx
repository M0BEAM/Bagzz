import { create } from 'zustand'

const useStore = create((set) => ({
  // basket functions
  basket: [],
  addToBasket: (product) => set((state) => ({
    basket: state.basket.findIndex((item) => item.id == product.id) == -1 ? [...state.basket, { ...product, quantity: 1 }] : state.basket
  })),
  increaseQ: (productId) => set((state) => ({
    basket: state.basket.map((item) => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)
  })),
  decreaseQ: (productId) => set((state) => ({
    basket: state.basket.map((item) => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)
  })),
  // favorite functions
  favorite: [],
  addToFavorite: (product) => set((state) => ({
    favorite: state.favorite.findIndex((item) => item.id == product.id) == -1 ? [...state.favorite, { ...product, quantity: 1 }] : state.favorite.filter((item) => item.id != product.id)
  })),
  removeFromFavorite: (productId) => set((state) => ({
    favorite: state.favorite.filter((item) => item.id != productId)
  })),
}))

export default useStore;