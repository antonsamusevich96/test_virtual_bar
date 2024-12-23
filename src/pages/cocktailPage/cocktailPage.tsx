import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useAppDispatch } from '../../shared/hooks/useAppDispatch'
import { useAppSelector } from '../../shared/hooks/useAppSelector'
import { selectCocktail, setCocktailInitialState } from '../../store/cocktailSlice'
import { TCocktail } from '../../types'
import { getCocktailInfo } from '../../store/cocktailThunks'
import CocktailDescription from '../../components/cocktailDescription/cocktailDescription'
import CocktailIngredients from '../../components/cocktailIngredients/cocktailIngredients'

export default function CocktailPage() {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const [error, setError] = useState('')
  const { cocktailInfo, loading } = useAppSelector(selectCocktail)
  
  useEffect(() => {
    const code = location.pathname.replace('/', '') as TCocktail
    dispatch(getCocktailInfo(code)).unwrap().catch((err: string) => setError(err))
    return () => {
      dispatch(setCocktailInitialState())
    }
  }, [location.pathname])
  
  if (loading) {
    return <div>...Loading...</div>
  }
  if (error) {
    return <div>{error}</div>
  }
  if (!cocktailInfo) {
    return null
  }
  return <div>
    {cocktailInfo.drinks.map(el => (
      <div key={el.idDrink}>
        <CocktailDescription drink={el} />
        <CocktailIngredients drink={el} />
      </div>
    ))}
  </div>
}
