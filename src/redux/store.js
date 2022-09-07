import { configureStore } from '@reduxjs/toolkit'
import filtertReducer from './categorySlice'

export const store = configureStore({
  reducer: {
    filter: filtertReducer,
  },
})

