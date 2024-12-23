import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../api/api'
import { setCocktailInfo, setLoading } from './cocktailSlice'
import { TCocktail } from '../types'
import { RootState } from '../types/store'

export const getCocktailInfo = createAsyncThunk<void, TCocktail, { state: RootState }>(
  'cocktail/getCocktailInfo',
  async (code, { rejectWithValue, dispatch }) => {
    dispatch(setLoading(true))
    try {
      const response = await api.getCocktailInfo(code)
      dispatch(setCocktailInfo(response))
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message)
      }
      return rejectWithValue(err)
    } finally {
      dispatch(setLoading(false))
    }
  },
)
