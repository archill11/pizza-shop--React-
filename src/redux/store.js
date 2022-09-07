import { configureStore } from '@reduxjs/toolkit'
import filtertReducer from './categorySlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    filter: filtertReducer,
    cart: cartReducer,
  },
})

