import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../types/store'
import { ICocktailResponse } from '../types'

interface IMargaritaState {
  cocktailInfo?: ICocktailResponse
  loading: boolean
}

const initialState: IMargaritaState = {
  loading: false,
}

export const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
    setCocktailInfo: (state, action: PayloadAction<ICocktailResponse>) => {
      state.cocktailInfo = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setCocktailInitialState: () => initialState,
  },
})

export const { setCocktailInfo, setLoading, setCocktailInitialState } = cocktailSlice.actions

export const selectCocktail = (state: RootState) => state.cocktail

export default cocktailSlice.reducer
