import { configureStore } from '@reduxjs/toolkit'
import filtertReducer from './categorySlice'
import cartReducer from './cartSlice'
import productsReducer from './productsSlice'

export const store = configureStore({
  reducer: {
    filter: filtertReducer,
    cart: cartReducer,
    products: productsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

