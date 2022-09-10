import { configureStore } from '@reduxjs/toolkit'
import filtertReducer from './category/slice'
import cartReducer from './cart/slice'
import productsReducer from './products/slice'

export const store = configureStore({
  reducer: {
    filter: filtertReducer,
    cart: cartReducer,
    products: productsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

