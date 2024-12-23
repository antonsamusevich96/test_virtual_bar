import { configureStore } from '@reduxjs/toolkit'
import cocktail from '../store/cocktailSlice'

export const store = configureStore({
  reducer: {
    cocktail,
  },
})
